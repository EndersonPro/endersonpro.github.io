import { useEffect, useRef } from "react";
import "./timeline.css";

export type Experience = {
    job: string;
    company: string;
    date_start: string;
    date_end: string;
    description: string;
};

const experiences: Array<Experience> = [
    {
        job: "Mobile Dev Lead",
        company: "Melonn SAS",
        date_start: "2024/01/02", // AAAA/MM/DD
        date_end: "now",
        description:
            "Encargado del correcto funcionamiento de todos los servicios necesarios para las aplicaciones móviles de la empresa. Gestión y desarrollo de nuevos servicios. Implementación de buenas prácticas de desarrollo y seguridad.",
    },
    {
        job: "Cloud Engineer",
        company: "Melonn SAS",
        date_start: "2021/09/02", // AAAA/MM/DD
        date_end: "2024/01/02",
        description:
            "Desarrollo de microservicios, APIs, integraciones de sistemas, automatización de procesos y pruebas unitarias, desarrollo de aplicaciones móviles con Flutter.",
    },
    {
        job: "Software Engineer",
        company: "Condor Labs",
        date_start: "2020/12/02", // AAAA/MM/DD
        date_end: "2021/09/02",
        description:
            "Ingeniero de software, encargado de la investigación, diseño e implementación de nuevas funcionalidades y/o procesos sobre código legacy (C#) con React.js, NodeJS, MongoDB, CloudWatch, S3, Lambda, API Gateway. Optimización de procesos existentes. Creación/modificación de procesos de almacenamiento en Oracle DB.",
    },

    {
        job: "Desarrollador Backend Junior",
        company: "SuperPesos",
        date_start: "2019/11/02", // AAAA/MM/DD
        date_end: "2020/11/02",
        description:
            "Desarrollador Backend Junior NodeJS, a cargo del mantenimiento, depuración y creación de microservicios en AWS, implementación de buenas prácticas de desarrollo, levantamiento y análisis de requerimientos. Uso de servicios de AWS, AWS Lambda, API Gateway, CloudWatch y S3 Bucket.",
    },

    {
        job: "Desarrollador Fullstack",
        company: "Freelance",
        date_start: "2017/01/20", // AAAA/MM/DD
        date_end: "2020/08/17",
        description:
            "Desarrollo de aplicaciones móviles y web como freelance, principalmente usando tecnologías web orientadas para propósito general con JavaScript como: React, Angular, Vue, ElectronJS, Ionic, TypeScript, NodeJS, MongoDB y también el uso de lenguajes como PHP y Go. Uso de frameworks como Laravel para la creación de APIs. Creación de aplicaciones móviles con Flutter.",
    },

    {
        job: "Desarrollador Fullstack",
        company: "JQAgencia",
        date_start: "2019/01/16", // AAAA/MM/DD
        date_end: "2019/12/02",
        description:
            "Desarrollo completo de un módulo para gestión de recursos industriales, usando el stack: PHP, MySQL, JavaScript, TypeScript, utilizando herramientas/tecnologías como: Angular, Laravel e Ionic.",
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