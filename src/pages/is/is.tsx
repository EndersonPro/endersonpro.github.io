import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
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
					Hola 👋, soy Enderson Vizcaino
				</motion.h4>
				<motion.div variants={itemVariants}>
					<HeroText id="profession" title="Fullstack developer" />
				</motion.div>
				<motion.p className="is_page__content__about" variants={itemVariants}>
					{" "}
					Soy un desarrollador de software con experiencia en el desarrollo de
					aplicaciones web y móviles. Me apasiona la tecnología y la
					programación, y me encanta aprender cosas nuevas.{" "}
				</motion.p>
				<motion.div variants={itemVariants}>
					<NavLink
						to="/projects"
						className="btn btn_primary is_page__content__button"
					>
						Proyectos <HiChevronRight />{" "}
					</NavLink>
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
