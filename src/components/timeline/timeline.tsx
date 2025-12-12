import { useEffect, useRef, type ReactNode } from "react";
import "./timeline.css";

export type Experience = {
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
        description: <>Analizar, diseñar y desarrollar nuevas funcionalidades para la aplicación web de Siigo utilizando <b>Flutter</b>. Implementación de buenas prácticas de desarrollo y seguridad.</>,
    },
    {
        job: "Mobile Dev Lead",
        company: "Melonn SAS",
        date_start: "2024/01/02",
        date_end: "2025/03/19",
        description: <>Encargado del correcto funcionamiento de todos los servicios necesarios para las aplicaciones móviles de la empresa con <b>Flutter</b>. Gestión y desarrollo de nuevos servicios. Implementación de buenas prácticas de desarrollo y seguridad.</>,
    },
    {
        job: "Cloud Engineer",
        company: "Melonn SAS",
        date_start: "2021/09/02",
        date_end: "2024/01/02",
        description: <>Desarrollo de microservicios, APIs, integraciones de sistemas, automatización de procesos y pruebas unitarias. Desarrollo de aplicaciones móviles con <b>Flutter</b>. Uso de <b>AWS</b>, <b>Node.js</b> y <b>TypeScript</b>.</>,
    },
    {
        job: "Software Engineer",
        company: "Condor Labs",
        date_start: "2020/12/02",
        date_end: "2021/09/02",
        description: <>Ingeniero de software, encargado de la investigación, diseño e implementación de nuevas funcionalidades sobre código legacy (<b>C#</b>) con <b>React.js</b>, <b>Node.js</b>, <b>MongoDB</b>, <b>CloudWatch</b>, <b>S3</b>, <b>Lambda</b>, <b>API Gateway</b>. Optimización de procesos existentes. Creación/modificación de procesos en <b>Oracle DB</b>.</>,
    },
    {
        job: "Desarrollador Backend Junior",
        company: "SuperPesos",
        date_start: "2019/11/02",
        date_end: "2020/11/02",
        description: <>Desarrollador Backend Junior <b>Node.js</b>, a cargo del mantenimiento, depuración y creación de microservicios en <b>AWS</b>. Uso de <b>AWS Lambda</b>, <b>API Gateway</b>, <b>CloudWatch</b> y <b>S3 Bucket</b>.</>,
    },
    {
        job: "Desarrollador Fullstack",
        company: "Freelance",
        date_start: "2017/01/20",
        date_end: "2020/08/17",
        description: <>Desarrollo de aplicaciones móviles y web usando <b>JavaScript</b>, <b>React</b>, <b>Angular</b>, <b>Vue</b>, <b>ElectronJS</b>, <b>Ionic</b>, <b>TypeScript</b>, <b>Node.js</b>, <b>MongoDB</b>, <b>PHP</b>, <b>Go</b>, <b>Laravel</b> y <b>Flutter</b>.</>,
    },
    {
        job: "Desarrollador Fullstack",
        company: "JQAgencia",
        date_start: "2019/01/16",
        date_end: "2019/12/02",
        description: <>Desarrollo completo de un módulo para gestión de recursos industriales usando <b>PHP</b>, <b>MySQL</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>Angular</b>, <b>Laravel</b> e <b>Ionic</b>.</>,
    },
];

// 2018/06/02 to
const parseDate = (dateString: string) => {
    if (dateString === "now") {
        return "Actualidad";
    }
    const date = new Date(dateString);
    // const day = date.getDate();
    const month = date.toLocaleString("es-ES", { month: "long" });
    const year = date.getFullYear();

    return `${month.charAt(0).toUpperCase() + month.slice(1)} del ${year}`;
};

export const Timeline = () => {
    const timelineContainerRef = useRef<HTMLDivElement>(null);
    const timelineItemRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const calculateTimelineHeight = () => {
            if (!timelineContainerRef.current) return;

            // Sumamos la altura de todos los items
            const totalHeight = timelineItemRef.current.reduce(
                (acc, item) => acc + (item?.offsetHeight || 0),
                0,
            );

            // Actualizamos la variable CSS
            console.log(totalHeight);
            timelineContainerRef.current.style.setProperty(
                "--timeline-height",
                `${totalHeight}px`,
            );
        };

        // Ejecutamos el cálculo inicial
        calculateTimelineHeight();

        // Escuchamos cambios de tamaño de ventana
        window.addEventListener("resize", calculateTimelineHeight);

        // Cleanup
        return () => {
            window.removeEventListener("resize", calculateTimelineHeight);
        };
    }, []);

    return (
        <div className="timeline-container" ref={timelineContainerRef}>
            {experiences.map(
                ({ company, job, description, date_start, date_end }, index) => (
                    <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className="timeline-item"
                        ref={(el) => {
                            if (timelineItemRef.current) timelineItemRef.current[index] = el;
                        }}
                    >
                        <div className="timeline-date">
                            {parseDate(date_start)} a {parseDate(date_end)}
                        </div>
                        <div className="timeline-content">
                            <h3>{job}</h3>
                            <h4>{company}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                ),
            )}
        </div>
    );
};