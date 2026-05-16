import { LuGithub, LuLinkedin } from "react-icons/lu";
import profileImg from "../../assets/img/Perfil.png";

export const Profile = () => {
	return (
		<div className="profile">
			<img
				src={profileImg}
				alt="Enderson Vizcaino"
				className="profile__img"
			/>
			<div className="profile__links">
				<a
					href="https://github.com/EndersonPro"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<LuGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/endersonvizcaino/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<LuLinkedin />
				</a>
			</div>
		</div>
	);
};
