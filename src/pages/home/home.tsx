import { HiChevronRight } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { NavLink } from "react-router";
import { Profile } from "../../components/profile/profile";
import { renderRich } from "../../lib/rich-text";
import { m } from "../../paraglide/messages.js";

export const HomePage = () => {
	return (
		<div className="home">
			<div className="home__content">
				<p className="eyebrow home__eyebrow">{m.home_eyebrow()}</p>
				<h1 className="home__title">
					<span>{m.home_title_line1()}</span>
					<span>{m.home_title_line2()}</span>
				</h1>
				<p className="home__subtitle">
					{renderRich(m.home_subtitle_intro())}{" "}
					<a href="https://www.siigo.com/" target="_blank" rel="noopener noreferrer">
						Siigo
					</a>
					,{" "}
					<a href="https://www.melonn.com/" target="_blank" rel="noopener noreferrer">
						Melonn
					</a>{" "}
					{m.home_subtitle_and()}{" "}
					<a href="https://condorlabs.io/" target="_blank" rel="noopener noreferrer">
						Condor Labs
					</a>
					.
				</p>
				<div className="home__meta">
					<span>{m.home_meta_years()}</span>
					<span className="dot">·</span>
					<span>{m.home_meta_flutter()}</span>
					<span className="dot">·</span>
					<span>{m.home_meta_aws()}</span>
					<span className="dot">·</span>
					<span>{m.home_meta_leadership()}</span>
				</div>
				<div className="home__actions">
					<NavLink to="/projects" className="btn btn_primary">
						{m.home_cta_projects()} <HiChevronRight />
					</NavLink>
					<a
						href="https://www.linkedin.com/in/endersonvizcaino/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn_secondary"
					>
						<LuLinkedin /> LinkedIn
					</a>
				</div>
			</div>
			<div className="home__profile">
				<Profile />
			</div>
		</div>
	);
};
