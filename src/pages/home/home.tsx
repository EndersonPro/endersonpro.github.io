import { HiChevronRight } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { NavLink } from "react-router";
import { Profile } from "../../components/profile/profile";

export const HomePage = () => {
	return (
		<div className="home">
			<div className="home__content">
				<p className="home__greeting">Hola, soy Enderson Vizcaino</p>
				<h1 className="home__title">Software Engineer</h1>
				<p className="home__subtitle">
					+7 años construyendo productos digitales de alto impacto. Especializado en{" "}
					<b>arquitectura móvil con Flutter</b>, <b>microservicios en AWS</b> y{" "}
					<b>liderazgo técnico</b>. He entregado soluciones empresariales en{" "}
					<a href="https://www.siigo.com/" target="_blank" rel="noopener noreferrer">
						Siigo
					</a>,{" "}
					<a href="https://www.melonn.com/" target="_blank" rel="noopener noreferrer">
						Melonn
					</a>{" "}
					y{" "}
					<a href="https://condorlabs.io/" target="_blank" rel="noopener noreferrer">
						Condor Labs
					</a>.
				</p>
				<div className="home__stats">
					<span>7+ años</span>
					<span className="dot">·</span>
					<span>Flutter</span>
					<span className="dot">·</span>
					<span>AWS</span>
					<span className="dot">·</span>
					<span>Liderazgo técnico</span>
				</div>
				<div className="home__actions">
					<NavLink to="/projects" className="btn btn_primary">
						Ver Proyectos <HiChevronRight />
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
