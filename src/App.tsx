import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import { HeroProvider } from "./components/hero/context/hero-context";
import { Nav } from "./components/nav";
import { AboutPage } from "./pages/about/about";
import { IsPage } from "./pages/is/is";
import { ProjectsPage } from "./pages/projects/projects";

export const App = () => {
	const location = useLocation();
	return (
		<div className="main">
			<Nav />
			<HeroProvider>
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route index element={<IsPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
					</Routes>
				</AnimatePresence>
			</HeroProvider>
		</div>
	);
};
