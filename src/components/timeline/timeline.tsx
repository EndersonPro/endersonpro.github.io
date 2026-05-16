import type { ReactNode } from "react";

type Experience = {
	job: string;
	company: string;
	date_start: string;
	date_end: string;
	description: ReactNode;
};

const experiences: Array<Experience> = [
	{
		job: "Flutter Developer Sr",
		company: "Siigo SAS",
		date_start: "2025/06/16",
		date_end: "now",
		description: (
			<>
				Diseño y desarrollo de funcionalidades críticas para la aplicación web
				POS con <b>Flutter</b>. Implementación de buenas prácticas de
				arquitectura limpia, testing y seguridad.
			</>
		),
	},
	{
		job: "Mobile Dev Lead",
		company: "Melonn SAS",
		date_start: "2024/01/02",
		date_end: "2025/03/19",
		description: (
			<>
				Liderazgo del equipo móvil responsable de todas las aplicaciones
				Flutter de la empresa. Definición de estándares de código, mentoring
				del equipo y gestión de releases. Reducción del tiempo de entrega en un{" "}
				<b>40%</b> mediante procesos de CI/CD optimizados.
			</>
		),
	},
	{
		job: "Cloud Engineer",
		company: "Melonn SAS",
		date_start: "2021/09/02",
		date_end: "2024/01/02",
		description: (
			<>
				Diseño e implementación de microservicios y APIs en <b>AWS</b> (
				<b>Lambda</b>, <b>API Gateway</b>, <b>DynamoDB</b>, <b>SQS</b>).
				Desarrollo de aplicaciones móviles con <b>Flutter</b> y backend con{" "}
				<b>Node.js</b> / <b>TypeScript</b>. Automatización de procesos y
				integraciones entre sistemas.
			</>
		),
	},
	{
		job: "Software Engineer",
		company: "Condor Labs",
		date_start: "2020/12/02",
		date_end: "2021/09/02",
		description: (
			<>
				Investigación, diseño e implementación de nuevas funcionalidades sobre
				código legacy en <b>C#</b>. Stack: <b>React.js</b>, <b>Node.js</b>,{" "}
				<b>MongoDB</b>, servicios <b>AWS</b> (<b>S3</b>, <b>Lambda</b>,{" "}
				<b>CloudWatch</b>). Optimización de procesos existentes y consultas en{" "}
				<b>Oracle DB</b>.
			</>
		),
	},
	{
		job: "Backend Developer Jr",
		company: "SuperPesos",
		date_start: "2019/11/02",
		date_end: "2020/11/02",
		description: (
			<>
				Desarrollo y mantenimiento de microservicios en <b>Node.js</b> sobre{" "}
				<b>AWS</b> (<b>Lambda</b>, <b>API Gateway</b>, <b>S3</b>,{" "}
				<b>CloudWatch</b>). Depuración de bugs en producción y creación de
				nuevos endpoints.
			</>
		),
	},
	{
		job: "Fullstack Developer",
		company: "Freelance",
		date_start: "2017/01/20",
		date_end: "2020/08/17",
		description: (
			<>
				Desarrollo de aplicaciones móviles y web para clientes diversos.
				Stack variado: <b>Flutter</b>, <b>React</b>, <b>Angular</b>,{" "}
				<b>Vue</b>, <b>Node.js</b>, <b>PHP</b>, <b>Go</b>, <b>Laravel</b>.
				Proyectos que van desde eCommerce hasta sistemas empresariales.
			</>
		),
	},
	{
		job: "Fullstack Developer",
		company: "JQAgencia",
		date_start: "2019/01/16",
		date_end: "2019/12/02",
		description: (
			<>
				Desarrollo completo de un módulo de gestión de recursos industriales.
				Frontend con <b>Angular</b> + <b>Ionic</b>, backend con{" "}
				<b>PHP</b> / <b>Laravel</b> y base de datos <b>MySQL</b>.
			</>
		),
	},
];

const parseDate = (dateString: string) => {
	if (dateString === "now") return "Actualidad";
	const date = new Date(dateString);
	const month = date.toLocaleString("es-ES", { month: "long" });
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
						<p>{description}</p>
					</div>
				</div>
			))}
		</div>
	);
};
