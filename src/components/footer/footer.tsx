import { m } from "../../paraglide/messages.js";

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<span className="site-footer__mark">
					EV<span className="logo-accent">.</span>
				</span>
				<p className="site-footer__copy">{m.footer_copy({ year: new Date().getFullYear() })}</p>
				<div className="site-footer__links">
					<a
						href="https://github.com/EndersonPro"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/endersonvizcaino/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
};
