import { motion } from "framer-motion";
import { Profile } from "../../components/profile/profile";
import { Timeline } from "../../components/timeline/timeline";
import "./about.css";

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

const staggerVariants = {
	initial: { opacity: 0, y: 20 },
	in: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2
		}
	}
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	in: { opacity: 1, y: 0 }
};

export const AboutPage = () => {
	return (
		<motion.div
			className="about"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<motion.div
				className="about__title_content"
				variants={staggerVariants}
				initial="initial"
				animate="in"
			>
				<motion.div variants={itemVariants}>
					<h3 className="about_title">Sobre mi</h3>
				</motion.div>
				<motion.div variants={itemVariants}>
					<Profile />
				</motion.div>
				<motion.hr className="line-blur" variants={itemVariants} />

				<motion.p className="about__content" variants={itemVariants}>
					Soy <b>Enderson Vizcaino</b>, un desarrollador Fullstack con más de 7 años de experiencia creando soluciones tecnológicas innovadoras. Mi pasión por la programación me ha llevado a trabajar en diversas áreas, desde el desarrollo backend y frontend hasta el liderazgo de equipos en entornos de desarrollo móvil y en la nube.

					Actualmente, me desempeño como Flutter Developer Sr en Siigo, donde me encuentro desarrollando, analizando y mejorando el rendimiento del aplicativo web llamado POS. A lo largo de mi carrera, he trabajado en empresas destacadas como Condor Labs y Melonn, además de desempeñarme como freelancer, desarrollando desde eCommerce hasta aplicaciones móviles y sistemas empresariales.

					Mis tecnologías y herramientas favoritas incluyen:

					<ul>
						<li>
							<b>Lenguajes:</b> JavaScript, TypeScript ❤️, Dart, Python, PHP

						</li>
						<li>
							<b>Frameworks y Tecnologías:</b> Node.js, React, Flutter, Laravel


						</li>
						<li>
							<b>Cloud & DevOps:</b> AWS ☁️, Docker, Firebase
						</li>
						<li><b>Bases de Datos:</b> MongoDB, OracleDB, MySQL</li>
					</ul>
				</motion.p>
			</motion.div>
			<motion.div
				className="experience"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			>
				<h3>Mi recorrido como profesional 👇 </h3>
				<Timeline />
			</motion.div>
		</motion.div>
	);
};
