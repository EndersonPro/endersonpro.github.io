import { HiChevronRight, HiExternalLink } from "react-icons/hi";
import { NavLink } from "react-router";
import { m } from "../../paraglide/messages.js";

type Project = {
	title: string;
	description: () => string;
	url?: string;
	/** Internal route; takes precedence over `url` and opens in the same tab. */
	to?: string;
	category: "product" | "mobile" | "opensource";
	tech: string;
};

const categoryLabel: Record<Project["category"], () => string> = {
	product: m.projects_category_product,
	mobile: m.projects_category_mobile,
	opensource: () => "Open source",
};

const projects: Array<Project> = [
	{
		title: "Reins",
		description: m.projects_reins_desc,
		to: "/reins",
		category: "product",
		tech: "Flutter",
	},
	{
		title: "Melonn Drivers",
		description: m.projects_melonn_drivers_desc,
		url: "https://play.google.com/store/apps/details?id=com.melonn.drivers",
		category: "mobile",
		tech: "Flutter",
	},
	{
		title: "Melonn Ops",
		description: m.projects_melonn_ops_desc,
		url: "https://melonn.com/",
		category: "mobile",
		tech: "Flutter",
	},
	{
		title: "EstarBien Uninorte",
		description: m.projects_estarbien_desc,
		url: "https://play.google.com/store/apps/details?id=co.edu.uninorte.estarbien.dev",
		category: "mobile",
		tech: "Flutter",
	},
	{
		title: "Solutoday",
		description: m.projects_solutoday_desc,
		url: "https://solutoday.com/",
		category: "mobile",
		tech: "Flutter",
	},
	{
		title: "flutree",
		description: m.projects_flutree_desc,
		url: "https://github.com/EndersonPro/flutree",
		category: "opensource",
		tech: "Go",
	},
	{
		title: "perfscope",
		description: m.projects_perfscope_desc,
		url: "https://github.com/EndersonPro/perfscope",
		category: "opensource",
		tech: "Dart",
	},
];

export const ProjectsPage = () => {
	return (
		<div>
			<header className="page-header">
				<span className="eyebrow">{m.projects_eyebrow()}</span>
				<h1 className="page-header__title">{m.projects_title()}</h1>
				<p className="page-header__lead">{m.projects_lead()}</p>
			</header>
			<div className="projects">
				{projects.map(({ title, description, url, to, category, tech }) => {
					const meta = `${categoryLabel[category]()} · ${tech}`;

					return (
						<article className="project-card" key={title}>
							<div className="project-card__body">
								<span className="eyebrow project-card__meta">{meta}</span>
								<h3 className="project-card__title">{title}</h3>
								<p className="project-card__desc">{description()}</p>
								{to ? (
									<NavLink to={to} className="project-card__link">
										{m.projects_link_guide()} <HiChevronRight />
									</NavLink>
								) : (
									url && (
										<a
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="project-card__link"
										>
											{category === "opensource" ? m.projects_link_repo() : m.projects_link_project()}{" "}
											<HiExternalLink />
										</a>
									)
								)}
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
};
