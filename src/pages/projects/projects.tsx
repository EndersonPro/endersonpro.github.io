import { HiExternalLink } from "react-icons/hi";

type Project = {
	title: string;
	description: string;
	url?: string;
	meta?: string;
};

const projects: Array<Project> = [
	{
		title: "Melonn Drivers",
		description:
			"Aplicación para conductores de Melonn, donde pueden ver sus pedidos, rutas y demás información relevante para su trabajo.",
		url: "https://play.google.com/store/apps/details?id=com.melonn.drivers",
		meta: "App móvil · Flutter",
	},
	{
		title: "Melonn Ops",
		description:
			"Aplicación para operadores de Melonn, donde se gestionan varios procesos internos de las bodegas.",
		url: "https://melonn.com/",
		meta: "App móvil · Flutter",
	},
	{
		title: "EstarBien Uninorte",
		description:
			"Aplicación enfocada en proporcionar psicoeducación guiada y herramientas relacionadas a la salud mental, física y bienestar emocional.",
		url: "https://play.google.com/store/apps/details?id=co.edu.uninorte.estarbien.dev",
		meta: "App móvil · Flutter",
	},
	{
		title: "Solutoday",
		description:
			"Aplicación que ubica al instante a los mejores profesionales de servicio disponibles en tu zona para recibir una experiencia a domicilio.",
		url: "https://solutoday.com/",
		meta: "App móvil · Flutter",
	},
	{
		title: "flutree",
		description:
			"Gestión del ciclo de vida de Git worktrees en multi-repo, pensada para flujos de desarrollo orientados a Flutter.",
		url: "https://github.com/EndersonPro/flutree",
		meta: "Open source · Go",
	},
	{
		title: "perfscope",
		description:
			"Observabilidad de rendimiento local para Flutter: detección de anomalías de frames en dispositivo, sesiones, reportes y comparaciones.",
		url: "https://github.com/EndersonPro/perfscope",
		meta: "Open source · Dart",
	},
];

export const ProjectsPage = () => {
	return (
		<div>
			<header className="page-header">
				<span className="eyebrow">Portafolio</span>
				<h1 className="page-header__title">Proyectos</h1>
				<p className="page-header__lead">
					Productos en producción y herramientas open source: apps con
					Flutter, utilidades para developers y sistemas empresariales.
				</p>
			</header>
			<div className="projects">
				{projects.map(({ title, description, url, meta }) => (
					<article className="project-card" key={title}>
						<div className="project-card__body">
							{meta && <span className="eyebrow project-card__meta">{meta}</span>}
							<h3 className="project-card__title">{title}</h3>
							<p className="project-card__desc">{description}</p>
							{url && (
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="project-card__link"
								>
									{meta?.startsWith("Open source") ? "Ver repositorio" : "Ver proyecto"}{" "}
									<HiExternalLink />
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</div>
	);
};
