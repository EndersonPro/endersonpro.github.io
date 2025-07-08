import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import profileImg from "../../assets/img/Perfil.png";
import { HeroWrapper } from "../hero/hero-wrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./profile.css";

export const Profile = () => {
	const [showEmoji, setShowEmoji] = useState(false);

	const handleImageClick = () => {
		setShowEmoji(true);
		setTimeout(() => {
			setShowEmoji(false);
		}, 1500); // El emoji desaparecerá después de 1.5 segundos
	};

	return (
		<HeroWrapper heroId="hero-image">
			<figure className="image">
				<img
					src={profileImg}
					alt="Enderson frente al computador"
					className="profile-img"
					onClick={handleImageClick}
					style={{ cursor: "pointer" }} // Para indicar que es clickeable
				/>
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

			<AnimatePresence>
				{showEmoji && (
					<motion.div
						initial={{ opacity: 0, scale: 0.5, y: 50 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.5, y: -50 }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
						style={{
							position: "fixed",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "4rem",
							zIndex: 1000,
							pointerEvents: "none", // Para que no bloquee otros clics
						}}
						className="emoji-wave"
					>
						👋
					</motion.div>
				)}
			</AnimatePresence>
		</HeroWrapper>
	);
};
