// HeroWrapper.tsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useHeroContext } from "./context/hero-context";

type HeroWrapperProps = {
	children: React.ReactNode;
	heroId: string;
};

export const HeroWrapper = ({ children, heroId }: HeroWrapperProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { setHeroState } = useHeroContext();

	useEffect(() => {
		const updatePosition = () => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				setHeroState({ heroId, position: rect });
			}
		};

		updatePosition();
		window.addEventListener("resize", updatePosition);
		return () => window.removeEventListener("resize", updatePosition);
	}, [heroId, setHeroState]);

	return (
		<motion.div
			ref={ref}
			layoutId={heroId}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			{children}
		</motion.div>
	);
};
