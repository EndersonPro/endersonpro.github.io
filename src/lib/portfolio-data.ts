import clariIcon from "../assets/img/apps/clari.webp";
import infinityIcon from "../assets/img/apps/infinity.png";
import pearMusicIcon from "../assets/img/apps/pear-music.png";
import reinsIcon from "../assets/img/apps/reins.webp";
import clariAddEn from "../assets/img/clari/en/add-expense.webp";
import clariBalancesEn from "../assets/img/clari/en/balances.webp";
import clariGroupsEn from "../assets/img/clari/en/groups.webp";
import clariSplitEn from "../assets/img/clari/en/split.webp";
import clariAddEs from "../assets/img/clari/es/add-expense.webp";
import clariBalancesEs from "../assets/img/clari/es/balances.webp";
import clariGroupsEs from "../assets/img/clari/es/groups.webp";
import clariSplitEs from "../assets/img/clari/es/split.webp";
import infinityAudio from "../assets/img/infinity/audio-options.webp";
import infinityTrim from "../assets/img/infinity/trim.webp";
import pearLibraryEn from "../assets/img/pear-music/en/library.webp";
import pearLyricsEn from "../assets/img/pear-music/en/lyrics.webp";
import pearLibraryEs from "../assets/img/pear-music/es/library.webp";
import pearLyricsEs from "../assets/img/pear-music/es/lyrics.webp";
import reinsChatEn from "../assets/img/reins/en/agent-chat.webp";
import reinsHostsEn from "../assets/img/reins/en/hosts.webp";
import reinsInboxEn from "../assets/img/reins/en/inbox.webp";
import reinsUsageEn from "../assets/img/reins/en/usage.webp";
import reinsChatEs from "../assets/img/reins/es/agent-chat.webp";
import reinsHostsEs from "../assets/img/reins/es/hosts.webp";
import reinsInboxEs from "../assets/img/reins/es/inbox.webp";
import reinsUsageEs from "../assets/img/reins/es/usage.webp";
import { m } from "../paraglide/messages.js";
import type { Locale } from "../paraglide/runtime.js";
import { REINS_APP_STORE_URL } from "./reins-links";

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
	shots?: {
		width: number;
		height: number;
		images: Array<{ src: string | Record<Locale, string>; alt: () => string }>;
	};
};

export const products: Array<Product> = [
	{
		name: "Clari",
		icon: clariIcon,
		desc: m.product_clari_desc,
		status: m.product_clari_status,
		nodeStatus: () => "App Store",
		live: true,
		stack: ["Flutter", "Firebase"],
		href: "https://apps.apple.com/app/id6826743525",
		linkLabel: m.product_app_store_link,
		shots: {
			width: 640,
			height: 1385,
			images: [
				{ src: { en: clariAddEn, es: clariAddEs }, alt: m.product_clari_shot_add_alt },
				{ src: { en: clariSplitEn, es: clariSplitEs }, alt: m.product_clari_shot_split_alt },
				{ src: { en: clariGroupsEn, es: clariGroupsEs }, alt: m.product_clari_shot_groups_alt },
				{ src: { en: clariBalancesEn, es: clariBalancesEs }, alt: m.product_clari_shot_balances_alt },
			],
		},
	},
	{
		name: "Reins",
		icon: reinsIcon,
		desc: m.product_reins_desc,
		status: m.product_reins_status,
		nodeStatus: () => "App Store",
		live: true,
		stack: ["Flutter", "Go"],
		href: REINS_APP_STORE_URL,
		linkLabel: m.product_app_store_link,
		shots: {
			width: 640,
			height: 1385,
			images: [
				{ src: { en: reinsHostsEn, es: reinsHostsEs }, alt: m.product_shot_hosts_alt },
				{ src: { en: reinsChatEn, es: reinsChatEs }, alt: m.product_shot_chat_alt },
				{ src: { en: reinsUsageEn, es: reinsUsageEs }, alt: m.product_shot_usage_alt },
				{ src: { en: reinsInboxEn, es: reinsInboxEs }, alt: m.product_shot_inbox_alt },
			],
		},
	},
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
		shots: {
			width: 360,
			height: 779,
			images: [
				{ src: infinityTrim, alt: m.product_infinity_shot_trim_alt },
				{ src: infinityAudio, alt: m.product_infinity_shot_audio_alt },
			],
		},
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
		shots: {
			width: 360,
			height: 640,
			images: [
				{ src: { en: pearLibraryEn, es: pearLibraryEs }, alt: m.product_pear_shot_library_alt },
				{ src: { en: pearLyricsEn, es: pearLyricsEs }, alt: m.product_pear_shot_lyrics_alt },
			],
		},
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
