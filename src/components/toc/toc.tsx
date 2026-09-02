import { useEffect, useState } from "react";
import { m } from "../../paraglide/messages.js";

export type TocEntry = { id: string; title: string };

type TocProps = {
	entries: Array<TocEntry>;
};

export const Toc = ({ entries }: TocProps) => {
	const [activeId, setActiveId] = useState(entries[0]?.id ?? "");

	useEffect(() => {
		const headings = entries
			.map(({ id }) => document.getElementById(id))
			.filter((element): element is HTMLElement => element !== null);

		const observer = new IntersectionObserver(
			(observed) => {
				const visible = observed
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

				if (visible[0]) {
					setActiveId(visible[0].target.id);
				}
			},
			{ rootMargin: "-10% 0px -70% 0px", threshold: 0 },
		);

		for (const heading of headings) {
			observer.observe(heading);
		}

		return () => observer.disconnect();
	}, [entries]);

	return (
		<nav className="toc" aria-label={m.toc_aria()}>
			<span className="toc__heading">{m.toc_heading()}</span>
			<ol className="toc__list">
				{entries.map(({ id, title }) => (
					<li key={id}>
						<a className={`toc__link ${activeId === id ? "is-active" : ""}`} href={`#${id}`}>
							{title}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};
