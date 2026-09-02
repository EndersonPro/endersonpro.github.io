import { useState } from "react";
import { NavLink } from "react-router";
import { m } from "../../paraglide/messages.js";
import { getLocale, locales, setLocale } from "../../paraglide/runtime.js";

const links = [
	{ to: "/", label: m.nav_home },
	{ to: "/about", label: m.nav_about },
	{ to: "/projects", label: m.nav_projects },
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
				<div className="nav__right">
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
					<nav aria-label={m.nav_primary_aria()}>
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
				</div>
			</div>
		</header>
	);
};
