import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
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

const pageVariants = {
	initial: { opacity: 0, y: 30, scale: 0.95 },
	in: { opacity: 1, y: 0, scale: 1 },
	out: { opacity: 0, y: -30, scale: 0.95 }
};

const pageTransition = {
	type: "tween",
	ease: [0.25, 0.46, 0.45, 0.94],
	duration: 0.5
};

const containerVariants = {
	initial: { opacity: 0 },
	in: { 
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3
		}
	}
};

const cardVariants = {
	initial: { opacity: 0, y: 50, scale: 0.9 },
	in: { 
		opacity: 1, 
		y: 0, 
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15
		}
	}
};

export const ProjectsPage = () => {
	const handleProjectClick = (url?: string, e?: React.MouseEvent) => {
		if (e) {
			e.stopPropagation();
		}
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<motion.div 
			className="projects"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<motion.div 
				variants={containerVariants}
				initial="initial"
				animate="in"
				style={{ display: 'contents' }}
			>
				{projects.map(({ title, description, image, url }) => (
					<motion.article 
						className="projects_project" 
						key={title}
						variants={cardVariants}
						whileHover={{
							y: -8,
							scale: 1.02,
							transition: { duration: 0.2 }
						}}
						whileTap={{ scale: 0.98 }}
					>
						<figure className="projects_project_image">
							<img 
								src={image} 
								alt={`Captura del proyecto ${title}`}
								loading="lazy"
								decoding="async"
							/>
						</figure>
						<div className="projects_project_content">
							<h3 className="projects_project_title">{title}</h3>
							<p className="projects_project_description">{description}</p>
						</div>
						<motion.button 
							className="projects_project_button btn btn_primary"
							onClick={(e) => handleProjectClick(url, e)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							aria-label={`Ver proyecto ${title}`}
						>
							Ver proyecto <HiExternalLink />
						</motion.button>
					</motion.article>
				))}
			</motion.div>
		</motion.div>
	);
};
