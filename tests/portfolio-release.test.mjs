import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";


let cacheDir;
let MemoryRouter;
let vite;
let HomePage;
let ProjectsPage;
let ReinsPage;
let overwriteGetLocale;

before(async () => {
	cacheDir = await mkdtemp(join(tmpdir(), "portfolio-test-"));
	vite = await createServer({
		cacheDir,
		server: { middlewareMode: true, watch: null, ws: false },
		plugins: [{
			name: "portfolio-test-router",
			resolveId(id) {
				if (id === "virtual:portfolio-test-router") return "\0" + id;
			},
			load(id) {
				if (id === "\0virtual:portfolio-test-router") {
					return 'export { MemoryRouter } from "react-router";';
				}
			},
		}],
	});
	({ MemoryRouter } = await vite.ssrLoadModule("virtual:portfolio-test-router"));
	({ HomePage } = await vite.ssrLoadModule("/src/pages/home/home.tsx"));
	({ ProjectsPage } = await vite.ssrLoadModule("/src/pages/projects/projects.tsx"));
	({ ReinsPage } = await vite.ssrLoadModule("/src/pages/reins/reins.tsx"));
	({ overwriteGetLocale } = await vite.ssrLoadModule("/src/paraglide/runtime.js"));
});

after(async () => {
	await vite?.close();
	if (cacheDir) await rm(cacheDir, { recursive: true, force: true });
});

function render(Page, locale) {
	overwriteGetLocale(() => locale);
	return renderToStaticMarkup(createElement(MemoryRouter, null, createElement(Page)));
}

function homeCard(markup, name) {
	const cards = markup.split('<ol class="products">')[1].split("</ol>")[0];
	return cards.split("</li>").find((card) => card.includes(`>${name}</h3>`)) ?? "";
}

for (const locale of ["es", "en"]) {
	test(`Clari replaces Cuenta Fácil and links to the App Store (${locale})`, () => {
		const home = render(HomePage, locale);
		const clari = homeCard(home, "Clari");
		assert.match(clari, /href="https:\/\/apps\.apple\.com\/app\/id6826743525"/);
		assert.match(clari, /status--live[^>]*>[^<]*App Store/);
		assert.match(clari, /src="[^"]*\/clari\.webp"/);
		const projects = render(ProjectsPage, locale);
		assert.match(projects, />Clari<\/h3>.*?href="https:\/\/apps\.apple\.com\/app\/id6826743525"/s);
		assert.doesNotMatch(home + projects, /Cuenta Fácil|TestFlight/);
	});

	test(`Reins links to the iOS release and retains the Android beta (${locale})`, () => {
		const reins = homeCard(render(HomePage, locale), "Reins");
		assert.match(reins, /href="https:\/\/apps\.apple\.com\/app\/id6808745918"/);
		assert.match(reins, /status--live[^>]*>[^<]*App Store[^<]*Android/);
		assert.match(render(ProjectsPage, locale), />Reins<\/h3>.*?href="https:\/\/apps\.apple\.com\/app\/id6808745918"/s);
		const guide = render(ReinsPage, locale);
		assert.equal(guide.match(/href="https:\/\/apps\.apple\.com\/app\/id6808745918"/g)?.length, 2);
		assert.match(guide, /href="https:\/\/play\.google\.com\/apps\/testing\/dev\.endersonvizc\.reins"/);
		assert.doesNotMatch(guide, /TestFlight/i);
	});

	test(`Clari and Reins show four localized screenshots each (${locale})`, () => {
		const home = render(HomePage, locale);
		for (const [name, slug] of [["Clari", "clari"], ["Reins", "reins"]]) {
			const gallery = homeCard(home, name).split('class="product__shots">')[1] ?? "";
			const shots = [...gallery.matchAll(/<img[^>]+>/g)].map(([tag]) => tag);
			assert.equal(shots.length, 4, name);
			for (const shot of shots) {
				assert.ok(shot.includes(`/${slug}/${locale}/`), shot);
				assert.ok(shot.includes(`alt="${name}: `), shot);
				assert.ok(shot.includes('loading="lazy"'), shot);
			}
		}
	});
}

for (const locale of ["es", "en"]) {
	test(`Infinity and Pear Music show two screenshots without changing their store links (${locale})`, () => {
		const home = render(HomePage, locale);
		for (const [name, galleryPath, store] of [
			["Infinity", "/infinity/", "https://apps.apple.com/app/id6802155816"],
			["Pear Music", `/pear-music/${locale}/`, "https://play.google.com/store/apps/details?id=dev.endersonvizc.pearmusic"],
		]) {
			const card = homeCard(home, name);
			assert.ok(card.includes(`href="${store}"`), name);
			const gallery = card.split('class="product__shots">')[1] ?? "";
			const shots = [...gallery.matchAll(/<img[^>]+>/g)].map(([tag]) => tag);
			assert.equal(shots.length, 2, name);
			for (const shot of shots) {
				assert.ok(shot.includes(galleryPath), shot);
				assert.ok(shot.includes(`alt="${name}: `), shot);
				assert.ok(shot.includes('loading="lazy"'), shot);
			}
		}
	});
}

test("Clari and Reins lead the portfolio product lists", () => {
	const expected = ["Clari", "Reins", "Infinity", "Pear Music"];
	for (const [Page, listClass] of [[HomePage, "products"], [ProjectsPage, "prows"]]) {
		const list = render(Page, "es").split(`<ol class="${listClass}">`)[1].split("</ol>")[0];
		const names = [...list.matchAll(/<h3[^>]*>([^<]+)<\/h3>/g)].map(([, name]) => name);
		assert.deepEqual(names, expected);
	}
});

test("Reins uses the updated app icon in its product card", () => {
	const card = homeCard(render(HomePage, "es"), "Reins");
	assert.match(card, /src="[^"]*\/apps\/reins\.webp"/);
});
