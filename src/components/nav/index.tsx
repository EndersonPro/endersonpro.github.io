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
					<h1>EV</h1>
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
						.is()
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
						.about()
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
						.projects()
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
