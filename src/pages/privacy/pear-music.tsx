import { useState } from "react";
import pearMusicLogo from "../../assets/img/apps/pear-music.png";

type Locale = "en" | "es" | "pt";

type PolicySection = {
	title: string;
	paragraphs: string[];
	items?: string[];
};

type PolicyCopy = {
	languageLabel: string;
	pageLabel: string;
	title: string;
	intro: string;
	updated: string;
	sections: PolicySection[];
	contactTitle: string;
	contactText: string;
};

const policyCopy: Record<Locale, PolicyCopy> = {
	en: {
		languageLabel: "Language",
		pageLabel: "Privacy policy",
		title: "Pear - Music & Playlist Privacy Policy",
		intro: "This policy explains how Pear - Music & Playlist handles information when you use its music player and streaming service.",
		updated: "Last updated: 17 August 2026",
		sections: [
			{
				title: "Information we process",
				paragraphs: [
					"Pear processes music-use information needed to provide and improve the app, such as searches, selections, playlists, and interactions with the player.",
					"We may also process technical and diagnostic information, including app and device information, performance data, and error reports.",
				],
			},
			{
				title: "Music streaming",
				paragraphs: [
					"Pear provides music playback through a streaming service. The streaming connection may process your IP address and technical network information to deliver playback, maintain the service, and help protect it.",
					"You do not need to create an account or sign in to use Pear.",
				],
			},
			{
				title: "Information stored on your device",
				paragraphs: [
					"Pear stores preferences and music-use information on your device. This can include search history, favorites, playlists, playback history, and cached content used to support the app experience.",
				],
			},
			{
				title: "Analytics, diagnostics, advertising, and consent",
				paragraphs: [
					"Pear uses Firebase Analytics to understand app use and Firebase Crashlytics to receive crash and diagnostic reports. These services may process device, app, network, and identifier information necessary for their services.",
					"Pear may use Google Mobile Ads to show advertisements. The Google User Messaging Platform (UMP) may present consent choices where required. On iOS, App Tracking Transparency may be requested when tracking permission is required under Apple's platform rules.",
					"Information processed by these providers depends on the applicable configuration, your choices, and their services. Please review their privacy information for further details.",
				],
			},
			{
				title: "Your controls",
				paragraphs: [
					"You can manage applicable consent choices, App Tracking Transparency, and device permissions through your device settings. You can also clear cached content and app data through the controls provided by your device.",
				],
			},
			{
				title: "Retention, security, and children",
				paragraphs: [
					"Retention periods vary according to the type of information, the purpose for which it is processed, your device controls, and the practices of our service providers. We use reasonable measures designed to protect information, but no method of transmission or storage is completely secure.",
					"Pear is not directed to children where consent from a parent or guardian is required by applicable law. If you believe a child has provided personal information, please contact us.",
				],
			},
			{
				title: "Changes to this policy",
				paragraphs: [
					"We may update this policy as Pear changes. The latest version will be available at this URL and will show its revision date.",
				],
			},
		],
		contactTitle: "Contact",
		contactText: "For privacy questions about Pear - Music & Playlist, contact",
	},
	es: {
		languageLabel: "Idioma",
		pageLabel: "Política de privacidad",
		title: "Política de privacidad de Pear - Music & Playlist",
		intro: "Esta política explica cómo Pear - Music & Playlist trata la información cuando usas su reproductor de música y servicio de streaming.",
		updated: "Última actualización: 17 de agosto de 2026",
		sections: [
			{ title: "Información que tratamos", paragraphs: ["Pear trata información sobre el uso de música necesaria para ofrecer y mejorar la aplicación, como búsquedas, selecciones, playlists e interacciones con el reproductor.", "También podemos tratar información técnica y de diagnóstico, incluida información de la aplicación y el dispositivo, datos de rendimiento y reportes de errores."] },
			{ title: "Streaming de música", paragraphs: ["Pear ofrece reproducción de música mediante un servicio de streaming. La conexión de streaming puede tratar tu dirección IP e información técnica de red para entregar la reproducción, mantener el servicio y ayudar a protegerlo.", "No necesitas crear una cuenta ni iniciar sesión para usar Pear."] },
			{ title: "Información almacenada en tu dispositivo", paragraphs: ["Pear almacena preferencias e información de uso de música en tu dispositivo. Esto puede incluir historial de búsquedas, favoritos, playlists, historial de reproducción y contenido en caché utilizado para facilitar la experiencia de la aplicación."] },
			{ title: "Analítica, diagnósticos, publicidad y consentimiento", paragraphs: ["Pear utiliza Firebase Analytics para comprender el uso de la aplicación y Firebase Crashlytics para recibir reportes de fallos y diagnósticos. Estos servicios pueden tratar información del dispositivo, la aplicación, la red e identificadores necesarios para sus servicios.", "Pear puede utilizar Google Mobile Ads para mostrar anuncios. Google User Messaging Platform (UMP) puede presentar opciones de consentimiento cuando sea necesario. En iOS, App Tracking Transparency puede solicitarse cuando se requiera permiso de seguimiento conforme a las reglas de la plataforma de Apple.", "La información tratada por estos proveedores depende de la configuración aplicable, tus elecciones y sus servicios. Consulta su información de privacidad para conocer más detalles."] },
			{ title: "Tus controles", paragraphs: ["Puedes gestionar las opciones de consentimiento aplicables, App Tracking Transparency y los permisos del dispositivo desde la configuración de tu dispositivo. También puedes borrar el contenido en caché y los datos de la aplicación mediante los controles de tu dispositivo."] },
			{ title: "Conservación, seguridad y menores", paragraphs: ["Los periodos de conservación varían según el tipo de información, la finalidad de su tratamiento, los controles de tu dispositivo y las prácticas de nuestros proveedores de servicios. Usamos medidas razonables diseñadas para proteger la información, pero ningún método de transmisión o almacenamiento es completamente seguro.", "Pear no está dirigida a menores cuando la legislación aplicable exige el consentimiento de un padre, madre o tutor. Si crees que un menor proporcionó información personal, comunícate con nosotros."] },
			{ title: "Cambios en esta política", paragraphs: ["Podemos actualizar esta política a medida que Pear cambie. La versión más reciente estará disponible en esta URL e incluirá su fecha de revisión."] },
		],
		contactTitle: "Contacto",
		contactText: "Para consultas de privacidad sobre Pear - Music & Playlist, escribe a",
	},
	pt: {
		languageLabel: "Idioma",
		pageLabel: "Política de privacidade",
		title: "Política de privacidade do Pear - Music & Playlist",
		intro: "Esta política explica como o Pear - Music & Playlist trata informações quando você usa seu reprodutor de música e serviço de streaming.",
		updated: "Última atualização: 17 de agosto de 2026",
		sections: [
			{ title: "Informações que tratamos", paragraphs: ["O Pear trata informações de uso de música necessárias para fornecer e melhorar o aplicativo, como buscas, seleções, playlists e interações com o reprodutor.", "Também podemos tratar informações técnicas e de diagnóstico, incluindo informações do aplicativo e do dispositivo, dados de desempenho e relatórios de erros."] },
			{ title: "Streaming de música", paragraphs: ["O Pear fornece reprodução de música por meio de um serviço de streaming. A conexão de streaming pode tratar seu endereço IP e informações técnicas de rede para fornecer a reprodução, manter o serviço e ajudar a protegê-lo.", "Você não precisa criar uma conta ou fazer login para usar o Pear."] },
			{ title: "Informações armazenadas no seu dispositivo", paragraphs: ["O Pear armazena preferências e informações de uso de música no seu dispositivo. Isso pode incluir histórico de buscas, favoritos, playlists, histórico de reprodução e conteúdo em cache usado para apoiar a experiência no aplicativo."] },
			{ title: "Análises, diagnósticos, publicidade e consentimento", paragraphs: ["O Pear usa Firebase Analytics para compreender o uso do aplicativo e Firebase Crashlytics para receber relatórios de falhas e diagnósticos. Esses serviços podem tratar informações de dispositivo, aplicativo, rede e identificadores necessários para seus serviços.", "O Pear pode usar Google Mobile Ads para exibir anúncios. A Google User Messaging Platform (UMP) pode apresentar opções de consentimento quando necessário. No iOS, a App Tracking Transparency pode ser solicitada quando a permissão de rastreamento for exigida pelas regras da plataforma da Apple.", "As informações tratadas por esses provedores dependem da configuração aplicável, das suas escolhas e dos serviços deles. Consulte as informações de privacidade desses provedores para mais detalhes."] },
			{ title: "Seus controles", paragraphs: ["Você pode gerenciar as opções de consentimento aplicáveis, a App Tracking Transparency e as permissões do dispositivo nas configurações do seu dispositivo. Também pode limpar o conteúdo em cache e os dados do aplicativo pelos controles fornecidos pelo seu dispositivo."] },
			{ title: "Retenção, segurança e crianças", paragraphs: ["Os períodos de retenção variam conforme o tipo de informação, a finalidade do tratamento, os controles do seu dispositivo e as práticas dos nossos provedores de serviços. Usamos medidas razoáveis destinadas a proteger as informações, mas nenhum método de transmissão ou armazenamento é totalmente seguro.", "O Pear não é direcionado a crianças quando a legislação aplicável exige o consentimento de um pai, mãe ou responsável. Se você acredita que uma criança forneceu informações pessoais, entre em contato conosco."] },
			{ title: "Alterações nesta política", paragraphs: ["Podemos atualizar esta política à medida que o Pear mudar. A versão mais recente estará disponível nesta URL e mostrará sua data de revisão."] },
		],
		contactTitle: "Contato",
		contactText: "Para questões de privacidade sobre o Pear - Music & Playlist, entre em contato com",
	},
};

export const PrivacyPearMusicPage = () => {
	const [locale, setLocale] = useState<Locale>("en");
	const copy = policyCopy[locale];

	return (
		<main className="privacy-page privacy-page--pear">
			<div className="privacy-page__glow privacy-page__glow--one" />
			<div className="privacy-page__glow privacy-page__glow--two" />
			<article className="privacy-policy">
				<header className="privacy-policy__header">
					<div className="privacy-policy__brand">
						<img src={pearMusicLogo} alt="Pear - Music & Playlist" className="privacy-policy__logo" />
						<div>
							<span className="privacy-policy__eyebrow">Pear - Music &amp; Playlist</span>
							<p>{copy.pageLabel}</p>
						</div>
					</div>
					<div className="privacy-policy__language" aria-label={copy.languageLabel}>
						{(["en", "es", "pt"] as const).map((language) => (
							<button key={language} type="button" className={locale === language ? "is-active" : undefined} onClick={() => setLocale(language)} aria-pressed={locale === language}>
								{language.toUpperCase()}
							</button>
						))}
					</div>
				</header>

				<div className="privacy-policy__intro">
					<h1>{copy.title}</h1>
					<p>{copy.intro}</p>
					<time dateTime="2026-08-17">{copy.updated}</time>
				</div>

				<div className="privacy-policy__content">
					{copy.sections.map((section) => (
						<section key={section.title}>
							<h2>{section.title}</h2>
							{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
							{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
						</section>
					))}
					<section className="privacy-policy__contact">
						<h2>{copy.contactTitle}</h2>
						<p>{copy.contactText} <a href="mailto:khrienanime@gmail.com">khrienanime@gmail.com</a>.</p>
					</section>
				</div>
			</article>
		</main>
	);
};
