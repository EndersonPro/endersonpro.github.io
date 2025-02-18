import { HiChevronRight } from "react-icons/hi";
import { NavLink } from "react-router";
import { HeroText } from "../../components/profession/profession";
import { Profile } from "../../components/profile/profile";

export const IsPage = () => {
	return (
		<div className="is_page">
			<div className="is_page__content">
				<h4 className="is_page__content__greeting">
					Hola 👋, soy Enderson Vizcaino
				</h4>
				<HeroText id="profession" title="Fullstack developer" />
				<p className="is_page__content__about">
					{" "}
					Soy un desarrollador de software con experiencia en el desarrollo de
					aplicaciones web y móviles. Me apasiona la tecnología y la
					programación, y me encanta aprender cosas nuevas.{" "}
				</p>
				<NavLink
					to="/projects"
					className="btn btn_primary is_page__content__button"
				>
					Proyectos <HiChevronRight />{" "}
				</NavLink>
			</div>
			<Profile />
		</div>
	);
};
