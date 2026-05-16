import { NavLink } from "react-router";

export const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<NavLink to="/">
					<h1>
						EV<span className="logo-accent">.</span>
					</h1>
				</NavLink>
			</div>
			<ul className="nav__menu">
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="/"
					>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="/about"
					>
						Sobre mí
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="/projects"
					>
						Proyectos
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
