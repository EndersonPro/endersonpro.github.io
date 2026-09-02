import { useState } from "react";
import { HiCheck, HiClipboardCopy } from "react-icons/hi";

type CodeBlockProps = {
	/** Raw command text. Multiple lines are supported. */
	code: string;
	/** Optional caption, e.g. "macOS" or "~/.zshrc". Renders a header bar when set. */
	label?: string;
	/** Render as an output/config block, without the `$` prompt markers. */
	plain?: boolean;
};

type Segment = { text: string; kind: "code" | "comment" };

const splitComment = (line: string): Array<Segment> => {
	const index = line.indexOf("#");

	if (index < 0) {
		return [{ text: line, kind: "code" }];
	}

	if (index === 0) {
		return [{ text: line, kind: "comment" }];
	}

	return [
		{ text: line.slice(0, index), kind: "code" },
		{ text: line.slice(index), kind: "comment" },
	];
};

export const CodeBlock = ({ code, label, plain = false }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);
	const lines = code.trim().split("\n");

	/** A line only gets a `$` when it starts a command: not blank, not a comment,
	 *  and not the continuation of a previous line ending in a backslash. */
	const startsCommand = (index: number) => {
		const line = lines[index].trim();

		if (plain || line.length === 0 || line.startsWith("#")) {
			return false;
		}

		const previous = lines[index - 1];

		return previous === undefined || !previous.trimEnd().endsWith("\\");
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code.trim());
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<div className="code-block">
			{label && <span className="code-block__label">{label}</span>}
			<button
				type="button"
				className="code-block__copy"
				onClick={handleCopy}
				aria-label={copied ? "Comando copiado" : "Copiar comando"}
			>
				{copied ? <HiCheck /> : <HiClipboardCopy />}
			</button>
			<pre className="code-block__pre">
				<code>
					{lines.map((line, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: lines are static and order-stable
						<span className="code-block__line" key={index}>
							{!plain && line.trim().length > 0 && (
								<span
									className="code-block__prompt"
									aria-hidden={!startsCommand(index)}
									data-ghost={!startsCommand(index)}
								>
									$
								</span>
							)}
							{splitComment(line).map((segment, segmentIndex) => (
								<span
									// biome-ignore lint/suspicious/noArrayIndexKey: segments are derived deterministically
									key={segmentIndex}
									className={segment.kind === "comment" ? "code-block__comment" : undefined}
								>
									{segment.text}
								</span>
							))}
						</span>
					))}
				</code>
			</pre>
		</div>
	);
};
