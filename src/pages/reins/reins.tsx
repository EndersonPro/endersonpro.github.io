import type { ReactNode } from "react";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { CodeBlock } from "../../components/code-block/code-block";
import { Toc, type TocEntry } from "../../components/toc/toc";
import { renderRich } from "../../lib/rich-text";
import { m } from "../../paraglide/messages.js";

const sections: Array<TocEntry> = [
	{ id: "piezas", title: m.reins_toc_piezas() },
	{ id: "instalacion", title: m.reins_toc_instalacion() },
	{ id: "conectividad", title: m.reins_toc_conectividad() },
	{ id: "emparejar", title: m.reins_toc_emparejar() },
	{ id: "gateway", title: m.reins_toc_gateway() },
	{ id: "uso-diario", title: m.reins_toc_uso_diario() },
	{ id: "siempre-arriba", title: m.reins_toc_siempre_arriba() },
	{ id: "actualizar", title: m.reins_toc_actualizar() },
	{ id: "problemas", title: m.reins_toc_problemas() },
	{ id: "seguridad", title: m.reins_toc_seguridad() },
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
	{ piece: "Tailscale", runs: m.reins_piece_tailscale_runs(), does: m.reins_piece_tailscale_does() },
	{ piece: "herdr", runs: "Mac", does: m.reins_piece_herdr_does() },
	{ piece: m.reins_piece_agents_name(), runs: "Mac", does: m.reins_piece_agents_does() },
	{ piece: "reins-hook", runs: "Mac", does: m.reins_piece_hook_does() },
	{ piece: "Reins", runs: m.reins_piece_reins_runs(), does: m.reins_piece_reins_does() },
];

type NetworkMode = "wifi" | "tailscale";

export const ReinsPage = () => {
	const [mode, setMode] = useState<NetworkMode>("tailscale");

	return (
		<div className="docs-layout">
			<div className="docs">
				<header className="docs__hero">
					<span className="docs__eyebrow">{m.reins_hero_eyebrow()}</span>
					<h1 className="docs__title">Reins</h1>
					<p className="docs__lead">{m.reins_hero_lead()}</p>
					<div className="docs__hero-actions">
						<a
							className="btn btn_primary"
							href="https://github.com/EndersonPro/homebrew-reins"
							target="_blank"
							rel="noopener noreferrer"
						>
							{m.reins_hero_cta()} <HiExternalLink />
						</a>
						<span className="docs__badge">{m.reins_hero_badge()}</span>
					</div>
				</header>

				<details className="docs__toc-mobile">
					<summary>{m.toc_heading()}</summary>
					<Toc entries={sections} />
				</details>

				<Section id="piezas">
					<div className="docs-table">
						<div className="docs-table__row docs-table__row--head">
							<span>{m.reins_table_head_piece()}</span>
							<span>{m.reins_table_head_runs()}</span>
							<span>{m.reins_table_head_does()}</span>
						</div>
						{pieces.map(({ piece, runs, does }) => (
							<div className="docs-table__row" key={piece}>
								<span className="docs-table__key">{piece}</span>
								<span>{runs}</span>
								<span>{does}</span>
							</div>
						))}
					</div>
					<p>{m.reins_piezas_note()}</p>
				</Section>

				<Section id="instalacion">
					<h3 className="docs__subtitle">{m.reins_install_ssh_heading()}</h3>
					<p>
						{renderRich(m.reins_install_ssh_p1())} <code>sudo systemctl enable --now sshd</code>.
					</p>
					<p>{m.reins_install_ssh_p2()}</p>
					<CodeBlock code="whoami" />

					<h3 className="docs__subtitle">herdr</h3>
					<CodeBlock code="brew install herdr" />
					<p>{m.reins_install_herdr_p1()}</p>
					<CodeBlock
						code={`herdr integration install claude
herdr integration install codex
herdr integration install opencode

herdr integration status   # ${m.reins_herdr_status_comment()}`}
					/>
					<Note>
						{m.reins_install_herdr_note_1()} <code>herdr agent list</code>{" "}
						{m.reins_install_herdr_note_2()} <code>0.7.3</code> {m.reins_install_herdr_note_3()}{" "}
						<code>0.8</code>
						{m.reins_install_herdr_note_4()}
					</Note>

					<h3 className="docs__subtitle">{m.reins_install_agents_heading()}</h3>
					<CodeBlock
						code={`brew install --cask claude-code    # Claude Code
brew install --cask codex          # ${m.reins_agents_codex_comment()}
brew install opencode              # OpenCode`}
					/>
					<p>
						{m.reins_install_agents_p1_a()} <code>npm i -g @openai/codex</code>
						{m.reins_install_agents_p1_b()}
					</p>

					<h3 className="docs__subtitle">reins-hook</h3>
					<CodeBlock code="brew tap EndersonPro/reins && brew install reins-hook" label="macOS" />
					<CodeBlock
						code="curl -fsSL https://raw.githubusercontent.com/EndersonPro/homebrew-reins/main/install.sh | sh"
						label={m.reins_label_linux_no_brew()}
					/>
					<CodeBlock
						code={`scoop bucket add reins https://github.com/EndersonPro/homebrew-reins
scoop install reins-hook`}
						label="Windows (Scoop)"
					/>
					<p>{m.reins_install_hook_p1()}</p>
					<CodeBlock code="reins-hook install" />
					<Note tone="warning">{m.reins_install_hook_warning()}</Note>
				</Section>

				<Section id="conectividad">
					<p className="docs__section-lead">{m.reins_connectivity_lead()}</p>

					<div className="docs-tabs" role="tablist" aria-label={m.reins_connectivity_tabs_aria()}>
						<button
							type="button"
							role="tab"
							aria-selected={mode === "wifi"}
							className={`docs-tabs__tab ${mode === "wifi" ? "is-active" : ""}`}
							onClick={() => setMode("wifi")}
						>
							{m.reins_tab_wifi()}
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
								{m.reins_wifi_p1_a()} <code>reins-hook setup</code> {m.reins_wifi_p1_b()}
							</p>
							<CodeBlock
								code={`ipconfig getifaddr en0    # Wi-Fi
ipconfig getifaddr en1    # ${m.reins_wifi_fallback_comment()}`}
							/>
							<CodeBlock code="192.168.x.x" plain label={m.reins_label_expected_output()} />
							<p>{renderRich(m.reins_wifi_p2())}</p>
						</div>
					) : (
						<div className="docs-tabs__panel" role="tabpanel">
							<p>{m.reins_tailscale_p1()}</p>
							<CodeBlock
								code={`brew install --cask tailscale                      # macOS
curl -fsSL https://tailscale.com/install.sh | sh   # Linux
tailscale up
tailscale ip -4                                    # ${m.reins_tailscale_ip_comment()}`}
							/>
							<p>
								{renderRich(m.reins_tailscale_p2_a())} <code>reins-hook setup</code>{" "}
								{m.reins_tailscale_p2_b()}
							</p>
						</div>
					)}
				</Section>

				<Section id="emparejar">
					<CodeBlock code="reins-hook setup" />
					<p>
						{m.reins_pair_p1_a()} <code>~/.ssh/authorized_keys</code> {renderRich(m.reins_pair_p1_b())}
					</p>
					<Note tone="warning">{renderRich(m.reins_pair_warning())}</Note>
					<p>{m.reins_pair_p2()}</p>
				</Section>

				<Section id="gateway">
					<p className="docs__section-lead">{m.reins_gateway_lead()}</p>

					<h3 className="docs__subtitle">{m.reins_gateway_supervised_heading()}</h3>
					<CodeBlock code="brew services start reins-hook" />
					<p>
						{m.reins_gateway_supervised_p1_a()} <code>keep_alive</code>{" "}
						{m.reins_gateway_supervised_p1_b()} <code>/opt/homebrew/var/log/reins-hook.log</code>
						{m.reins_gateway_supervised_p1_c()}
					</p>
					<Note>
						{m.reins_gateway_supervised_note_a()} <code>reins-hook serve</code>{" "}
						{renderRich(m.reins_gateway_supervised_note_b())}
					</Note>

					<h3 className="docs__subtitle">{m.reins_gateway_manual_heading()}</h3>
					<CodeBlock
						code={`mkdir -p ~/.local/state
nohup reins-hook serve > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>{m.reins_gateway_manual_p1()}</p>

					<p>
						{m.reins_gateway_manual_note_a()} <code>127.0.0.1:24543</code>{" "}
						{m.reins_gateway_manual_note_b()} <code>{m.reins_gateway_addr_flag()}</code>.
					</p>

					<h3 className="docs__subtitle">{m.reins_gateway_optional_heading()}</h3>
					<p>{m.reins_gateway_optional_p1()}</p>
					<Note tone="warning">
						{renderRich(m.reins_gateway_flags_warning_a())} <code>keep_alive</code>{" "}
						{m.reins_gateway_flags_warning_b()} <code>serve</code> {m.reins_gateway_flags_warning_c()}{" "}
						<code>bind: address already in use</code>
						{m.reins_gateway_flags_warning_d()}
					</Note>
					<CodeBlock
						code={`brew services stop reins-hook

nohup reins-hook serve \\
  --device-bridge-read --device-bridge-control \\
  --device-bridge-android --device-bridge-ios \\
  > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>{m.reins_gateway_check_routes()}</p>
					<CodeBlock code="curl -s http://127.0.0.1:24543/v1/devices" />
					<p>
						{m.reins_gateway_404_a()} <code>404</code> {m.reins_gateway_404_b()}
					</p>
					<p>
						<code>read</code> {m.reins_gateway_detail_1()} <code>control</code>{" "}
						{m.reins_gateway_detail_2()} <code>android</code> {m.reins_gateway_detail_3()}{" "}
						<code>adb</code> {m.reins_gateway_detail_4()} <code>PATH</code> (
						<code>brew install --cask android-platform-tools</code>) {m.reins_gateway_detail_5()}{" "}
						<code>ios</code> {m.reins_gateway_detail_6()} <code>xcrun</code>/<code>simctl</code>.
					</p>
				</Section>

				<Section id="uso-diario">
					<CodeBlock
						code={`cd ~/projects/mi-proyecto
herdr`}
					/>
					<p>{m.reins_daily_p1()}</p>
					<CodeBlock code={`claude      # ${m.reins_daily_agent_comment()}`} />
					<p>
						{m.reins_daily_exit_a()} <kbd>Ctrl+B</kbd> {m.reins_daily_exit_b()} <kbd>Q</kbd>
						{m.reins_daily_exit_c()} <code>herdr</code> {m.reins_daily_exit_d()}
					</p>
					<p>{m.reins_daily_p2()}</p>
					<CodeBlock code="curl -s http://127.0.0.1:24543/agents | head -c 200" />
					<p>{renderRich(m.reins_daily_p3())}</p>
				</Section>

				<Section id="siempre-arriba">
					<p className="docs__section-lead">{m.reins_alive_lead()}</p>

					<h3 className="docs__subtitle">{m.reins_alive_sleep_heading()}</h3>
					<p>{m.reins_alive_sleep_p1()}</p>
					<CodeBlock code="caffeinate -dims" />

					<h3 className="docs__subtitle">{m.reins_alive_tailscale_heading()}</h3>
					<p>
						{m.reins_alive_tailscale_p1_a()} <code>tailscale up</code>. {m.reins_alive_tailscale_p1_b()}
					</p>
					<CodeBlock
						code={`tailscale status
sudo systemsetup -getremotelogin`}
					/>

					<h3 className="docs__subtitle">{m.reins_alive_restart_heading()}</h3>
					<p>
						{m.reins_alive_restart_p1_a()} <code>brew services restart reins-hook</code>
						{m.reins_alive_restart_p1_b()}
					</p>
					<p>
						{m.reins_alive_restart_p2_a()} <code>~/.zshrc</code> {m.reins_alive_restart_p2_b()}
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
						{m.reins_alive_wait_a()} <code>/kill</code> {m.reins_alive_wait_b()} <code>&&</code>{" "}
						{m.reins_alive_wait_c()}
					</p>
					<p>{m.reins_alive_health_p()}</p>
					<CodeBlock code="curl -s http://127.0.0.1:24543/health" />
				</Section>

				<Section id="actualizar">
					<CodeBlock
						code={`brew upgrade reins-hook
reins-hook install         # ${m.reins_update_install_comment()}`}
					/>
					<p>{m.reins_update_p1()}</p>

					<h3 className="docs__subtitle">{m.reins_update_restart_heading()}</h3>
					<p>{m.reins_update_p2()}</p>
					<CodeBlock
						code="listen on 127.0.0.1:24543: bind: address already in use"
						plain
						label="error"
					/>
					<p>{m.reins_update_p3()}</p>
					<CodeBlock code="brew services restart reins-hook" />
					<p>{m.reins_update_p4()}</p>
					<CodeBlock code="reins-restart" />
					<p>{m.reins_update_p5()}</p>
					<CodeBlock
						code={`curl -s -X POST http://127.0.0.1:24543/kill
nohup reins-hook serve > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>
						{m.reins_update_hung_a()} <code>/kill</code>
						{m.reins_update_hung_b()} <code>serve</code> {m.reins_update_hung_c()}{" "}
						<code>SIGTERM</code>
						{m.reins_update_hung_d()}
					</p>
					<CodeBlock
						code={`lsof -ti tcp:24543           # ${m.reins_update_lsof_comment()}
kill $(lsof -ti tcp:24543)   # ${m.reins_update_kill_comment()}`}
					/>
					<Note tone="warning">
						{m.reins_update_kill9_a()} <code>kill -9</code> {m.reins_update_kill9_b()}
					</Note>
					<p>
						{renderRich(m.reins_update_herdr_p1())}
					</p>
					<CodeBlock
						code={`herdr update
herdr integration install claude    # ${m.reins_update_herdr_repeat_comment()}
herdr integration install codex
herdr integration install opencode`}
					/>
				</Section>

				<Section id="problemas">
					<div className="docs-faq">
						<details className="docs-faq__item">
							<summary>{m.reins_faq1_q()}</summary>
							<p>{m.reins_faq1_a1()}</p>
							<CodeBlock code="curl -s http://127.0.0.1:24543/agents | grep -c opencode" />
							<p>{m.reins_faq1_a2()}</p>
						</details>

						<details className="docs-faq__item">
							<summary>{m.reins_faq2_q()}</summary>
							<CodeBlock
								code={`tailscale status          # ${m.reins_faq2_comment1()}
tailscale ip -4           # ${m.reins_faq2_comment2()}`}
							/>
							<p>{m.reins_faq2_a1()}</p>
						</details>

						<details className="docs-faq__item">
							<summary>{m.reins_faq3_q()}</summary>
							<p>
								{m.reins_faq3_a1_a()} <code>reins-hook install</code>
								{m.reins_faq3_a1_b()}
							</p>
							<CodeBlock code="reins-hook install" />
							<p>{m.reins_faq3_a2()}</p>
						</details>

						<details className="docs-faq__item">
							<summary>{m.reins_faq4_q()}</summary>
							<p>
								{m.reins_faq4_a1()} <code>authorized_keys</code>:
							</p>
							<CodeBlock
								code={`reins-hook keys           # ${m.reins_faq4_keys_comment()}
reins-hook revoke <id>    # ${m.reins_faq4_revoke_comment()}`}
							/>
							<p>{m.reins_faq4_a2()}</p>
						</details>
					</div>
				</Section>

				<Section id="seguridad">
					<ul className="docs-list">
						<li>{renderRich(m.reins_security_item1())}</li>
						<li>{renderRich(m.reins_security_item2())}</li>
						<li>{renderRich(m.reins_security_item3())}</li>
						<li>{renderRich(m.reins_security_item4())}</li>
						<li>{renderRich(m.reins_security_item5())}</li>
					</ul>
				</Section>
			</div>

			<aside className="docs__aside">
				<Toc entries={sections} />
			</aside>
		</div>
	);
};
