import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import profileImg from "../../assets/img/Perfil.png";
import { HeroWrapper } from "../hero/hero-wrapper";
import "./profile.css";

export const Profile = () => {
	return (
		<HeroWrapper heroId="hero-image">
			<figure className="image">
				<img src={profileImg} alt="Enderson frente al computador" className="profile-img" />
				<div className="image_social_icons">
					<a href="https://github.com/EndersonPro" target="_blank" rel="noopener noreferrer">
						<LuGithub />
					</a>
					<a href="https://www.instagram.com/endersonvizc.dev/" target="_blank" rel="noopener noreferrer">
						<LuInstagram />
					</a>
					<a href="https://www.linkedin.com/in/endersonvizcaino/" target="_blank" rel="noopener noreferrer">
						<LuLinkedin />
					</a>
				</div>
			</figure>
		</HeroWrapper>
	);
};
