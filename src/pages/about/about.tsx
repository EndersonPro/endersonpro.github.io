import { Profile } from "../../components/profile/profile";
import { Timeline } from "../../components/timeline/timeline";

export const AboutPage = () => {
	return (
		<div className="about">
			<div className="about__sidebar">
				<Profile />
				<hr className="about__divider" />
				<div className="about__bio">
					<h4>Sobre mí</h4>
					<p>
						Ingeniero de Sistemas con más de 7 años construyendo productos
						digitales. Empecé como <b>Fullstack Developer</b> y fui evolucionando
						hacia <b>Cloud Engineer</b>, <b>Software Engineer</b> y{" "}
						<b>Mobile Dev Lead</b> en empresas como <b>Condor Labs</b>,{" "}
						<b>Melonn</b> y <b>Siigo</b>.
					</p>
					<p>
						En <b>Melonn</b> lideré el equipo móvil y diseñé la arquitectura
						cloud con <b>AWS</b>. Ahora en <b>Siigo</b> construyo funcionalidades
						críticas para la aplicación web POS con <b>Flutter</b>.
					</p>
				</div>
				<hr className="about__divider" />
				<div className="about__education">
					<h4>Educación</h4>
					<div className="education-item">
						<span className="education-degree">Ingeniero de Sistemas</span>
						<span className="education-school">Universidad Del Magdalena</span>
					</div>
				</div>
				<div className="about__certs">
					<h4>Certificaciones</h4>
					<div className="cert-item">
						<span className="cert-name">AWS Developer Associate</span>
						<span className="cert-issuer">Amazon Web Services</span>
					</div>
				</div>
				<hr className="about__divider" />
				<div className="about__skills">
					<h4>Stack tecnológico</h4>
					<div className="skills-sidebar">
						<div className="skill-group">
							<span className="skill-label">Móvil</span>
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
							<span className="skill-label">Datos</span>
							<span className="skill-items">MongoDB, PostgreSQL, Firebase</span>
						</div>
					</div>
				</div>
			</div>
			<div className="about__main">
				<div className="experience">
					<h3>Experiencia profesional</h3>
					<Timeline />
				</div>
			</div>
		</div>
	);
};
