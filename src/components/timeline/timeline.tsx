import { renderRich } from "../../lib/rich-text";
import { m } from "../../paraglide/messages.js";
import { getLocale } from "../../paraglide/runtime.js";

type Experience = {
	job: string;
	company: string;
	date_start: string;
	date_end: string;
	description: () => string;
};

const experiences: Array<Experience> = [
	{
		job: "Flutter Developer Sr",
		company: "Siigo SAS",
		date_start: "2025/06/16",
		date_end: "now",
		description: m.timeline_siigo_desc,
	},
	{
		job: "Mobile Dev Lead",
		company: "Melonn SAS",
		date_start: "2024/01/02",
		date_end: "2025/03/19",
		description: m.timeline_melonn_lead_desc,
	},
	{
		job: "Cloud Engineer",
		company: "Melonn SAS",
		date_start: "2021/09/02",
		date_end: "2024/01/02",
		description: m.timeline_melonn_cloud_desc,
	},
	{
		job: "Software Engineer",
		company: "Condor Labs",
		date_start: "2020/12/02",
		date_end: "2021/09/02",
		description: m.timeline_condor_desc,
	},
	{
		job: "Backend Developer Jr",
		company: "SuperPesos",
		date_start: "2019/11/02",
		date_end: "2020/11/02",
		description: m.timeline_superpesos_desc,
	},
	{
		job: "Fullstack Developer",
		company: "Freelance",
		date_start: "2017/01/20",
		date_end: "2020/08/17",
		description: m.timeline_freelance_desc,
	},
	{
		job: "Fullstack Developer",
		company: "JQAgencia",
		date_start: "2019/01/16",
		date_end: "2019/12/02",
		description: m.timeline_jqagencia_desc,
	},
];

const parseDate = (dateString: string) => {
	if (dateString === "now") return m.timeline_present();
	const date = new Date(dateString);
	const locale = getLocale() === "en" ? "en-US" : "es-ES";
	const month = date.toLocaleString(locale, { month: "long" });
	const year = date.getFullYear();
	return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};

export const Timeline = () => {
	return (
		<div className="timeline">
			{experiences.map(({ company, job, description, date_start, date_end }, index) => (
				<div className="timeline__item" key={`${company}-${index}`}>
					<div className="timeline__date">
						{parseDate(date_start)} — {parseDate(date_end)}
					</div>
					<div className="timeline__content">
						<h3>{job}</h3>
						<h4>{company}</h4>
						<p>{renderRich(description())}</p>
					</div>
				</div>
			))}
		</div>
	);
};
