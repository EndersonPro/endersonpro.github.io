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
	{ id: "notificaciones", title: m.reins_toc_notificaciones() },
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
	{ piece: "herdr", runs: "macOS · Linux · Windows", does: m.reins_piece_herdr_does() },
	{ piece: m.reins_piece_agents_name(), runs: "macOS · Linux · Windows", does: m.reins_piece_agents_does() },
	{ piece: "reins-hook", runs: "macOS · Linux · Windows", does: m.reins_piece_hook_does() },
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
					<Note>{m.reins_install_intro_note()}</Note>

					<h3 className="docs__subtitle">{m.reins_install_ssh_heading()}</h3>
					<p>{m.reins_install_ssh_p1()}</p>
					<p>{renderRich(m.reins_install_ssh_macos())}</p>
					<CodeBlock
						code={`sudo apt install openssh-server
sudo systemctl enable --now ssh`}
						label="Linux (Debian / Ubuntu)"
					/>
					<CodeBlock
						code={`sudo dnf install openssh-server
sudo systemctl enable --now sshd`}
						label="Linux (Fedora)"
					/>
					<CodeBlock
						code={`sudo pacman -S openssh
sudo systemctl enable --now sshd`}
						label="Linux (Arch)"
					/>
					<CodeBlock
						code={`Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic`}
						label="Windows (PowerShell admin)"
					/>
					<Note>{m.reins_install_ssh_firewall_p()}</Note>
					<CodeBlock
						code="New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22"
						label="Windows (PowerShell admin)"
					/>
					<p>{m.reins_install_ssh_p2()}</p>
					<CodeBlock code="whoami" />

					<h3 className="docs__subtitle">herdr</h3>
					<p>{m.reins_install_herdr_p0()}</p>
					<CodeBlock
						code={`curl -fsSL https://herdr.dev/install.sh | sh
brew install herdr`}
						label="macOS / Linux"
					/>
					<CodeBlock
						code={`powershell -ExecutionPolicy Bypass -c "irm https://herdr.dev/install.ps1 | iex"`}
						label="Windows (PowerShell)"
					/>
					<p>{m.reins_install_herdr_windows_p()}</p>
					<p>{m.reins_install_herdr_p1()}</p>
					<CodeBlock
						code={`herdr integration install claude
herdr integration install codex
herdr integration install opencode

herdr integration status   # ${m.reins_herdr_status_comment()}`}
					/>
					<Note>
						{m.reins_install_herdr_note_1()} <code>20</code> {m.reins_install_herdr_note_2()}{" "}
						<code>22</code> {m.reins_install_herdr_note_3()} {m.reins_install_herdr_note_4()}
					</Note>

					<h3 className="docs__subtitle">{m.reins_install_fork_heading()}</h3>
					<p>{renderRich(m.reins_install_fork_p1())}</p>
					<p>{m.reins_install_fork_p2()}</p>
					<CodeBlock
						code={`cp ~/.local/bin/herdr ~/.local/bin/herdr.stock   # ${m.reins_install_fork_backup_comment()}

# ${m.reins_install_fork_binary_comment()}
# ${m.reins_install_fork_asset_comment()}
cp herdr-macos-aarch64 ~/.local/bin/herdr
chmod +x ~/.local/bin/herdr
codesign --force -s - ~/.local/bin/herdr         # ${m.reins_install_fork_codesign_comment()}
herdr --version                                  # 0.9.0-preview…`}
						label="macOS / Linux"
					/>
					<p>{m.reins_install_fork_windows_p()}</p>
					<CodeBlock
						code={`herdr server stop                               # ${m.reins_install_fork_stop_comment()}
$dir = Split-Path (Get-Command herdr).Source    # ${m.reins_install_fork_dir_comment()}
Copy-Item $dir "$dir.stock" -Recurse           # ${m.reins_install_fork_backup_comment()}

# ${m.reins_install_fork_binary_comment()}
# ${m.reins_install_fork_asset_comment()}
Expand-Archive herdr-windows-x86_64.zip -DestinationPath $dir -Force
herdr --version                                 # 0.9.0-preview…`}
						label="Windows (PowerShell)"
					/>
					<p>{m.reins_install_fork_restart_p()}</p>
					<CodeBlock
						code={`herdr server stop
herdr server &                                   # ${m.reins_install_fork_tui_comment()}
herdr status | grep -E "protocol|version"        # ${m.reins_install_fork_protocol_comment()}`}
						label="macOS / Linux"
					/>
					<CodeBlock
						code={`herdr server                                     # ${m.reins_install_fork_window_comment()}
# ${m.reins_install_fork_other_window_comment()}
herdr status                                     # ${m.reins_install_fork_protocol_comment()}`}
						label="Windows (PowerShell)"
					/>
					<Note tone="warning">{m.reins_install_fork_note_restart()}</Note>
					<Note tone="warning">{renderRich(m.reins_install_fork_note_update())}</Note>
					<p>{m.reins_install_fork_fallback()}</p>

					<h3 className="docs__subtitle">{m.reins_install_mosh_heading()}</h3>
					<p>{renderRich(m.reins_install_mosh_p1())}</p>
					<p>{m.reins_install_mosh_p2()}</p>
					<CodeBlock
						code={`brew install mosh        # macOS
sudo apt install mosh    # ${m.reins_install_mosh_apt_comment()}
sudo dnf install mosh    # ${m.reins_install_mosh_dnf_comment()}
sudo pacman -S mosh      # ${m.reins_install_mosh_pacman_comment()}`}
					/>
					<p>{renderRich(m.reins_install_mosh_p3())}</p>
					<CodeBlock
						code={`curl -s http://127.0.0.1:24543/health   # ${m.reins_install_mosh_health_comment()}`}
					/>
					<Note>{renderRich(m.reins_install_mosh_note())}</Note>

					<h3 className="docs__subtitle">{m.reins_install_agents_heading()}</h3>
					<CodeBlock
						code={`brew install --cask claude-code    # Claude Code
brew install --cask codex          # ${m.reins_agents_codex_comment()}
brew install opencode              # OpenCode`}
						label="macOS"
					/>
					<CodeBlock
						code={`curl -fsSL https://claude.ai/install.sh | bash   # Claude Code
npm install -g @openai/codex                     # Codex
curl -fsSL https://opencode.ai/install | bash    # OpenCode`}
						label="Linux"
					/>
					<CodeBlock
						code={`irm https://claude.ai/install.ps1 | iex                                                     # Claude Code
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"    # Codex
npm install -g opencode-ai                                                                  # OpenCode`}
						label="Windows (PowerShell)"
					/>
					<p>
						{m.reins_install_agents_p1_a()} <code>npm i -g @openai/codex</code>
						{m.reins_install_agents_p1_b()}
					</p>

					<h3 className="docs__subtitle">reins-hook</h3>
					<CodeBlock
						code="brew tap EndersonPro/reins && brew install reins-hook"
						label="macOS / Linux (Homebrew)"
					/>
					<CodeBlock
						code={`# ${m.reins_hook_tarball_comment()}
tar -xzf reins-hook_Linux_x86_64.tar.gz    # ${m.reins_hook_tarball_arm_comment()}
install -Dm755 reins-hook ~/.local/bin/reins-hook`}
						label="Linux (tarball)"
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
								label="macOS"
							/>
							<CodeBlock code="hostname -I" label="Linux" />
							<CodeBlock code="ipconfig" label="Windows" />
							<CodeBlock code="192.168.x.x" plain label={m.reins_label_expected_output()} />
							<p>{renderRich(m.reins_wifi_p2())}</p>
						</div>
					) : (
						<div className="docs-tabs__panel" role="tabpanel">
							<p>{m.reins_tailscale_p1()}</p>
							<CodeBlock
								code={`brew install --cask tailscale                      # macOS
curl -fsSL https://tailscale.com/install.sh | sh   # Linux
winget install Tailscale.Tailscale                 # Windows
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
					<p>{renderRich(m.reins_pair_windows_p())}</p>
					<CodeBlock
						code={`$key = Select-String "$env:USERPROFILE\\.ssh\\authorized_keys" -Pattern 'reins-' | Select-Object -First 1 -ExpandProperty Line
Add-Content "$env:ProgramData\\ssh\\administrators_authorized_keys" $key
icacls.exe "$env:ProgramData\\ssh\\administrators_authorized_keys" /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F"
Restart-Service sshd`}
						label="Windows (PowerShell admin)"
					/>
					<Note tone="warning">{m.reins_pair_windows_note()}</Note>
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
					<p>{renderRich(m.reins_gateway_supervised_linux_p())}</p>

					<h3 className="docs__subtitle">{m.reins_gateway_linux_heading()}</h3>
					<p>{renderRich(m.reins_gateway_linux_p1())}</p>
					<CodeBlock
						code={`[Unit]
Description=Reins gateway
[Service]
ExecStart=%h/.local/bin/reins-hook serve
Restart=always
[Install]
WantedBy=default.target`}
						label="~/.config/systemd/user/reins-hook.service"
						plain
					/>
					<CodeBlock
						code={`systemctl --user daemon-reload
systemctl --user enable --now reins-hook
loginctl enable-linger $USER      # ${m.reins_gateway_linger_comment()}`}
						label="Linux (systemd)"
					/>
					<Note>{renderRich(m.reins_gateway_linux_note())}</Note>

					<h3 className="docs__subtitle">{m.reins_gateway_manual_heading()}</h3>
					<CodeBlock
						code={`mkdir -p ~/.local/state
nohup reins-hook serve > ~/.local/state/reins-hook.log 2>&1 &`}
					/>
					<p>{m.reins_gateway_manual_p1()}</p>
					<p>{renderRich(m.reins_gateway_manual_windows_p())}</p>

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

					<h3 className="docs__subtitle">{m.reins_gateway_config_heading()}</h3>
					<p>
						{m.reins_gateway_config_p1_a()} <code>~/.config/reins-hook/config.yaml</code>
						{m.reins_gateway_config_p1_b()}
					</p>
					<p>{renderRich(m.reins_gateway_config_windows_path())}</p>
					<CodeBlock
						code={`server:
  addr: 127.0.0.1:24543

logging:
  level: info

deviceBridge:
  read: true
  control: true
  seedDemoDevice: false
  android: true
  ios: true
  mcp: false

ios:
  helperBundlePath: ""
  helperRequirement: ""
  simulatorPath: ""`}
						label="~/.config/reins-hook/config.yaml"
						plain
					/>
					<p>{renderRich(m.reins_gateway_config_p2())}</p>
					<Note tone="warning">{renderRich(m.reins_gateway_config_ignored())}</Note>
					<p>{renderRich(m.reins_gateway_config_precedence())}</p>
					<p>
						{m.reins_gateway_config_restart_a()} <code>brew services restart reins-hook</code>
						{m.reins_gateway_config_restart_b()} <code>reins-hook restart</code>
						{m.reins_gateway_config_restart_c()}
					</p>
					<p>{renderRich(m.reins_gateway_restart_cross_p())}</p>

					<h3 className="docs__subtitle">{m.reins_gateway_config_sdkpath_heading()}</h3>
					<p>
						{m.reins_gateway_config_sdkpath_p1_a()} <code>~/Library/Android/sdk</code>
						{m.reins_gateway_config_sdkpath_p1_b()} <code>android.sdkPath</code>{" "}
						{m.reins_gateway_config_sdkpath_p1_c()}
					</p>
					<CodeBlock
						code={`android:
  sdkPath: /path/to/your/android-sdk`}
						label="~/.config/reins-hook/config.yaml"
						plain
					/>
					<p>{renderRich(m.reins_gateway_config_sdkpath_p2())}</p>
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

				<Section id="notificaciones">
					<p className="docs__section-lead">{m.reins_notif_lead()}</p>
					<p>{renderRich(m.reins_notif_p1())}</p>
					<p>{m.reins_notif_p2()}</p>
					<Note>{m.reins_notif_note()}</Note>
					<p>{renderRich(m.reins_notif_verify_p())}</p>
					<p>{renderRich(m.reins_notif_repair_p())}</p>
					<p>{renderRich(m.reins_notif_off_p())}</p>
					<CodeBlock
						code={`push:
  disabled: true   # ${m.reins_notif_off_comment()}`}
						label="~/.config/reins-hook/config.yaml"
						plain
					/>
				</Section>

				<Section id="siempre-arriba">
					<p className="docs__section-lead">{m.reins_alive_lead()}</p>

					<h3 className="docs__subtitle">{m.reins_alive_sleep_heading()}</h3>
					<p>{m.reins_alive_sleep_p1()}</p>
					<CodeBlock code="caffeinate -dims" label="macOS" />
					<p>{m.reins_alive_sleep_linux()}</p>
					<CodeBlock
						code={`systemd-inhibit --what=idle:sleep --why="agents running" sleep infinity`}
						label="Linux"
					/>
					<p>{m.reins_alive_sleep_windows()}</p>
					<CodeBlock
						code={`powercfg /change standby-timeout-ac 0
powercfg /change monitor-timeout-ac 0     # ${m.reins_alive_optional_comment()}
powercfg /change hibernate-timeout-ac 0   # ${m.reins_alive_optional_comment()}`}
						label="Windows (PowerShell admin)"
					/>

					<h3 className="docs__subtitle">{m.reins_alive_tailscale_heading()}</h3>
					<p>
						{m.reins_alive_tailscale_p1_a()} <code>tailscale up</code>. {m.reins_alive_tailscale_p1_b()}
					</p>
					<p>{m.reins_alive_tailscale_p2()}</p>
					<CodeBlock
						code={`tailscale status
sudo systemsetup -getremotelogin`}
						label="macOS"
					/>
					<CodeBlock
						code={`tailscale status
systemctl is-active ssh      # ${m.reins_alive_sshd_comment()}`}
						label="Linux"
					/>
					<CodeBlock
						code={`tailscale status
Get-Service sshd`}
						label="Windows (PowerShell)"
					/>

					<h3 className="docs__subtitle">{m.reins_alive_restart_heading()}</h3>
					<p>
						{m.reins_alive_restart_p1_a()} <code>brew services restart reins-hook</code>
						{m.reins_alive_restart_p1_b()}
					</p>
					<p>{m.reins_alive_restart_linux_p()}</p>
					<CodeBlock
						code="systemctl --user restart reins-hook"
						label="Linux"
					/>
					<p>{renderRich(m.reins_alive_restart_cross_p())}</p>
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
						code={`brew update && brew upgrade reins-hook
reins-hook install         # ${m.reins_update_install_comment()}`}
						label="macOS / Linux (Homebrew)"
					/>
					<p>{renderRich(m.reins_update_tarball_p())}</p>
					<CodeBlock
						code={`scoop update reins-hook
reins-hook install         # ${m.reins_update_install_comment()}`}
						label="Windows (Scoop)"
					/>
					<p>{m.reins_update_p1()}</p>

					<h3 className="docs__subtitle">{m.reins_update_restart_heading()}</h3>
					<p>{m.reins_update_p2()}</p>
					<p>
						{m.reins_update_config_note_a()} <code>~/.config/reins-hook/config.yaml</code>
						{m.reins_update_config_note_b()}
					</p>
					<CodeBlock
						code="listen on 127.0.0.1:24543: bind: address already in use"
						plain
						label="error"
					/>
					<p>{m.reins_update_p3()}</p>
					<CodeBlock code="brew services restart reins-hook" />
					<p>{m.reins_update_restart_linux_p()}</p>
					<CodeBlock code="systemctl --user restart reins-hook" label="Linux" />
					<p>{renderRich(m.reins_update_restart_windows_p())}</p>
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
						label="macOS"
					/>
					<CodeBlock
						code={`ss -ltnp 'sport = :24543'        # ${m.reins_update_lsof_comment()}
sudo lsof -i tcp:24543           # ${m.reins_update_lsof_alt_comment()}
kill $(sudo lsof -ti tcp:24543)  # ${m.reins_update_kill_comment()}`}
						label="Linux"
					/>
					<CodeBlock
						code={`Get-NetTCPConnection -LocalPort 24543 | Select-Object OwningProcess   # ${m.reins_update_lsof_comment()}
Stop-Process -Id <pid>   # ${m.reins_update_windows_stop_comment()}`}
						label="Windows (PowerShell)"
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
					<Note tone="warning">{renderRich(m.reins_update_herdr_fork_note())}</Note>
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
							<p>{renderRich(m.reins_faq2_a1())}</p>
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
