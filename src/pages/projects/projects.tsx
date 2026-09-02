import { HiExternalLink } from "react-icons/hi";
import { m } from "../../paraglide/messages.js";

type Project = {
	title: string;
	description: () => string;
	url?: string;
	category: "mobile" | "opensource";
	tech: string;
};

const projects: Array<Project> = [
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
				{projects.map(({ title, description, url, category, tech }) => {
					const meta = `${category === "mobile" ? m.projects_category_mobile() : "Open source"} · ${tech}`;

					return (
						<article className="project-card" key={title}>
							<div className="project-card__body">
								<span className="eyebrow project-card__meta">{meta}</span>
								<h3 className="project-card__title">{title}</h3>
								<p className="project-card__desc">{description()}</p>
								{url && (
									<a
										href={url}
										target="_blank"
										rel="noopener noreferrer"
										className="project-card__link"
									>
										{category === "opensource" ? m.projects_link_repo() : m.projects_link_project()}{" "}
										<HiExternalLink />
									</a>
								)}
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
};
