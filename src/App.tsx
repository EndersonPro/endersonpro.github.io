import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import { Nav } from "./components/nav";
import { AboutPage } from "./pages/about/about";
import { HomePage } from "./pages/home/home";
import { ProjectsPage } from "./pages/projects/projects";

const pageTransition = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
	transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const App = () => {
	const location = useLocation();
	return (
		<div className="main">
			<Nav />
			<AnimatePresence mode="wait">
				<motion.div
					key={location.pathname}
					{...pageTransition}
				>
					<Routes location={location}>
						<Route index element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
					</Routes>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
