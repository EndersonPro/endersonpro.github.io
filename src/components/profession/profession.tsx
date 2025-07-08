import { HeroWrapper } from "../hero/hero-wrapper";
import "./profession.css";

interface HeroTextProps {
	title: string;
	id?: string;
}
export const HeroText = ({ title, id }: HeroTextProps) => {
	const heroId = id ?? Math.random().toString();
	return (
		<HeroWrapper heroId={heroId}>
			<h1 className="profession__title"> {title} </h1>
		</HeroWrapper>
	);
};
