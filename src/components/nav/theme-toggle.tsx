import { useState } from "react";
import { m } from "../../paraglide/messages.js";

type Theme = "light" | "dark";

const readTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export const ThemeToggle = () => {
	const [, setTheme] = useState<Theme>(readTheme);

	const toggle = () => {
		const next: Theme = readTheme() === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("theme", next);
		} catch {
			// Storage can be unavailable (private mode); the choice then lasts for the session only.
		}
		setTheme(next);
	};

	return (
		<button type="button" className="theme" aria-label={m.nav_theme_aria()} onClick={toggle}>
			<svg className="sun" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
				<circle cx="10" cy="10" r="3.6" />
				<path d="M10 1.8v2.2M10 16v2.2M1.8 10H4M16 10h2.2M4.2 4.2l1.6 1.6M14.2 14.2l1.6 1.6M4.2 15.8l1.6-1.6M14.2 5.8l1.6-1.6" />
			</svg>
			<svg className="moon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
				<path d="M16.5 12.4A7 7 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9Z" />
			</svg>
		</button>
	);
};
