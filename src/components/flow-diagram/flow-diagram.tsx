import { useState } from "react";
import { products } from "../../lib/portfolio-data";
import { m } from "../../paraglide/messages.js";

type WireProps = { d: string; group: string; index: number; focus: number | null };

const Wire = ({ d, group, index, focus }: WireProps) => {
	const on = group === "in" || group === `p${focus}`;
	return (
		<>
			<path d={d} className="wire" />
			<path
				d={d}
				className={`pulse ${focus !== null && on ? "on" : ""}`}
				style={{ animationDelay: `${-((index * 0.37) % 1.6)}s` }}
			/>
		</>
	);
};

const AGENTS_Y = [90, 190, 290];
const PRODUCT_Y = [46, 142, 238, 334];
const AGENTS_X = [58, 180, 302];
const PRODUCT_X = [45, 135, 225, 315];
const AGENT_NAMES = ["Claude Code", "Codex", "OpenCode"];

const Spec = ({ vertical }: { vertical?: boolean }) =>
	vertical ? (
		<>
			<rect x="120" y="10" width="120" height="80" rx="10" fill="var(--ground)" stroke="var(--ink)" strokeWidth="1.5" />
			<text x="134" y="36" className="node-meta" style={{ fill: "var(--ink)" }}>
				spec.md
			</text>
			<rect x="134" y="50" width="88" height="4" rx="2" fill="var(--line)" />
			<rect x="134" y="62" width="64" height="4" rx="2" fill="var(--line)" />
			<rect x="134" y="74" width="40" height="4" rx="2" fill="var(--accent)" />
		</>
	) : (
		<>
			<rect x="20" y="130" width="150" height="120" rx="12" fill="var(--ground)" stroke="var(--ink)" strokeWidth="1.5" />
			<text x="38" y="162" className="node-meta" style={{ fill: "var(--ink)" }}>
				spec.md
			</text>
			<rect x="38" y="180" width="110" height="5" rx="2.5" fill="var(--line)" />
			<rect x="38" y="196" width="86" height="5" rx="2.5" fill="var(--line)" />
			<rect x="38" y="212" width="100" height="5" rx="2.5" fill="var(--line)" />
			<rect x="38" y="228" width="60" height="5" rx="2.5" fill="var(--accent)" />
		</>
	);

export const FlowDiagram = () => {
	const [focus, setFocus] = useState<number | null>(null);
	const focusProps = (i: number) => ({
		onMouseEnter: () => setFocus(i),
		onFocus: () => setFocus(i),
		onMouseLeave: () => setFocus(null),
		onBlur: () => setFocus(null),
	});

	return (
		<>
			<div className="flow flow--h" data-focus={focus ?? undefined}>
				<div className="flow__head">
					<b>{m.home_flow_title()}</b>
					<span>{m.home_flow_hint()}</span>
				</div>
				<svg viewBox="0 0 1200 380" role="img" aria-label={m.home_flow_alt()}>
					<defs>
						<clipPath id="flow-sq">
							<rect width="72" height="72" rx="17" />
						</clipPath>
					</defs>
					<g>
						{AGENTS_Y.map((y, i) => (
							<g key={y}>
								<Wire d={`M170 190 C 280 190, 270 ${y}, 380 ${y}`} group="in" index={i * 2} focus={focus} />
								<Wire d={`M560 ${y} C 640 ${y}, 620 190, 700 190`} group="in" index={i * 2 + 1} focus={focus} />
							</g>
						))}
						{PRODUCT_Y.map((cy, i) => (
							<Wire
								key={cy}
								d={`M860 190 C 940 190, 920 ${cy}, 1000 ${cy}`}
								group={`p${i}`}
								index={i + 6}
								focus={focus}
							/>
						))}
					</g>
					<Spec />
					<g>
						{AGENTS_Y.map((y, i) => (
							<g key={y}>
								<rect x="380" y={y - 22} width="180" height="44" rx="22" fill="var(--ink)" />
								<text x="470" y={y + 5} textAnchor="middle" className="node-text">
									{AGENT_NAMES[i]}
								</text>
							</g>
						))}
					</g>
					<g>
						<rect x="700" y="160" width="160" height="60" rx="12" fill="var(--ground)" stroke="var(--ink)" strokeWidth="1.5" />
						<text x="780" y="186" textAnchor="middle" className="node-label">
							{m.home_flow_review()}
						</text>
						<text x="780" y="206" textAnchor="middle" className="node-meta">
							{m.home_flow_review_meta()}
						</text>
					</g>
					<g>
						{products.map((p, i) => (
							<g
								key={p.name}
								className="product-node"
								tabIndex={0}
								transform={`translate(1000 ${PRODUCT_Y[i] - 36})`}
								{...focusProps(i)}
							>
								<image href={p.icon} width="72" height="72" clipPath="url(#flow-sq)" preserveAspectRatio="xMidYMid slice" />
								<text x="90" y="32" className="node-label">
									{p.name}
								</text>
								<text x="90" y="52" className={`node-meta ${p.live ? "node-meta--live" : ""}`}>
									{p.nodeStatus()}
								</text>
							</g>
						))}
					</g>
				</svg>
			</div>

			<div className="flow flow--v">
				<div className="flow__head">
					<b>{m.home_flow_title()}</b>
				</div>
				<svg viewBox="0 0 360 600" role="img" aria-label={m.home_flow_alt()}>
					<defs>
						<clipPath id="flow-sq-v">
							<rect width="60" height="60" rx="14" />
						</clipPath>
					</defs>
					<g>
						{AGENTS_X.map((x, i) => (
							<g key={x}>
								<Wire d={`M180 90 C 180 130, ${x} 130, ${x} 168`} group="in" index={i * 2} focus={null} />
								<Wire d={`M${x} 204 C ${x} 250, 180 250, 180 290`} group="in" index={i * 2 + 1} focus={null} />
							</g>
						))}
						{PRODUCT_X.map((cx, i) => (
							<Wire
								key={cx}
								d={`M180 344 C 180 390, ${cx} 390, ${cx} 430`}
								group={`p${i}`}
								index={i + 6}
								focus={null}
							/>
						))}
					</g>
					<Spec vertical />
					{AGENTS_X.map((x, i) => (
						<g key={x}>
							<rect x={x - 56} y="168" width="112" height="36" rx="18" fill="var(--ink)" />
							<text x={x} y="191" textAnchor="middle" className="node-text" style={{ fontSize: 12 }}>
								{AGENT_NAMES[i]}
							</text>
						</g>
					))}
					<rect x="110" y="290" width="140" height="54" rx="10" fill="var(--ground)" stroke="var(--ink)" strokeWidth="1.5" />
					<text x="180" y="314" textAnchor="middle" className="node-label" style={{ fontSize: 14 }}>
						{m.home_flow_review()}
					</text>
					<text x="180" y="332" textAnchor="middle" className="node-meta" style={{ fontSize: 11 }}>
						{m.home_flow_review_meta()}
					</text>
					<g>
						{products.map((p, i) => (
							<g key={p.name} transform={`translate(${PRODUCT_X[i] - 30} 430)`}>
								<image href={p.icon} width="60" height="60" clipPath="url(#flow-sq-v)" preserveAspectRatio="xMidYMid slice" />
								<text x="30" y="82" textAnchor="middle" className="node-label" style={{ fontSize: 12.5 }}>
									{p.name}
								</text>
								<text
									x="30"
									y="100"
									textAnchor="middle"
									className={`node-meta ${p.live ? "node-meta--live" : ""}`}
									style={{ fontSize: 11 }}
								>
									{p.nodeStatus()}
								</text>
							</g>
						))}
					</g>
				</svg>
			</div>
		</>
	);
};
