import { GITHUB_URL, LINKEDIN_URL } from "../../lib/portfolio-data";
import { m } from "../../paraglide/messages.js";

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<nav className="site-footer__links">
					<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
						LinkedIn
					</a>
				</nav>
				<p className="site-footer__copy">{m.footer_copy({ year: new Date().getFullYear() })}</p>
			</div>
		</footer>
	);
};
