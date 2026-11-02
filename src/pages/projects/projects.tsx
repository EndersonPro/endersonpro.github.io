import { NavLink } from "react-router";
import { products, tools } from "../../lib/portfolio-data";
import { m } from "../../paraglide/messages.js";

type ClientProject = {
	title: string;
	description: () => string;
	url: string;
};

const clientWork: Array<ClientProject> = [
	{
		title: "Melonn Drivers",
		description: m.projects_melonn_drivers_desc,
		url: "https://play.google.com/store/apps/details?id=com.melonn.drivers",
	},
	{
		title: "Melonn Ops",
		description: m.projects_melonn_ops_desc,
		url: "https://melonn.com/",
	},
	{
		title: "EstarBien Uninorte",
		description: m.projects_estarbien_desc,
		url: "https://play.google.com/store/apps/details?id=co.edu.uninorte.estarbien.dev",
	},
	{
		title: "Solutoday",
		description: m.projects_solutoday_desc,
		url: "https://solutoday.com/",
	},
];

type RowProps = {
	index: number;
	title: string;
	description: string;
	meta: string;
	link?: { label: string; href?: string; to?: string };
};

const Row = ({ index, title, description, meta, link }: RowProps) => (
	<li className="prow">
		<span className="prow__no">{String(index + 1).padStart(2, "0")}</span>
		<h3 className="prow__title">{title}</h3>
		<div className="prow__body">
			<p>{description}</p>
			<span className="prow__meta">{meta}</span>
		</div>
		<div className="prow__link">
			{link?.to && <NavLink to={link.to}>{link.label} →</NavLink>}
			{link?.href && (
				<a href={link.href} target="_blank" rel="noopener noreferrer">
					{link.label} ↗
				</a>
			)}
		</div>
	</li>
);

export const ProjectsPage = () => {
	return (
		<div className="page-wrap projects">
			<header className="page-head">
				<span className="eyebrow">{m.projects_eyebrow()}</span>
				<h1 className="sec-title">{m.projects_title()}</h1>
				<p className="sec-lede">{m.projects_lead()}</p>
			</header>

			<section className="pgroup">
				<h2 className="pgroup__label">{m.projects_group_products()}</h2>
				<ol className="prows">
					{products.map(({ name, desc, stack, status, href, to, linkLabel }, index) => (
						<Row
							key={name}
							index={index}
							title={name}
							description={desc()}
							meta={`${status()} · ${stack.join(" · ")}`}
							link={linkLabel ? { label: linkLabel(), href, to } : undefined}
						/>
					))}
				</ol>
			</section>

			<section className="pgroup">
				<h2 className="pgroup__label">{m.projects_group_tools()}</h2>
				<ol className="prows">
					{tools.map(({ name, desc, stack, href }, index) => (
						<Row
							key={name}
							index={index}
							title={name}
							description={desc()}
							meta={stack}
							link={{ label: m.projects_link_repo(), href }}
						/>
					))}
				</ol>
			</section>

			<section className="pgroup">
				<h2 className="pgroup__label">{m.projects_group_client()}</h2>
				<ol className="prows">
					{clientWork.map(({ title, description, url }, index) => (
						<Row
							key={title}
							index={index}
							title={title}
							description={description()}
							meta="Flutter"
							link={{ label: m.projects_link_project(), href: url }}
						/>
					))}
				</ol>
			</section>
		</div>
	);
};
