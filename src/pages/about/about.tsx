import { HeroText } from "../../components/profession/profession";
import { Profile } from "../../components/profile/profile";
import { Timeline } from "../../components/timeline/timeline";
import "./about.css";

export const AboutPage = () => {
	return (
		<div className="about">
			<div className="about__title_content">
				<HeroText id="profession" title="Sobre mi" />
				<Profile />
				<hr className="line-blur" />

				<p className="about__content">
					Soy <b>Enderson Vizcaino</b>, un desarrollador Fullstack con más de 7 años de experiencia creando soluciones tecnológicas innovadoras. Mi pasión por la programación me ha llevado a trabajar en diversas áreas, desde el desarrollo backend y frontend hasta el liderazgo de equipos en entornos de desarrollo móvil y en la nube.

					Actualmente, me desempeño como Mobile Lead en Melonn, donde lidero el desarrollo de soluciones móviles escalables. A lo largo de mi carrera, he trabajado en empresas destacadas como Condor Labs y Melonn, además de desempeñarme como freelancer, desarrollando desde eCommerce hasta aplicaciones móviles y sistemas empresariales.

					Mis tecnologías y herramientas favoritas incluyen:

					<ul>
						<li>
							<b>Lenguajes:</b> JavaScript, TypeScript ❤️, Dart, Python, PHP

						</li>
						<li>
							<b>Frameworks y Tecnologías:</b> Node.js, React, Flutter, Laravel


						</li>
						<li>
							<b>Cloud & DevOps:</b> AWS ☁️, Docker, Firebase
						</li>
						<li><b>Bases de Datos:</b> MongoDB, OracleDB, MySQL</li>
					</ul>
				</p>
			</div>
			<div className="experience">
				<h3>Mi recorrido como profesional 👇 </h3>
				<Timeline />
			</div>
		</div>
	);
};
