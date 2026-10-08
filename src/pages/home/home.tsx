import { HiChevronRight, HiExternalLink } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { NavLink } from "react-router";
import agentChatImg from "../../assets/img/reins/agent-chat.webp";
import hostsImg from "../../assets/img/reins/hosts.webp";
import inboxImg from "../../assets/img/reins/inbox.webp";
import usageImg from "../../assets/img/reins/usage.webp";
import { Profile } from "../../components/profile/profile";
import { ANDROID_BETA_GROUP_URL, TESTFLIGHT_URL } from "../../lib/reins-links";
import { renderRich } from "../../lib/rich-text";
import { m } from "../../paraglide/messages.js";

/** Intrinsic size of the exported screenshots (640px wide, iPhone aspect ratio). */
const SHOT_WIDTH = 640;
const SHOT_HEIGHT = 1385;

const screenshots = [
	{ src: hostsImg, caption: m.home_shot_hosts_caption, alt: m.home_shot_hosts_alt },
	{ src: agentChatImg, caption: m.home_shot_chat_caption, alt: m.home_shot_chat_alt },
	{ src: usageImg, caption: m.home_shot_usage_caption, alt: m.home_shot_usage_alt },
	{ src: inboxImg, caption: m.home_shot_inbox_caption, alt: m.home_shot_inbox_alt },
];

const claudePoints = [
	{ title: m.home_claude_workflow_title, desc: m.home_claude_workflow_desc },
	{ title: m.home_claude_dev_title, desc: m.home_claude_dev_desc },
	{ title: m.home_claude_usage_title, desc: m.home_claude_usage_desc },
];

const features = [
	{ title: m.home_feature_chat_title, desc: m.home_feature_chat_desc },
	{ title: m.home_feature_terminal_title, desc: m.home_feature_terminal_desc },
	{ title: m.home_feature_inbox_title, desc: m.home_feature_inbox_desc },
	{ title: m.home_feature_hosts_title, desc: m.home_feature_hosts_desc },
	{ title: m.home_feature_network_title, desc: m.home_feature_network_desc },
];

export const HomePage = () => {
	return (
		<div className="home">
			<section className="home__hero">
				<div className="home__content">
					<p className="eyebrow home__eyebrow">{m.home_beta_eyebrow()}</p>
					<h1 className="home__title">
						<span>Reins</span>
						<span className="home__tagline">{m.home_hero_tagline()}</span>
					</h1>
					<p className="home__subtitle">{m.home_hero_subtitle()}</p>
					<ul className="home__badges">
						<li className="home__badge home__badge--claude">{m.home_badge_claude()}</li>
						<li className="home__badge">{m.home_badge_agents()}</li>
						<li className="home__badge">{m.home_badge_platforms()}</li>
					</ul>
					<div className="home__actions">
						<a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="btn btn_primary">
							{m.home_cta_ios()} <HiExternalLink />
						</a>
						<a
							href={ANDROID_BETA_GROUP_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn_secondary"
						>
							{m.home_cta_android()} <HiExternalLink />
						</a>
					</div>
					<p className="home__note">{m.home_cta_android_note()}</p>
					<NavLink to="/reins" className="home__guide-link">
						{m.home_cta_guide()} <HiChevronRight />
					</NavLink>
				</div>
				<figure className="home__hero-shot">
					<img
						src={agentChatImg}
						alt={m.home_hero_img_alt()}
						width={SHOT_WIDTH}
						height={SHOT_HEIGHT}
						fetchPriority="high"
					/>
				</figure>
			</section>

			<ul className="home__status" aria-label={m.home_status_aria()}>
				<li className="home__status-item">
					<span className="eyebrow">{m.home_status_ios_label()}</span>
					<span className="home__status-value">{m.home_status_ios_value()}</span>
				</li>
				<li className="home__status-item">
					<span className="eyebrow">{m.home_status_android_label()}</span>
					<span className="home__status-value">{m.home_status_android_value()}</span>
				</li>
			</ul>

			<section className="home__section">
				<header className="home__section-header">
					<span className="eyebrow">{m.home_gallery_eyebrow()}</span>
					<h2 className="home__section-title">{m.home_gallery_title()}</h2>
				</header>
				<div className="home__gallery">
					{screenshots.map(({ src, caption, alt }) => (
						<figure className="home__shot" key={src}>
							<img src={src} alt={alt()} width={SHOT_WIDTH} height={SHOT_HEIGHT} loading="lazy" />
							<figcaption className="home__shot-caption">{caption()}</figcaption>
						</figure>
					))}
				</div>
			</section>

			<section className="home__section home__claude">
				<header className="home__section-header">
					<span className="eyebrow home__claude-eyebrow">{m.home_claude_eyebrow()}</span>
					<h2 className="home__section-title">{m.home_claude_title()}</h2>
				</header>
				<ul className="home__cards">
					{claudePoints.map(({ title, desc }) => (
						<li className="home__card" key={title()}>
							<h3 className="home__card-title">{title()}</h3>
							<p className="home__card-desc">{renderRich(desc())}</p>
						</li>
					))}
				</ul>
				<p className="home__note">{m.home_claude_note()}</p>
			</section>

			<section className="home__section">
				<header className="home__section-header">
					<span className="eyebrow">{m.home_features_eyebrow()}</span>
					<h2 className="home__section-title">{m.home_features_title()}</h2>
				</header>
				<ul className="home__features">
					{features.map(({ title, desc }) => (
						<li className="home__feature" key={title()}>
							<h3 className="home__card-title">{title()}</h3>
							<p className="home__card-desc">{desc()}</p>
						</li>
					))}
				</ul>
			</section>

			<section className="home__section home__founder">
				<div className="home__content">
					<span className="eyebrow">{m.home_founder_eyebrow()}</span>
					<h2 className="home__section-title">{m.home_eyebrow()}</h2>
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
						<NavLink to="/projects" className="btn btn_secondary">
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
			</section>
		</div>
	);
};
