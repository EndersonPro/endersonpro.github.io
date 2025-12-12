import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { NavLink } from "react-router";
import { HeroText } from "../../components/profession/profession";
import { Profile } from "../../components/profile/profile";

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
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	in: { opacity: 1, y: 0 }
};

export const IsPage = () => {
	return (
		<motion.div 
			className="is_page"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<motion.div 
				className="is_page__content"
				variants={staggerVariants}
				initial="initial"
				animate="in"
			>
				<motion.h4 className="is_page__content__greeting" variants={itemVariants}>
					Hola, soy Enderson Vizcaino
				</motion.h4>
				<motion.div variants={itemVariants}>
					<HeroText id="profession" title="Software Engineer" />
				</motion.div>
				<motion.p className="is_page__content__about" variants={itemVariants}>
					Especializado en Arquitectura Móvil con Flutter, desarrollo de microservicios
					en la nube (AWS) y liderazgo de equipos técnicos. He construido aplicaciones
					empresariales escalables para empresas como <a href="https://www.siigo.com/" target="_blank" rel="noopener noreferrer">Siigo</a> y <a href="https://www.melonn.com/" target="_blank" rel="noopener noreferrer">Melonn</a>.
				</motion.p>
				<motion.div className="is_page__content__stats" variants={itemVariants}>
					<span className="stat">7+ años</span>
					<span className="stat-divider">·</span>
					<span className="stat">4 empresas</span>
					<span className="stat-divider">·</span>
					<span className="stat">10+ productos</span>
				</motion.div>
				<motion.div className="is_page__content__buttons" variants={itemVariants}>
					<NavLink
						to="/projects"
						className="btn btn_primary is_page__content__button"
					>
						Ver Proyectos <HiChevronRight />{" "}
					</NavLink>
					<a
						href="https://www.linkedin.com/in/endersonvizcaino/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn_secondary is_page__content__button"
					>
						<LuLinkedin /> LinkedIn
					</a>
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			>
				<Profile />
			</motion.div>
		</motion.div>
	);
};

