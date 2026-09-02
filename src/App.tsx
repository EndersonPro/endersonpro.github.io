import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Footer } from "./components/footer/footer";
import { Nav } from "./components/nav";
import { AboutPage } from "./pages/about/about";
import { HomePage } from "./pages/home/home";
import { ProjectsPage } from "./pages/projects/projects";
import { ReinsPage } from "./pages/reins/reins";

const pageTransition = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
	transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const App = () => {
	const location = useLocation();

	if (location.pathname === "/privacy/infinity" || location.pathname === "/privacy/pear-music") {
		return (
			<Routes location={location}>
				<Route path="/privacy/infinity" element={<Navigate to="/privacy/infinity.html" replace />} />
				<Route path="/privacy/pear-music" element={<Navigate to="/privacy/pear-music.html" replace />} />
			</Routes>
		);
	}

	return (
		<div className="app">
			<Nav />
			<main className="app__main">
				<AnimatePresence mode="wait">
					<motion.div key={location.pathname} className="container" {...pageTransition}>
						<Routes location={location}>
							<Route index element={<HomePage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/projects" element={<ProjectsPage />} />
							<Route path="/reins" element={<ReinsPage />} />
						</Routes>
					</motion.div>
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	);
};
