import type { ReactNode } from "react";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { CodeBlock } from "../../components/code-block/code-block";
import { Toc, type TocEntry } from "../../components/toc/toc";

const sections: Array<TocEntry> = [
	{ id: "piezas", title: "Las piezas" },
	{ id: "instalacion", title: "Instalación" },
	{ id: "conectividad", title: "Conectividad" },
	{ id: "emparejar", title: "Emparejar el teléfono" },
	{ id: "gateway", title: "El gateway" },
	{ id: "uso-diario", title: "Uso diario" },
	{ id: "siempre-arriba", title: "Que no se caiga" },
	{ id: "actualizar", title: "Actualizar" },
	{ id: "problemas", title: "Problemas comunes" },
	{ id: "seguridad", title: "Seguridad" },
];

const titles = new Map(sections.map(({ id, title }) => [id, title]));

type SectionProps = { id: string; children: ReactNode };

const Section = ({ id, children }: SectionProps) => (
	<section className="docs__section" id={id}>
		<h2 className="docs__section-title">{titles.get(id)}</h2>
		{children}
	</section>
);

type NoteProps = { tone?: "note" | "warning"; children: ReactNode };

const Note = ({ tone = "note", children }: NoteProps) => (
	<p className={`docs-note docs-note--${tone}`}>{children}</p>
);

const pieces = [
	{ piece: "Tailscale", runs: "Mac + teléfono", does: "Deja que el teléfono llegue al Mac desde cualquier red" },
	{ piece: "herdr", runs: "Mac", does: "El multiplexor donde corren tus agentes" },
	{ piece: "Agentes", runs: "Mac", does: "Claude Code, Codex, OpenCode: el que uses" },
	{ piece: "reins-hook", runs: "Mac", does: "El gateway con el que habla el teléfono" },
	{ piece: "Reins", runs: "Teléfono", does: "La app" },
];

type NetworkMode = "wifi" | "tailscale";

export const ReinsPage = () => {
	const [mode, setMode] = useState<NetworkMode>("tailscale");

	return (
		<div className="docs-layout">
			<div className="docs">
				<header className="docs__hero">
					<span className="docs__eyebrow">Documentación</span>
					<h1 className="docs__title">Reins</h1>
					<p className="docs__lead">
						Una terminal personal de teléfono a PC para manejar agentes de código. El tráfico
						va directo del teléfono al computador por SSH: sin nube, sin cuenta y sin relay.
					</p>
					<div className="docs__hero-actions">
						<a
							className="btn btn_secondary"
							href="https://github.com/EndersonPro/homebrew-reins"
							target="_blank"
							rel="noopener noreferrer"
						>
							Homebrew tap <HiExternalLink />
						</a>
						<span className="docs__badge">~20 min de setup</span>
					</div>
				</header>

				<details className="docs__toc-mobile">
					<summary>En esta página</summary>
					<Toc entries={sections} />
				</details>

				<Section id="piezas">
					<div className="docs-table">
						<div className="docs-table__row docs-table__row--head">
							<span>Pieza</span>
							<span>Corre en</span>
							<span>Qué hace</span>
						</div>
						{pieces.map(({ piece, runs, does }) => (
							<div className="docs-table__row" key={piece}>
								<span className="docs-table__key">{piece}</span>
								<span>{runs}</span>
								<span>{does}</span>
							</div>
						))}
					</div>
					<p>
						Todo lo que alcanza el teléfono pasa por un túnel SSH hacia un gateway atado a
						loopback. Nada de esto abre un puerto en tu red.
					</p>
				</Section>

				<Section id="instalacion">
					<h3 className="docs__subtitle">Activar SSH</h3>
					<p>
						En macOS: Configuración del Sistema → General → Compartir → <b>Inicio de sesión
						remoto</b>. En Linux, <code>sudo systemctl enable --now sshd</code>.
					</p>
					<p>Confirma tu usuario, lo necesitas al emparejar:</p>
					<CodeBlock code="whoami" />

					<h3 className="docs__subtitle">herdr</h3>
					<CodeBlock code="brew install herdr" />
					<p>
						Instala después la integración de cada agente que uses. herdr las necesita para
						saber qué corre en cada panel, y hay que repetirlas tras cada actualización de
						herdr:
					</p>
					<CodeBlock
						code={`herdr integration install claude
herdr integration install codex
herdr integration install opencode

herdr integration status   # ver qué quedó conectado`}
					/>
					<Note>
						Reins lee la salida de <code>herdr agent list</code> y sólo acepta versiones para
						las que tiene un parser: hoy <code>0.7.3</code> y cualquier <code>0.8</code>. Con
						una versión más nueva, la app avisa en vez de adivinar.
					</Note>

					<h3 className="docs__subtitle">Los agentes</h3>
					<CodeBlock
						code={`brew install --cask claude-code    # Claude Code
brew install --cask codex          # Codex: es un cask, no una formula
brew install opencode              # OpenCode`}
					/>
					<p>
						Codex también sale por <code>npm i -g @openai/codex</code>. A Reins le da igual
						cuál instales: maneja los que encuentre corriendo.
					</p>

					<h3 className="docs__subtitle">reins-hook</h3>
					<CodeBlock code="brew tap EndersonPro/reins && brew install reins-hook" label="macOS" />
					<CodeBlock
						code="curl -fsSL https://raw.githubusercontent.com/EndersonPro/homebrew-reins/main/install.sh | sh"
						label="Linux / macOS sin Homebrew"
					/>
					<CodeBlock
						code={`scoop bucket add reins https://github.com/EndersonPro/homebrew-reins
scoop install reins-hook`}
						label="Windows (Scoop)"
					/>
					<p>
						Luego conéctalo con los agentes. Esto escribe los hooks de Claude Code e instala
						el plugin de OpenCode, con backup de lo que reemplace:
					</p>
					<CodeBlock code="reins-hook install" />
					<Note tone="warning">
						Reinicia cualquier sesión de Claude Code u OpenCode que ya estuviera abierta:
						cargan hooks y plugins al arrancar y no los toman de otra forma.
					</Note>
				</Section>

				<Section id="conectividad">
					<p className="docs__section-lead">
						Cómo alcanza el teléfono a tu Mac. Wi-Fi local es cero configuración pero sólo
						funciona en la misma red; Tailscale funciona desde cualquier parte.
					</p>

					<div className="docs-tabs" role="tablist" aria-label="Modo de conexión">
						<button
							type="button"
							role="tab"
							aria-selected={mode === "wifi"}
							className={`docs-tabs__tab ${mode === "wifi" ? "is-active" : ""}`}
							onClick={() => setMode("wifi")}
						>
							Red Wi-Fi local
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={mode === "tailscale"}
							className={`docs-tabs__tab ${mode === "tailscale" ? "is-active" : ""}`}
							onClick={() => setMode("tailscale")}
						>
							Tailscale
						</button>
					</div>

					{mode === "wifi" ? (
						<div className="docs-tabs__panel" role="tabpanel">
							<p>
								Sin Tailscale el teléfono sólo llega al Mac cuando ambos están en la misma
								red. No hay que instalar nada: <code>reins-hook setup</code> detecta la IP de
								la LAN y la usa. Para verla tú mismo:
							</p>
							<CodeBlock
								code={`ipconfig getifaddr en0    # Wi-Fi
ipconfig getifaddr en1    # si en0 no responde (Ethernet/Thunderbolt)`}
							/>
							<CodeBlock code="192.168.x.x" plain label="salida esperada" />
							<p>
								Dos cosas rompen esto y no son culpa de Reins. La IP de la LAN cambia con
								DHCP, así que el host guardado en la app deja de responder cuando el router
								te reasigna otra. Y muchas redes de oficina o públicas tienen{" "}
								<i>client isolation</i>, que bloquea que un dispositivo alcance a otro aunque
								compartan el Wi-Fi. Para uso diario, Tailscale.
							</p>
						</div>
					) : (
						<div className="docs-tabs__panel" role="tabpanel">
							<p>
								Tailscale arma una malla WireGuard cifrada entre tus dispositivos. El teléfono
								alcanza el Mac desde cualquier red, sin abrir puertos ni tocar el router.
								Gratis para uso personal.
							</p>
							<CodeBlock
								code={`brew install --cask tailscale                      # macOS
curl -fsSL https://tailscale.com/install.sh | sh   # Linux
tailscale up
tailscale ip -4                                    # la dirección 100.x.y.z`}
							/>
							<p>
								Instala Tailscale en el teléfono e inicia sesión con <b>la misma cuenta</b>.
								Ambos dispositivos tienen que aparecer en el mismo tailnet. No hace falta
								anotar la dirección: <code>reins-hook setup</code> la toma automáticamente, y
								si Tailscale no está corriendo cae a una IP de LAN y lo avisa.
							</p>
						</div>
					)}
				</Section>

				<Section id="emparejar">
					<CodeBlock code="reins-hook setup" />
					<p>
						Genera una llave ed25519 nueva, agrega la mitad pública a{" "}
						<code>~/.ssh/authorized_keys</code> e imprime un QR. Abre Reins, toca{" "}
						<b>Pair host</b> y escanéalo.
					</p>
					<Note tone="warning">
						<b>El QR es un secreto.</b> Lleva la llave privada de ese dispositivo: quien le tome
						una foto puede entrar como tú. No lo compartas y limpia la terminal apenas quede
						emparejado.
					</Note>
					<p>
						La llave privada nunca se escribe a disco en el Mac. En el teléfono va directo al
						Keychain de iOS o al Keystore de Android.
					</p>
				</Section>

				<Section id="gateway">
					<p className="docs__section-lead">
						Hay dos formas de correrlo, y la que elijas decide qué puede hacer la app. No son
						intercambiables.
					</p>

					<h3 className="docs__subtitle">Supervisado, con Homebrew</h3>
					<CodeBlock code="brew services start reins-hook" />
					<p>
						La fórmula del tap trae un service block con <code>keep_alive</code>, así que
						launchd lo arranca al iniciar sesión y lo revive si se cae. Sus logs quedan en{" "}
						<code>/opt/homebrew/var/log/reins-hook.log</code>. Es la opción cómoda y la que
						sobrevive a un reinicio.
					</p>
					<Note>
						El servicio corre <code>reins-hook serve</code> <b>sin flags</b>. Con él al mando
						nunca vas a tener el control de dispositivos: esas rutas no se montan.
					</Note>

					<h3 className="docs__subtitle">A mano</h3>
					<CodeBlock
						code={`mkdir -p ~/.local/state
nohup reins-hook serve > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>
						Es la única forma de pasarle flags. A cambio, nadie lo supervisa: tras un reinicio
						o un crash hay que levantarlo de nuevo.
					</p>

					<p>
						En cualquiera de los dos casos escucha en <code>127.0.0.1:24543</code> y se niega a
						arrancar en una dirección enrutable: el teléfono lo alcanza por el túnel SSH, nunca
						por la red. Si el puerto está ocupado, pasa{" "}
						<code>--addr 127.0.0.1:&lt;puerto&gt;</code>.
					</p>

					<h3 className="docs__subtitle">Opcional: controlar un Android o iOS desde la app</h3>
					<p>
						Sáltate esto si sólo quieres la terminal y el chat. Actívalo cuando además quieras
						que Reins muestre la pantalla de un dispositivo y le reenvíe taps. Los flags vienen
						apagados por defecto:
					</p>
					<Note tone="warning">
						Si tienes el servicio de Homebrew corriendo, <b>páralo antes</b>. Con{" "}
						<code>keep_alive</code> activo, launchd revive un <code>serve</code> sin flags a
						los pocos segundos de que mates el tuyo, y el que arrancas con flags muere con{" "}
						<code>bind: address already in use</code>. Parece aleatorio; no lo es.
					</Note>
					<CodeBlock
						code={`brew services stop reins-hook

nohup reins-hook serve \\
  --device-bridge-read --device-bridge-control \\
  --device-bridge-android --device-bridge-ios \\
  > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>Comprueba que las rutas quedaron montadas:</p>
					<CodeBlock code="curl -s http://127.0.0.1:24543/v1/devices" />
					<p>
						Un <code>404</code> aquí no significa que no encuentre dispositivos: significa que
						el gateway arrancó sin los flags y esas rutas no existen en ese proceso.
					</p>
					<p>
						<code>read</code> expone la lista de dispositivos; <code>control</code> es el que
						realmente permite manejarlos. <code>android</code> necesita <code>adb</code> en el{" "}
						<code>PATH</code> (<code>brew install --cask android-platform-tools</code>) y un
						emulador o un dispositivo con depuración USB. <code>ios</code> usa{" "}
						<code>xcrun</code>/<code>simctl</code>.
					</p>
				</Section>

				<Section id="uso-diario">
					<CodeBlock
						code={`cd ~/projects/mi-proyecto
herdr`}
					/>
					<p>Dentro de herdr, arranca el agente que quieras:</p>
					<CodeBlock code="claude      # o: codex, opencode" />
					<p>
						Para salir de herdr sin detener tus agentes: <kbd>Ctrl+B</kbd> y luego{" "}
						<kbd>Q</kbd>. Escribe <code>herdr</code> para volver.
					</p>
					<p>Comprobar que el gateway ve tus sesiones:</p>
					<CodeBlock code="curl -s http://127.0.0.1:24543/agents | head -c 200" />
					<p>
						Si salen, abre Reins en el teléfono: el host debe decir <b>connected</b>, con tus
						sesiones bajo RECENT.
					</p>
				</Section>

				<Section id="siempre-arriba">
					<p className="docs__section-lead">
						Un Mac dormido es un Mac inalcanzable. Esto es lo que hay que dejar en su sitio.
					</p>

					<h3 className="docs__subtitle">Evitar la suspensión</h3>
					<p>
						Configuración del Sistema → Batería → Opciones: activa evitar la suspensión
						mientras esté conectado a corriente. O temporalmente, mientras el comando corra:
					</p>
					<CodeBlock code="caffeinate -dims" />

					<h3 className="docs__subtitle">Tailscale y SSH activos</h3>
					<p>
						Tailscale arranca solo al iniciar sesión una vez hecho <code>tailscale up</code>.
						Inicio de sesión remoto también persiste, salvo que una actualización de macOS lo
						apague. Chequeo rápido después de cada update:
					</p>
					<CodeBlock
						code={`tailscale status
sudo systemsetup -getremotelogin`}
					/>

					<h3 className="docs__subtitle">Levantarlo y reiniciarlo</h3>
					<p>
						Si lo corres con el servicio de Homebrew, esto ya está resuelto:{" "}
						<code>brew services restart reins-hook</code>, y launchd se encarga del resto.
					</p>
					<p>
						Lo de abajo es para el arranque a mano, con el servicio parado. Una función en tu{" "}
						<code>~/.zshrc</code> hace el trabajo aburrido, y sirve igual para arrancarlo en
						frío que para reiniciarlo:
					</p>
					<CodeBlock
						code={`reins-restart() {
  curl -s -X POST http://127.0.0.1:24543/kill >/dev/null 2>&1
  while lsof -ti tcp:24543 >/dev/null 2>&1; do sleep 0.2; done
  mkdir -p ~/.local/state
  nohup reins-hook serve > ~/.local/state/reins-hook.log 2>&1 &
}`}
						label="~/.zshrc"
						plain
					/>
					<p>
						La espera no es adorno. <code>/kill</code> cierra ordenado: deja de aceptar
						conexiones y da hasta cinco segundos a las que siguen en curso. Durante ese rato
						el puerto sigue tomado, así que encadenar con <code>&amp;&amp;</code> arranca el
						nuevo demasiado pronto y falla.
					</p>
					<p>Y para ver si está vivo:</p>
					<CodeBlock code="curl -s http://127.0.0.1:24543/health" />
				</Section>

				<Section id="actualizar">
					<CodeBlock
						code={`brew upgrade reins-hook
reins-hook install         # los hooks viven dentro del binario: hay que reescribirlos`}
					/>
					<p>
						Después reinicia toda sesión viva de Claude Code y OpenCode. Cargan hooks y plugins
						al arrancar, así que una sesión abierta sigue con la versión anterior.
					</p>

					<h3 className="docs__subtitle">Reiniciar el gateway</h3>
					<p>
						Este es el paso que se olvida. Actualizar reemplaza el binario en disco, pero el
						proceso que ya corre conserva el que cargó al arrancar: sigue sirviendo la versión
						vieja hasta que lo reinicies. Y como todavía tiene el puerto, levantar otro encima
						falla:
					</p>
					<CodeBlock code="listen on 127.0.0.1:24543: bind: address already in use" plain label="error" />
					<p>
						Con el servicio de Homebrew, una línea y listo:
					</p>
					<CodeBlock code="brew services restart reins-hook" />
					<p>A mano, con la función de arriba ya definida, el reinicio es una palabra:</p>
					<CodeBlock code="reins-restart" />
					<p>A mano es lo mismo en dos tiempos: pedirle que se detenga y volver a levantarlo.</p>
					<CodeBlock
						code={`curl -s -X POST http://127.0.0.1:24543/kill
nohup reins-hook serve > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>
						Si el proceso quedó colgado y no contesta <code>/kill</code>, búscalo por el puerto
						y mándale una señal. <code>serve</code> atiende <code>SIGTERM</code>, así que
						cierra por el mismo camino ordenado:
					</p>
					<CodeBlock
						code={`lsof -ti tcp:24543           # el PID que tiene el puerto
kill $(lsof -ti tcp:24543)   # SIGTERM: cierra ordenado igual`}
					/>
					<Note tone="warning">
						Deja <code>kill -9</code> para cuando nada más funcione. Corta el proceso en seco,
						sin drenar las conexiones abiertas ni soltar su estado.
					</Note>
					<p>
						herdr se actualiza desde una terminal <b>fuera</b> de herdr; si no, se niega, para
						no reemplazar su propio binario con el servidor vivo:
					</p>
					<CodeBlock
						code={`herdr update
herdr integration install claude    # repetir tras cada update
herdr integration install codex
herdr integration install opencode`}
					/>
				</Section>

				<Section id="problemas">
					<div className="docs-faq">
						<details className="docs-faq__item">
							<summary>La app no muestra sesiones de OpenCode</summary>
							<p>
								Casi siempre el gateway se reinició y las sesiones nunca volvieron a
								registrarse. El plugin registra al arrancar y en reconexión, nunca reintenta,
								así que una sesión más vieja que el gateway le es invisible.
							</p>
							<CodeBlock code="curl -s http://127.0.0.1:24543/agents | grep -c opencode" />
							<p>¿Cero? Reinicia tus sesiones de OpenCode.</p>
						</details>

						<details className="docs-faq__item">
							<summary>El teléfono no alcanza el Mac</summary>
							<CodeBlock
								code={`tailscale status          # ¿ambos en el mismo tailnet?
tailscale ip -4           # ¿coincide con lo que marca la app?`}
							/>
							<p>
								Revisa también que Inicio de sesión remoto siga activo. Una actualización de
								macOS puede apagarlo.
							</p>
						</details>

						<details className="docs-faq__item">
							<summary>El catálogo o los permisos de un agente no responden</summary>
							<p>
								El plugin de OpenCode sólo llega a disco con <code>reins-hook install</code>.
								Sáltatelo tras una actualización y el plugin en disco se queda una versión
								atrás, en silencio.
							</p>
							<CodeBlock code="reins-hook install" />
							<p>Luego reinicia la sesión de OpenCode.</p>
						</details>

						<details className="docs-faq__item">
							<summary>Revocar un dispositivo</summary>
							<p>
								Cada emparejamiento es una entrada revocable en <code>authorized_keys</code>:
							</p>
							<CodeBlock
								code={`reins-hook keys           # lista las llaves con su fingerprint
reins-hook revoke <id>    # elimina una; las ajenas quedan intactas`}
							/>
							<p>
								Olvidar un host en la app borra la llave del teléfono, pero el Mac conserva su
								entrada hasta que la revoques aquí.
							</p>
						</details>
					</div>
				</Section>

				<Section id="seguridad">
					<ul className="docs-list">
						<li>
							Llaves <b>ed25519</b>, una por dispositivo emparejado, revocables por separado.
						</li>
						<li>
							<b>Ninguna llave privada en disco</b> en el Mac; sólo se autoriza la mitad
							pública.
						</li>
						<li>
							<b>Trust on first use</b> para llaves de host: la app la fija en la primera
							conexión y se niega a conectar si cambia.
						</li>
						<li>
							<b>Gateway sólo en loopback</b>, alcanzado por el túnel SSH. Nunca expuesto a tu
							red.
						</li>
						<li>
							<b>Sin APIs de agentes.</b> La vista de chat lee la salida de terminal del
							agente; no llama a Claude, Codex ni OpenCode directamente.
						</li>
					</ul>
				</Section>
			</div>

			<aside className="docs__aside">
				<Toc entries={sections} />
			</aside>
		</div>
	);
};
