// HeroContext.tsx
import { createContext, useContext, useState } from "react";

type HeroState = {
	heroId: string | null;
	position: DOMRect | null;
};

const HeroContext = createContext<{
	heroState: HeroState;
	setHeroState: (state: HeroState) => void;
}>({
	heroState: { heroId: null, position: null },
	setHeroState: () => {},
});

export const HeroProvider = ({ children }: { children: React.ReactNode }) => {
	const [heroState, setHeroState] = useState<HeroState>({
		heroId: null,
		position: null,
	});

	return (
		<HeroContext.Provider value={{ heroState, setHeroState }}>
			{children}
		</HeroContext.Provider>
	);
};

export const useHeroContext = () => useContext(HeroContext);
