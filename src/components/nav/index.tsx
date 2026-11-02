import { useState } from "react";
import { NavLink } from "react-router";
import { m } from "../../paraglide/messages.js";
import { getLocale, locales, setLocale } from "../../paraglide/runtime.js";
import { ThemeToggle } from "./theme-toggle";

const links = [
	{ to: "/", label: m.nav_home },
	{ to: "/projects", label: m.nav_projects },
	{ to: "/about", label: m.nav_about },
	{ to: "/reins", label: m.nav_reins },
];

export const Nav = () => {
	const [open, setOpen] = useState(false);
	const locale = getLocale();

	return (
		<header className="nav">
			<div className="nav__inner">
				<NavLink to="/" className="nav__logo" aria-label={m.nav_home()}>
					EV<span className="logo-accent">.</span>
				</NavLink>
				<nav aria-label={m.nav_primary_aria()} className="nav__primary">
					<ul id="nav-menu" className={`nav__menu ${open ? "is-open" : ""}`}>
						{links.map(({ to, label }) => (
							<li key={to}>
								<NavLink
									to={to}
									end={to === "/"}
									className={({ isActive }) => (isActive ? "active" : "")}
									onClick={() => setOpen(false)}
								>
									{label()}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<div className="nav__tools">
					<div className="nav__lang" role="group" aria-label={m.nav_lang_aria()}>
						{locales.map((code) => (
							<button
								key={code}
								type="button"
								className={`nav__lang-btn ${locale === code ? "is-active" : ""}`}
								aria-pressed={locale === code}
								onClick={() => setLocale(code)}
							>
								{code.toUpperCase()}
							</button>
						))}
					</div>
					<ThemeToggle />
					<button
						type="button"
						className={`nav__toggle ${open ? "is-open" : ""}`}
						aria-expanded={open}
						aria-controls="nav-menu"
						aria-label={m.nav_menu_aria()}
						onClick={() => setOpen((value) => !value)}
					>
						<span className="nav__toggle-bar" />
						<span className="nav__toggle-bar" />
					</button>
				</div>
			</div>
		</header>
	);
};
