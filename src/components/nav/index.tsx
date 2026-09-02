import { useState } from "react";
import { NavLink } from "react-router";

const links = [
	{ to: "/", label: "Inicio" },
	{ to: "/about", label: "Sobre mí" },
	{ to: "/projects", label: "Proyectos" },
	{ to: "/reins", label: "Reins" },
];

export const Nav = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="nav">
			<div className="nav__inner">
				<NavLink to="/" className="nav__logo" aria-label="Inicio">
					EV<span className="logo-accent">.</span>
				</NavLink>
				<button
					type="button"
					className={`nav__toggle ${open ? "is-open" : ""}`}
					aria-expanded={open}
					aria-controls="nav-menu"
					aria-label="Menú"
					onClick={() => setOpen((value) => !value)}
				>
					<span className="nav__toggle-bar" />
					<span className="nav__toggle-bar" />
				</button>
				<nav aria-label="Principal">
					<ul id="nav-menu" className={`nav__menu ${open ? "is-open" : ""}`}>
						{links.map(({ to, label }) => (
							<li key={to}>
								<NavLink
									to={to}
									end={to === "/"}
									className={({ isActive }) => (isActive ? "active" : "")}
									onClick={() => setOpen(false)}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
