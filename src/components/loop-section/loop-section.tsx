import { useEffect, useRef, useState } from "react";
import { m } from "../../paraglide/messages.js";

const CHECK = (
	<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<path d="m2.5 6.2 2.3 2.3 4.7-5" />
	</svg>
);

const rows = [
	{ label: m.loop_row_auth, tag: "auth" },
	{ label: m.loop_row_crud, tag: "core" },
	{ label: m.loop_row_payments, tag: "core" },
	{ label: m.loop_row_groups, tag: "social" },
	{ label: m.loop_row_ai, tag: "ai" },
	{ label: m.loop_row_photos, tag: "media" },
	{ label: m.loop_row_playback, tag: "media" },
	{ label: m.loop_row_prefs, tag: "settings" },
	{ label: m.loop_row_hostile, tag: "edge" },
	{ label: m.loop_row_perms, tag: "edge" },
	{ label: m.loop_row_push, tag: "push" },
];

const prefersReducedMotion = () =>
	typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Rows tick one by one once the suite scrolls into view, then restart. */
const SuiteRunner = () => {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = prefersReducedMotion();
	const [started, setStarted] = useState(false);
	const [done, setDone] = useState(0);

	useEffect(() => {
		const node = ref.current;
		if (!node || reduced) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStarted(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [reduced]);

	useEffect(() => {
		if (!started) return;
		const delay = done === rows.length ? 2600 : 520 + Math.random() * 420;
		const timer = setTimeout(() => setDone((value) => (value === rows.length ? 0 : value + 1)), delay);
		return () => clearTimeout(timer);
	}, [started, done]);

	const progress = reduced ? rows.length : done;

	return (
		<div className="suite" ref={ref}>
			<div className="suite__head">
				<b>{m.loop_suite_title()}</b>
				<span>{m.loop_suite_meta()}</span>
			</div>
			<ol>
				{rows.map(({ label, tag }, index) => {
					const state = index < progress ? "ok" : started && index === progress ? "run" : "";
					return (
						<li key={tag + label()} className={state}>
							<span className="mark">{CHECK}</span>
							<span className="t">{label()}</span>
							<span className="d">{tag}</span>
						</li>
					);
				})}
			</ol>
			<div className="suite__foot">
				<span>
					<strong>{m.loop_foot_real_strong()}</strong> {m.loop_foot_real()}
				</span>
				<span>
					<strong>{m.loop_foot_fail_strong()}</strong> {m.loop_foot_fail()}
				</span>
			</div>
		</div>
	);
};

export const LoopSection = () => (
	<section id="loop" className="loop">
		<div className="sec-head">
			<h2 className="sec-title">{m.loop_title()}</h2>
			<p className="sec-lede">{m.loop_lede()}</p>
		</div>
		<div className="loop__grid">
			<svg viewBox="-60 -40 640 600" role="img" aria-label={m.loop_alt()}>
				<circle className="ring" cx="260" cy="260" r="200" />
				<circle className="ring-run" cx="260" cy="260" r="200" transform="rotate(-90 260 260)" />
				<g className="station">
					<circle cx="260" cy="60" r="8" />
					<text x="260" y="22" textAnchor="middle">{m.loop_station_spec()}</text>
					<text className="sub" x="260" y="40" textAnchor="middle">spec.md</text>
				</g>
				<g className="station">
					<circle cx="450.2" cy="198.2" r="8" />
					<text x="474.9" y="180.9" textAnchor="start">{m.loop_station_build()}</text>
					<text className="sub" x="474.9" y="198.9" textAnchor="start">{m.loop_station_build_sub()}</text>
				</g>
				<g className="station">
					<circle cx="377.6" cy="421.8" r="8" />
					<text x="392.8" y="452.1" textAnchor="start">{m.loop_station_test()}</text>
					<text className="sub" x="392.8" y="470.1" textAnchor="start">unit · widget</text>
				</g>
				<g className="station station--hot">
					<circle cx="142.4" cy="421.8" r="11" />
					<text x="127.2" y="452.1" textAnchor="end">E2E</text>
					<text className="sub" x="127.2" y="470.1" textAnchor="end">Maestro</text>
				</g>
				<g className="station">
					<circle cx="69.8" cy="198.2" r="8" />
					<text x="45.1" y="180.9" textAnchor="end">{m.loop_station_ship()}</text>
					<text className="sub" x="45.1" y="198.9" textAnchor="end">Shorebird · Fastlane</text>
				</g>
				<text className="loop__count" x="256" y="292" textAnchor="middle">E2E</text>
				<text className="loop__count-label" x="260" y="326" textAnchor="middle">{m.loop_station_e2e_label()}</text>
			</svg>
			<SuiteRunner />
		</div>
	</section>
);
