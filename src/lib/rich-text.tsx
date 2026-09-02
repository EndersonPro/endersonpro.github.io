import type { ReactNode } from "react";

/** Renders `**bold**`, `_italic_`, and `` `code` `` spans from a translated message string. */
export const renderRich = (text: string): Array<ReactNode> =>
	text.split(/(\*\*.+?\*\*|_.+?_|`.+?`)/g).map((part, index) => {
		if (part.startsWith("**") && part.endsWith("**")) {
			return <b key={index}>{part.slice(2, -2)}</b>;
		}
		if (part.startsWith("_") && part.endsWith("_") && part.length > 1) {
			return <i key={index}>{part.slice(1, -1)}</i>;
		}
		if (part.startsWith("`") && part.endsWith("`") && part.length > 1) {
			return <code key={index}>{part.slice(1, -1)}</code>;
		}
		return part;
	});
