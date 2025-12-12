import { NavLink } from "react-router";

export const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<NavLink
					to={{
						pathname: "/",
					}}
				>
					<h1>EV<span className="logo-accent">.</span></h1>
				</NavLink>
			</div>
			<ul className="nav__menu">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav_nav__menu__active" : ""
						}
						to={{
							pathname: "/",
						}}
					>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav_nav__menu__active" : ""
						}
						to={{
							pathname: "/about",
						}}
					>
						Sobre mí
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav_nav__menu__active" : ""
						}
						to={{
							pathname: "/projects",
						}}
					>
						Proyectos
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
