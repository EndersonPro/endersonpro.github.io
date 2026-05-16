import { HiExternalLink } from "react-icons/hi";
import driversImg from "../../assets/img/projects/driversapp.png";
import estarBienImg from "../../assets/img/projects/estarbien.png";
import opsAppImg from "../../assets/img/projects/opsapp.png";
import solutodayImg from "../../assets/img/projects/solutoday.png";

type Project = {
	title: string;
	description: string;
	image: string;
	url?: string;
};

const projects: Array<Project> = [
	{
		title: "Melonn Drivers",
		description:
			"Aplicación para conductores de Melonn, donde pueden ver sus pedidos, rutas y demás información relevante para su trabajo.",
		image: driversImg,
		url: "https://play.google.com/store/apps/details?id=com.melonn.drivers",
	},
	{
		title: "Melonn Ops",
		description:
			"Aplicación para operadores de Melonn, donde se gestionan varios procesos internos de las bodegas.",
		image: opsAppImg,
		url: "https://melonn.com/",
	},
	{
		title: "EstarBien Uninorte",
		description:
			"Aplicación enfocada en proporcionar psicoeducación guiada y herramientas relacionadas a la salud mental, física y bienestar emocional.",
		image: estarBienImg,
		url: "https://play.google.com/store/apps/details?id=co.edu.uninorte.estarbien.dev",
	},
	{
		title: "Solutoday",
		description:
			"Aplicación que ubica al instante a los mejores profesionales de servicio disponibles en tu zona para recibir una experiencia a domicilio.",
		image: solutodayImg,
		url: "https://solutoday.com/",
	},
];

export const ProjectsPage = () => {
	return (
		<div className="projects">
			{projects.map(({ title, description, image, url }) => (
				<article className="project-card" key={title}>
					<div className="project-card__img">
						<img
							src={image}
							alt={`Captura del proyecto ${title}`}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div className="project-card__body">
						<h3 className="project-card__title">{title}</h3>
						<p className="project-card__desc">{description}</p>
						{url && (
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="project-card__link"
							>
								Ver proyecto <HiExternalLink />
							</a>
						)}
					</div>
				</article>
			))}
		</div>
	);
};
