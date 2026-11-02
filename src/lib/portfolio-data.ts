import cuentaFacilIcon from "../assets/img/apps/cuenta-facil.png";
import infinityIcon from "../assets/img/apps/infinity.png";
import pearMusicIcon from "../assets/img/apps/pear-music.png";
import reinsIcon from "../assets/img/apps/reins.png";
import agentChatImg from "../assets/img/reins/agent-chat.webp";
import hostsImg from "../assets/img/reins/hosts.webp";
import inboxImg from "../assets/img/reins/inbox.webp";
import usageImg from "../assets/img/reins/usage.webp";
import { m } from "../paraglide/messages.js";

export const GITHUB_URL = "https://github.com/EndersonPro";
export const LINKEDIN_URL = "https://www.linkedin.com/in/endersonvizcaino/";

export type Product = {
	name: string;
	icon: string;
	desc: () => string;
	status: () => string;
	/** Short label used inside the flow diagram. */
	nodeStatus: () => string;
	live: boolean;
	stack: Array<string>;
	/** External store URL. */
	href?: string;
	/** Internal route; used instead of `href` when set. */
	to?: string;
	linkLabel?: () => string;
	shots?: Array<{ src: string; alt: () => string }>;
};

export const products: Array<Product> = [
	{
		name: "Infinity",
		icon: infinityIcon,
		desc: m.product_infinity_desc,
		status: m.product_infinity_status,
		nodeStatus: () => "App Store",
		live: true,
		stack: ["Flutter", "Rust", "Firebase"],
		href: "https://apps.apple.com/app/id6802155816",
		linkLabel: m.product_infinity_link,
	},
	{
		name: "Pear Music",
		icon: pearMusicIcon,
		desc: m.product_pear_desc,
		status: m.product_pear_status,
		nodeStatus: () => "Google Play",
		live: true,
		stack: ["Flutter", "Rust", "Shorebird"],
		href: "https://play.google.com/store/apps/details?id=dev.endersonvizc.pearmusic",
		linkLabel: m.product_pear_link,
	},
	{
		name: "Reins",
		icon: reinsIcon,
		desc: m.product_reins_desc,
		status: m.product_reins_status,
		nodeStatus: m.home_flow_beta,
		live: false,
		stack: ["Flutter", "Go"],
		to: "/reins",
		linkLabel: m.product_reins_link,
		shots: [
			{ src: hostsImg, alt: m.product_shot_hosts_alt },
			{ src: agentChatImg, alt: m.product_shot_chat_alt },
			{ src: usageImg, alt: m.product_shot_usage_alt },
			{ src: inboxImg, alt: m.product_shot_inbox_alt },
		],
	},
	{
		name: "Cuenta Fácil",
		icon: cuentaFacilIcon,
		desc: m.product_cuenta_desc,
		status: m.product_cuenta_status,
		nodeStatus: () => "TestFlight",
		live: false,
		stack: ["Flutter", "Firebase"],
	},
];

export type Tool = {
	name: string;
	desc: () => string;
	stack: string;
	href: string;
};

export const tools: Array<Tool> = [
	{
		name: "perfscope",
		desc: m.tool_perfscope_desc,
		stack: "Dart · pub.dev",
		href: "https://github.com/EndersonPro/perfscope",
	},
	{
		name: "flutree",
		desc: m.tool_flutree_desc,
		stack: "Go · MCP",
		href: "https://github.com/EndersonPro/flutree",
	},
	{
		name: "codex-imagegen-cli",
		desc: m.tool_imagegen_desc,
		stack: "Python",
		href: GITHUB_URL,
	},
];
