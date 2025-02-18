import driversImg from '../../assets/img/projects/driversapp.png';
import estarBienImg from '../../assets/img/projects/estarbien.png';
import opsAppImg from '../../assets/img/projects/opsapp.png';
import solutodayImg from '../../assets/img/projects/solutoday.png';


import './projects.css';

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
			"Aplicacion para conductores de Melonn, donde pueden ver sus pedidos, rutas y demas informacion relevante para su trabajo.",
		image: driversImg,
		url: "https://play.google.com/store/apps/details?id=com.melonn.drivers",
	},
	{
		title: "Melonn Ops",
		description:
			"Aplicacion para operadores de Melonn, acá se gestionan varios procesos internos de las bodegas.",
		image:
			opsAppImg,
		url: "https://melonn.com/",
	},
	{
		title: "EstarBien Uninorte",
		description:
			"Aplicacion enfocada en proporcionar psicoeducación guiada y herramientas a sus usuarios en temas relacionados a su salud metal, física y bienestar emocional.",
		image: estarBienImg,
		url: 'https://play.google.com/store/apps/details?id=co.edu.uninorte.estarbien.dev'
	},
	{
		title: "Solutoday",
		description:
			"Aplicacion que ubica al instante a los mejores profesionales de servicio disponibles en la zona donde te encuentres para que recibas una experiencia única a domicilio en la comodidad de tu casa.",
		image: solutodayImg,
		url: "https://solutoday.com/"
	},
	// {
	// 	title: "Project 1",
	// 	description:
	// 		"This is a project description lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero. Donec nec odio vitae libero. consectetur adipiscing elit. Donec nec odio vitae libero. Donec nec odio vitae libero.",
	// 	image:
	// 		"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	// },
	// {
	// 	title: "Project 1",
	// 	description:
	// 		"This is a project description lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae libero. Donec nec odio vitae libero. consectetur adipiscing elit. Donec nec odio vitae libero. Donec nec odio vitae libero.",
	// 	image:
	// 		"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	// },
];

export const ProjectsPage = () => {
	return (
		<div className="projects">
			{projects.map(({ title, description, image, url }) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div className="projects_project" key={title} onClick={() => {
					window.open(url, "_blank");
				}} >
					<figure className="projects_project_image">
						<img src={image} alt="title" />
					</figure>
					<h3 className="projects_project_title">{title}</h3>
					<p className="projects_project_description">{description}</p>
				</div>
			))}
		</div>
	);
};
