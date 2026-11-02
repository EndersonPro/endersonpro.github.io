import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { FlowDiagram } from "../../components/flow-diagram/flow-diagram";
import { LoopSection } from "../../components/loop-section/loop-section";
import { GITHUB_URL, LINKEDIN_URL, type Product, products, tools } from "../../lib/portfolio-data";
import { m } from "../../paraglide/messages.js";

const arrowOut = (
	<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
		<path d="M6 14 14 6M7 6h7v7" />
	</svg>
);

const languages = ["Flutter", "Dart", "Rust", "Go", "TypeScript", "React"];
const tooling = ["Claude Code", "Codex", "OpenCode", "Firebase", "Shorebird", "Fastlane", "GitHub Actions"];

const steps = [
	{ title: m.method_step1_title, desc: m.method_step1_desc },
	{ title: m.method_step2_title, desc: m.method_step2_desc },
	{ title: m.method_step3_title, desc: m.method_step3_desc },
	{ title: m.method_step4_title, desc: m.method_step4_desc },
];

const jobs = [
	{ years: "2025", now: true, company: "Siigo", role: "Flutter Developer Senior", desc: m.experience_siigo_desc },
	{ years: "2024 — 2025", company: "Melonn", role: "Mobile Dev Lead", desc: m.experience_melonn_lead_desc },
	{ years: "2021 — 2024", company: "Melonn", role: "Cloud Engineer", desc: m.experience_melonn_cloud_desc },
	{ years: "2020 — 2021", company: "Condor Labs", role: "Software Engineer", desc: m.experience_condor_desc },
];

const ProductRow = ({ product, index }: { product: Product; index: number }) => {
	const { name, icon, desc, status, live, stack, href, to, linkLabel, shots } = product;
	const content: ReactNode = (
		<>
			<span className="product__no">{String(index + 1).padStart(2, "0")}</span>
			<div className="product__body">
				<h3 className="product__name">{name}</h3>
				<p className="product__desc">{desc()}</p>
			</div>
			<div className="product__side">
				<span className={`status ${live ? "status--live" : ""}`}>{status()}</span>
				<div className="product__meta">
					{stack.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>
				{linkLabel && (
					<span className="product__link">
						{linkLabel()} {to ? "→" : "↗"}
					</span>
				)}
			</div>
			<div className="product__icon">
				<img src={icon} alt={m.product_icon_alt({ name })} width={168} height={168} loading="lazy" />
			</div>
			{shots && (
				<div className="product__shots">
					{shots.map(({ src, alt }) => (
						<img key={src} src={src} alt={alt()} width={640} height={1385} />
					))}
				</div>
			)}
		</>
	);

	return (
		<li>
			{to ? (
				<NavLink className="product" to={to}>
					{content}
				</NavLink>
			) : href ? (
				<a className="product" href={href} target="_blank" rel="noopener noreferrer">
					{content}
				</a>
			) : (
				<div className="product">{content}</div>
			)}
		</li>
	);
};

const Marquee = ({ items, reverse }: { items: Array<string>; reverse?: boolean }) => (
	<div className={`marquee ${reverse ? "marquee--rev" : ""}`} aria-hidden="true">
		<div className="marquee__track">
			{[...items, ...items].map((item, index) => (
				<span key={`${item}-${index}`}>{item}</span>
			))}
		</div>
	</div>
);

export const HomePage = () => {
	return (
		<div className="home">
			<section className="hero">
				<h1 className="hero__name">
					<span>Enderson</span>
					<span>
						Vizcaino<span className="dot">.</span>
					</span>
				</h1>
				<div className="hero__row">
					<p className="hero__statement">
						{m.home_hero_statement()} <em>{m.home_hero_statement_accent()}</em>
					</p>
					<div className="hero__aside">
						<p>{m.home_hero_intro()}</p>
						<div className="hero__actions">
							<a className="btn btn--ink" href="#productos">
								{m.home_cta_products()}
								<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
									<path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
								</svg>
							</a>
							<a className="btn btn--line" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						</div>
					</div>
				</div>
				<FlowDiagram />
			</section>

			<LoopSection />

			<section id="productos">
				<div className="sec-head">
					<h2 className="sec-title">{m.products_title()}</h2>
					<p className="sec-lede">{m.products_lede()}</p>
				</div>
				<ol className="products">
					{products.map((product, index) => (
						<ProductRow key={product.name} product={product} index={index} />
					))}
				</ol>
			</section>

			<section>
				<div className="sec-head">
					<h2 className="sec-title">{m.tools_title()}</h2>
					<p className="sec-lede">{m.tools_lede()}</p>
				</div>
				<div className="tools">
					{tools.map(({ name, desc, stack, href }) => (
						<a className="tool" key={name} href={href} target="_blank" rel="noopener noreferrer">
							<div className="tool__name">
								{name} {arrowOut}
							</div>
							<p>{desc()}</p>
							<small>{stack}</small>
						</a>
					))}
				</div>
			</section>

			<section className="method" id="metodo">
				<div className="sec-head">
					<h2 className="sec-title">{m.method_title()}</h2>
					<p className="sec-lede">{m.method_lede()}</p>
				</div>
				<ol className="steps">
					{steps.map(({ title, desc }) => (
						<li className="step" key={title()}>
							<h3>{title()}</h3>
							<p>{desc()}</p>
						</li>
					))}
				</ol>
				<Marquee items={languages} />
				<Marquee items={tooling} reverse />
			</section>

			<section id="experiencia">
				<div className="sec-head">
					<h2 className="sec-title">{m.experience_title()}</h2>
					<p className="sec-lede">{m.experience_lede()}</p>
				</div>
				<ol className="jobs">
					{jobs.map(({ years, now, company, role, desc }) => (
						<li className={`job ${now ? "job--now" : ""}`} key={`${company}-${role}`}>
							<span className="job__when">{now ? `${years} — ${m.experience_now()}` : years}</span>
							<div className="job__who">
								{company}
								<small>{role}</small>
							</div>
							<p>{desc()}</p>
						</li>
					))}
				</ol>
			</section>

			<section className="contact" id="contacto">
				<a className="contact__big" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
					{m.contact_cta()}
					<span>→</span>
				</a>
			</section>
		</div>
	);
};
