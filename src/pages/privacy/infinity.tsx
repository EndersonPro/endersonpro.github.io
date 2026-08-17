import { useState } from "react";
import infinityLogo from "../../assets/img/apps/infinity.png";

type Locale = "en" | "es" | "pt";

type PolicyCopy = {
	languageLabel: string;
	pageLabel: string;
	title: string;
	intro: string;
	updated: string;
	sections: Array<{ title: string; paragraphs: Array<string>; items?: Array<string> }>;
	contactTitle: string;
	contactText: string;
};

const policyCopy: Record<Locale, PolicyCopy> = {
	en: {
		languageLabel: "Language",
		pageLabel: "Privacy policy",
		title: "Infinity Privacy Policy",
		intro: "This policy applies to Infinity's Local Gallery experience.",
		updated: "Last updated: 17 August 2026",
		sections: [
			{
				title: "Local Gallery processing",
				paragraphs: [
					"You select a video from your device's gallery. Cropping, compression, and audio processing take place on your device. The files produced by Infinity are saved in the app's private storage.",
					"Sharing is initiated by you. On Android, Infinity uses the operating system's share intents only when you choose to share a file.",
				],
			},
			{
				title: "App services and network activity",
				paragraphs: [
					"At launch, Infinity uses Firebase Remote Config, Firebase Analytics, and Firebase Crashlytics.",
					"Firebase Analytics records app events and screen views. When Infinity can derive it from a rejected link, an event may include that link's host. These events are not intended to include the text or URL that you entered.",
					"Firebase Crashlytics may send error and diagnostic information when the app fails. Firebase Remote Config retrieves published app settings. These services may process device, app, network, and identifier information needed to provide their services.",
				],
			},
			{
				title: "Advertising and consent",
				paragraphs: [
					"If the app configuration enables ads, Infinity may use Google AdMob. The Google User Messaging Platform (UMP) may present a consent flow where applicable. On iOS, App Tracking Transparency may be requested when the app asks for tracking permission under the platform's rules.",
					"The information processed by advertising and consent services depends on the applicable configuration, your choices, and Google's services. Please review Google's privacy information for details about those services.",
				],
			},
			{
				title: "Information stored on your device",
				paragraphs: [
					"Infinity stores the files you select or create, preferences, capture counters, and reward state locally. Preferences can include processing choices; counters and reward state can be used by app features and advertising flows.",
				],
			},
			{
				title: "Permissions",
				paragraphs: ["Infinity requests permissions only when required by the relevant feature or platform."],
				items: [
					"Photo Library (iOS): to let you select a video. Infinity accesses the item you choose.",
					"Tracking (iOS): only when the app requests it through Apple's system prompt and under the platform's rules.",
					"Android sharing: the system share sheet is opened only when you choose to share.",
				],
			},
			{
				title: "Retention and changes",
				paragraphs: [
					"Local files and settings remain on your device until you delete them, clear app data, or uninstall the app. Data handled by service providers is subject to their retention practices.",
					"We may update this policy as Infinity changes. The latest version will be available at this URL, with its revision date updated.",
				],
			},
		],
		contactTitle: "Contact",
		contactText: "For privacy questions about Infinity, contact",
	},
	es: {
		languageLabel: "Idioma",
		pageLabel: "Política de privacidad",
		title: "Política de privacidad de Infinity",
		intro: "Esta política aplica a la experiencia de Galería local de Infinity.",
		updated: "Última actualización: 17 de agosto de 2026",
		sections: [
			{ title: "Procesamiento en Galería local", paragraphs: ["Seleccionas un video de la galería de tu dispositivo. El recorte, la compresión y el procesamiento de audio se realizan en tu dispositivo. Los archivos generados por Infinity se guardan en el almacenamiento privado de la aplicación.", "Compartir es una acción iniciada por ti. En Android, Infinity usa los intents de compartición del sistema solo cuando eliges compartir un archivo."] },
			{ title: "Servicios de la aplicación y actividad de red", paragraphs: ["Al iniciar, Infinity usa Firebase Remote Config, Firebase Analytics y Firebase Crashlytics.", "Firebase Analytics registra eventos y vistas de pantalla. Cuando Infinity puede derivarlo de un enlace rechazado, un evento puede incluir el host de ese enlace. Estos eventos no están destinados a incluir el texto ni la URL que introdujiste.", "Firebase Crashlytics puede enviar información de errores y diagnósticos cuando la aplicación falla. Firebase Remote Config obtiene configuraciones publicadas de la aplicación. Estos servicios pueden procesar información del dispositivo, la aplicación, la red e identificadores necesarios para prestarlos."] },
			{ title: "Publicidad y consentimiento", paragraphs: ["Si la configuración de la aplicación habilita anuncios, Infinity puede usar Google AdMob. Google User Messaging Platform (UMP) puede mostrar un flujo de consentimiento cuando corresponda. En iOS, App Tracking Transparency puede solicitarse cuando la aplicación pida permiso de seguimiento según las reglas de la plataforma.", "La información procesada por los servicios de publicidad y consentimiento depende de la configuración aplicable, tus decisiones y los servicios de Google. Consulta la información de privacidad de Google para conocer los detalles."] },
			{ title: "Información almacenada en tu dispositivo", paragraphs: ["Infinity almacena localmente los archivos que seleccionas o creas, preferencias, contadores de capturas y estado de recompensas. Las preferencias pueden incluir opciones de procesamiento; los contadores y el estado de recompensas pueden usarse por funciones de la aplicación y flujos publicitarios."] },
			{ title: "Permisos", paragraphs: ["Infinity solicita permisos solo cuando una función o plataforma correspondiente los requiere."], items: ["Fototeca (iOS): para permitirte seleccionar un video. Infinity accede al elemento que eliges.", "Seguimiento (iOS): únicamente cuando la aplicación lo solicita mediante el aviso del sistema de Apple y según las reglas de la plataforma.", "Compartir en Android: la hoja de compartición del sistema se abre solo cuando eliges compartir."] },
			{ title: "Conservación y cambios", paragraphs: ["Los archivos y configuraciones locales permanecen en tu dispositivo hasta que los elimines, borres los datos de la aplicación o desinstales la aplicación. Los datos manejados por proveedores de servicios están sujetos a sus prácticas de conservación.", "Podemos actualizar esta política a medida que Infinity cambie. La versión más reciente estará disponible en esta URL con su fecha de revisión actualizada."] },
		],
		contactTitle: "Contacto",
		contactText: "Para consultas de privacidad sobre Infinity, escribe a",
	},
	pt: {
		languageLabel: "Idioma",
		pageLabel: "Política de privacidade",
		title: "Política de privacidade do Infinity",
		intro: "Esta política se aplica à experiência Galeria local do Infinity.",
		updated: "Última atualização: 17 de agosto de 2026",
		sections: [
			{ title: "Processamento na Galeria local", paragraphs: ["Você seleciona um vídeo da galeria do seu dispositivo. O recorte, a compressão e o processamento de áudio ocorrem no seu dispositivo. Os arquivos produzidos pelo Infinity são salvos no armazenamento privado do aplicativo.", "O compartilhamento é iniciado por você. No Android, o Infinity usa os intents de compartilhamento do sistema somente quando você escolhe compartilhar um arquivo."] },
			{ title: "Serviços do aplicativo e atividade de rede", paragraphs: ["Ao iniciar, o Infinity usa Firebase Remote Config, Firebase Analytics e Firebase Crashlytics.", "O Firebase Analytics registra eventos e visualizações de tela. Quando o Infinity consegue derivá-lo de um link rejeitado, um evento pode incluir o host desse link. Esses eventos não devem incluir o texto ou a URL inserida por você.", "O Firebase Crashlytics pode enviar informações de erro e diagnóstico quando o aplicativo falha. O Firebase Remote Config recupera configurações publicadas do aplicativo. Esses serviços podem processar informações de dispositivo, aplicativo, rede e identificadores necessários para fornecê-los."] },
			{ title: "Publicidade e consentimento", paragraphs: ["Se a configuração do aplicativo habilitar anúncios, o Infinity poderá usar o Google AdMob. A Google User Messaging Platform (UMP) pode apresentar um fluxo de consentimento quando aplicável. No iOS, a App Tracking Transparency pode ser solicitada quando o aplicativo pedir permissão de rastreamento conforme as regras da plataforma.", "As informações processadas pelos serviços de publicidade e consentimento dependem da configuração aplicável, das suas escolhas e dos serviços do Google. Consulte as informações de privacidade do Google para detalhes sobre esses serviços."] },
			{ title: "Informações armazenadas no seu dispositivo", paragraphs: ["O Infinity armazena localmente os arquivos que você seleciona ou cria, preferências, contadores de captura e estado de recompensas. As preferências podem incluir escolhas de processamento; os contadores e o estado de recompensas podem ser usados por recursos do aplicativo e fluxos de publicidade."] },
			{ title: "Permissões", paragraphs: ["O Infinity solicita permissões somente quando exigidas pelo recurso ou pela plataforma correspondente."], items: ["Biblioteca de Fotos (iOS): para permitir que você selecione um vídeo. O Infinity acessa o item escolhido.", "Rastreamento (iOS): somente quando o aplicativo o solicitar por meio do aviso do sistema da Apple e segundo as regras da plataforma.", "Compartilhamento no Android: a folha de compartilhamento do sistema é aberta somente quando você escolhe compartilhar."] },
			{ title: "Retenção e alterações", paragraphs: ["Os arquivos e configurações locais permanecem no seu dispositivo até que você os exclua, limpe os dados do aplicativo ou desinstale o aplicativo. Os dados tratados por prestadores de serviços estão sujeitos às suas práticas de retenção.", "Podemos atualizar esta política à medida que o Infinity mudar. A versão mais recente estará disponível nesta URL, com a data de revisão atualizada."] },
		],
		contactTitle: "Contato",
		contactText: "Para questões de privacidade sobre o Infinity, entre em contato com",
	},
};

export const PrivacyInfinityPage = () => {
	const [locale, setLocale] = useState<Locale>("en");
	const copy = policyCopy[locale];

	return (
		<main className="privacy-page">
			<div className="privacy-page__glow privacy-page__glow--one" />
			<div className="privacy-page__glow privacy-page__glow--two" />
			<article className="privacy-policy">
				<header className="privacy-policy__header">
					<div className="privacy-policy__brand">
						<img src={infinityLogo} alt="Infinity" className="privacy-policy__logo" />
						<div>
							<span className="privacy-policy__eyebrow">Infinity</span>
							<p>{copy.pageLabel}</p>
						</div>
					</div>
					<div className="privacy-policy__language" aria-label={copy.languageLabel}>
						{(["en", "es", "pt"] as const).map((language) => (
							<button
								key={language}
								type="button"
								className={locale === language ? "is-active" : undefined}
								onClick={() => setLocale(language)}
								aria-pressed={locale === language}
							>
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
