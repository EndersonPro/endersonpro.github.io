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
					<Profile />
				</motion.div>
				<motion.hr className="line-blur" variants={itemVariants} />

				<motion.div className="about__content" variants={itemVariants}>
					<p className="about__bio">
						Soy <b>Enderson Vizcaino</b>, un desarrollador Fullstack con más de 7 años de experiencia creando soluciones tecnológicas innovadoras. Mi pasión por la programación me ha llevado a trabajar en diversas áreas, desde el desarrollo backend y frontend hasta el liderazgo de equipos en entornos de desarrollo móvil y en la nube.
					</p>
					<p className="about__bio">
						Actualmente, me desempeño como <b>Flutter Developer Sr</b> en <b>Siigo</b>, donde me encuentro desarrollando, analizando y mejorando el rendimiento del aplicativo web llamado POS. A lo largo de mi carrera, he trabajado en empresas destacadas como <b>Condor Labs</b> y <b>Melonn</b>, además de desempeñarme como freelancer, desarrollando desde eCommerce hasta aplicaciones móviles y sistemas empresariales.
					</p>

					<div className="tech-section">
						<h4>🛠️ Tecnologías Clave</h4>
						<div className="tech-tags">
							<span className="tech-tag">TypeScript</span>
							<span className="tech-tag">JavaScript</span>
							<span className="tech-tag">Dart</span>
							<span className="tech-tag">Python</span>
							<span className="tech-tag">PHP</span>
							<span className="tech-tag">C#</span>
							<span className="tech-tag">Go</span>
							<span className="tech-tag">Flutter</span>
							<span className="tech-tag">React</span>
							<span className="tech-tag">Node.js</span>
							<span className="tech-tag">Angular</span>
							<span className="tech-tag">Vue</span>
							<span className="tech-tag">Laravel</span>
							<span className="tech-tag">Ionic</span>
							<span className="tech-tag">ElectronJS</span>
							<span className="tech-tag">AWS Lambda</span>
							<span className="tech-tag">API Gateway</span>
							<span className="tech-tag">S3</span>
							<span className="tech-tag">CloudWatch</span>
							<span className="tech-tag">Docker</span>
							<span className="tech-tag">Firebase</span>
							<span className="tech-tag">MongoDB</span>
							<span className="tech-tag">MySQL</span>
							<span className="tech-tag">OracleDB</span>
						</div>
					</div>
				</motion.div>
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
