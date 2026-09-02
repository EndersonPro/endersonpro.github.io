import { Profile } from "../../components/profile/profile";
import { Timeline } from "../../components/timeline/timeline";
import { renderRich } from "../../lib/rich-text";
import { m } from "../../paraglide/messages.js";

export const AboutPage = () => {
	return (
		<div className="about">
			<aside className="about__sidebar">
				<Profile />
				<div className="about__card">
					<div className="about__bio">
						<h4>{m.about_sidebar_heading()}</h4>
						<p>{renderRich(m.about_bio_p1())}</p>
						<p>{renderRich(m.about_bio_p2())}</p>
					</div>
					<hr className="about__divider" />
					<div className="about__education">
						<h4>{m.about_education_heading()}</h4>
						<div className="education-item">
							<span className="education-degree">{m.about_education_degree()}</span>
							<span className="education-school">Universidad Del Magdalena</span>
						</div>
					</div>
					<div className="about__certs">
						<h4>{m.about_certs_heading()}</h4>
						<div className="cert-item">
							<span className="cert-name">AWS Developer Associate</span>
							<span className="cert-issuer">Amazon Web Services</span>
						</div>
					</div>
					<hr className="about__divider" />
					<div className="about__skills">
						<h4>{m.about_stack_heading()}</h4>
						<div className="skills-sidebar">
							<div className="skill-group">
								<span className="skill-label">{m.about_skill_mobile()}</span>
								<span className="skill-items">Flutter, Dart, React Native</span>
							</div>
							<div className="skill-group">
								<span className="skill-label">Frontend</span>
								<span className="skill-items">React, TypeScript, Angular, Vue</span>
							</div>
							<div className="skill-group">
								<span className="skill-label">Backend</span>
								<span className="skill-items">Node.js, Go, C#, PHP</span>
							</div>
							<div className="skill-group">
								<span className="skill-label">Cloud</span>
								<span className="skill-items">AWS, Docker, CI/CD</span>
							</div>
							<div className="skill-group">
								<span className="skill-label">{m.about_skill_data()}</span>
								<span className="skill-items">MongoDB, PostgreSQL, Firebase</span>
							</div>
						</div>
					</div>
				</div>
			</aside>
			<div className="about__main">
				<div className="experience">
					<span className="eyebrow">{m.about_eyebrow()}</span>
					<h2>{m.about_experience_heading()}</h2>
					<Timeline />
				</div>
			</div>
		</div>
	);
};
