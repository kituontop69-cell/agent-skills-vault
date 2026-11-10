# Master AI Agent Skills Catalog (Comprehensive Edition)
Total Skills: 713

This catalog contains all specialized skill definitions, instructions, and system prompts exported from Antigravity and Everything Claude Code (ECC) for GPT 6 Astra or any custom agent framework.

## Category: .opencode (239 skills)

### [android-cli-plugin--skills]
**Description:** Provides instructions for installing and using the `android` CLI. The `android` command-line tool is a critical tool for Android development and helps you create new Android projects, run Android apps on devices, manage and interact with Android virtual devices (including screenshots and UI inspection), manage Android SDK components, look up official Android documentation, and discover and install official Android skills.

**Location:** .opencode\android-cli-plugin--skills\SKILL.md

### [Antigravity-Builtin--agy-customizations]
**Description:** >-

**Location:** .opencode\Antigravity-Builtin--agy-customizations\SKILL.md

### [Antigravity-Builtin--antigravity_guide]
**Description:** Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.

**Location:** .opencode\Antigravity-Builtin--antigravity_guide\SKILL.md

### [Antigravity-Builtin--automation]
**Description:** Interactive guide to design and create a scheduled background automation. Use this skill when the user wants to create an automated or recurring scheduled task (e.g. "summarize my emails every morning", "every Monday send me a to-do list"). Also triggered by the /automation slash command.

**Location:** .opencode\Antigravity-Builtin--automation\SKILL.md

### [Antigravity-Builtin--generative_ui]
**Description:** How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.

**Location:** .opencode\Antigravity-Builtin--generative_ui\SKILL.md

### [Antigravity-Builtin--migrate-workflows]
**Description:** Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.

**Location:** .opencode\Antigravity-Builtin--migrate-workflows\SKILL.md

### [Antigravity-Builtin--permissioned-github]
**Description:** Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.

**Location:** .opencode\Antigravity-Builtin--permissioned-github\SKILL.md

### [Antigravity-Builtin--plugin]
**Description:** How to manage and create plugins — namespaced bundles of skills, agents, rules, MCP servers and hooks that install, enable and disable as a single unit. Use this skill when the user wants to enable, disable, install or uninstall a plugin, when they want to create a new plugin, or when a new customization should be packaged into a plugin rather than left loose. Also triggered by the /plugin slash command. Don't use for the underlying customization system itself — discovery roots, loading priority, or authoring a standalone skill, agent, rule, hook or MCP server outside a plugin; see the customizations guide skill for those.

**Location:** .opencode\Antigravity-Builtin--plugin\SKILL.md

### [Antigravity-Builtin--run-workflow]
**Description:** >-

**Location:** .opencode\Antigravity-Builtin--run-workflow\SKILL.md

### [Antigravity-Builtin--ui-plugin-navigation]
**Description:** Discover UI plugin panels relevant to the current task and surface a one-click pill in chat to open (toggle) them in the side pane. Use when a running UI plugin's panel would help with what the user is doing, or right after the user enables a new UI plugin pane and a shortcut to open it is handy.

**Location:** .opencode\Antigravity-Builtin--ui-plugin-navigation\SKILL.md

### [chrome-devtools-plugin--a11y-debugging]
**Description:** Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.

**Location:** .opencode\chrome-devtools-plugin--a11y-debugging\SKILL.md

### [chrome-devtools-plugin--chrome-devtools]
**Description:** Uses Chrome DevTools via MCP for efficient debugging, troubleshooting and browser automation. Use when debugging web pages, automating browser interactions, analyzing performance, or inspecting network requests. This skill does not apply to `--slim` mode (MCP configuration).

**Location:** .opencode\chrome-devtools-plugin--chrome-devtools\SKILL.md

### [chrome-devtools-plugin--cookie-debugging]
**Description:** Uses Chrome DevTools MCP for inspecting, debugging, and testing cookies, session state, authentication issues, and cookie consent compliance. Use when diagnosing 401/403 errors, authentication redirects, session expiration, Cookie/Set-Cookie header issues, cookie banner consent conformance, or third-party cookie/SameSite/Partitioned cookie warnings.

**Location:** .opencode\chrome-devtools-plugin--cookie-debugging\SKILL.md

### [chrome-devtools-plugin--debug-optimize-lcp]
**Description:** Guides debugging and optimizing Largest Contentful Paint (LCP) using Chrome DevTools MCP tools. Use this skill whenever the user asks about LCP performance, slow page loads, Core Web Vitals optimization, or wants to understand why their page's main content takes too long to appear. Also use when the user mentions "largest contentful paint", "page load speed", "CWV", or wants to improve how fast their hero image or main content renders.

**Location:** .opencode\chrome-devtools-plugin--debug-optimize-lcp\SKILL.md

### [chrome-devtools-plugin--memory-leak-debugging]
**Description:** Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to capture, compare, or inspect heap snapshots with Chrome DevTools MCP memory tools.

**Location:** .opencode\chrome-devtools-plugin--memory-leak-debugging\SKILL.md

### [chrome-devtools-plugin--troubleshooting]
**Description:** Uses Chrome DevTools MCP and documentation to troubleshoot connection and target issues. Trigger this skill when list_pages, new_page, or navigate_page fail, or when the server initialization fails.

**Location:** .opencode\chrome-devtools-plugin--troubleshooting\SKILL.md

### [claude-red--active-directory--offensive-active-directory]
**Description:** "Active Directory attack methodology for internal network red team engagements. Covers reconnaissance (BloodHound, PowerView, ADExplorer), credential abuse (Kerberoasting, ASREProasting, NTLM relay, LLMNR/NBT-NS poisoning), privilege escalation (ACL abuse, GPO abuse, unconstrained/constrained delegation), lateral movement (Pass-the-Hash, Pass-the-Ticket, Overpass-the-Hash, WMI/WinRM/PsExec), persistence (Golden/Silver/Diamond Tickets, DCSync, DCShadow, AdminSDHolder, Skeleton Key), forest trust attacks, ADCS abuse (ESC1-ESC15), and modern MDI/Defender for Identity evasion. Use when assessing on-prem AD, hybrid AD/Entra ID environments, or ADCS deployments."

**Location:** .opencode\claude-red--active-directory--offensive-active-directory\SKILL.md

### [claude-red--active-directory--offensive-netexec]
**Description:** >

**Location:** .opencode\claude-red--active-directory--offensive-netexec\SKILL.md

### [claude-red--ai--offensive-ai-security]
**Description:** 'AI/LLM security offensive checklist: prompt injection, jailbreaking, model extraction, training data poisoning, adversarial inputs, LLM-assisted attack automation, and AI system reconnaissance. Use when assessing AI/ML systems, red-teaming LLMs, or researching AI attack vectors.'

**Location:** .opencode\claude-red--ai--offensive-ai-security\SKILL.md

### [claude-red--api--offensive-api-abuse]
**Description:** "Advanced API exploitation methodology focused on business logic abuse and sophisticated attack patterns that bypass traditional security controls. Covers business logic bypass through API call chaining and workflow manipulation. Addresses GraphQL-specific attacks including batching for credential brute-force, query depth exploitation, and introspection abuse. Includes pagination exploitation for data exfiltration, webhook hijacking for SSRF and data interception, and resource exhaustion through algorithmic complexity attacks. Covers race conditions in API transactions using parallel request techniques. Provides comprehensive JWT manipulation including algorithm confusion, kid injection, jku/x5u abuse, and claim tampering. Details API key leakage detection across source repositories, client-side code, and error messages. Covers undocumented endpoint discovery through predictable naming, debug routes, and source map analysis. Tooling includes Arjun, ParamSpider, jwt_tool, and GraphQL Voyager. Designed for authorized penetration testers targeting business logic layers that automated scanners miss."

**Location:** .opencode\claude-red--api--offensive-api-abuse\SKILL.md

### [claude-red--api--offensive-api-security]
**Description:** "Comprehensive API security testing methodology covering REST, gRPC, and WebSocket attack surfaces. Addresses the full OWASP API Security Top 10 2023 including BOLA/IDOR, broken authentication, excessive data exposure, rate limiting bypass, BFLA, mass assignment, SSRF, and security misconfiguration. Includes REST-specific attacks such as HTTP verb tampering, content-type switching, and parameter pollution. Covers gRPC exploitation through protobuf interception, reflection API enumeration, and metadata injection. Addresses WebSocket vulnerabilities including origin bypass, message injection, and cross-site WebSocket hijacking. Provides tooling guidance for Burp Suite, Postman, grpcurl, websocat, and mitmproxy. Each technique includes detection signatures and defensive indicators so you understand what artifacts your testing leaves behind. Designed for authorized penetration testing engagements against API-driven architectures."

**Location:** .opencode\claude-red--api--offensive-api-security\SKILL.md

### [claude-red--auth--offensive-jwt]
**Description:** "JWT attack methodology for penetration testers. Covers algorithm confusion (alg:none, RS256→HS256), weak HMAC secret brute force, kid parameter injection (SQLi, path traversal), jku/x5u/jwk header injection, JWKS cache poisoning, JWS/JWE confusion, timing attacks, and mobile JWT storage extraction. Use when testing JWT-based authentication, hunting auth bypass via token manipulation, or evaluating JWT implementation security in web or mobile apps."

**Location:** .opencode\claude-red--auth--offensive-jwt\SKILL.md

### [claude-red--auth--offensive-oauth]
**Description:** 'OAuth 2.0 attack checklist: authorization code interception, redirect_uri bypass, CSRF on OAuth flow, state parameter abuse, open redirector chaining, token leakage via Referer, PKCE bypass, and scope escalation. Use when testing OAuth implementations in web apps or bug bounty.'

**Location:** .opencode\claude-red--auth--offensive-oauth\SKILL.md

### [claude-red--cicd--offensive-cicd-pipeline]
**Description:** "Comprehensive CI/CD pipeline exploitation methodology covering GitHub Actions injection vectors (expression injection via PR titles and issue bodies, workflow_run event abuse, GITHUB_TOKEN over-scoping, composite action supply chain compromise), Jenkins attack paths (Groovy sandbox escapes, script console remote code execution, Java remoting deserialization, credential store dumping, shared library injection), GitLab CI exploitation (YAML anchor injection, runner registration token abuse, CI variable extraction, protected branch bypass via merge request pipelines), and Azure DevOps pipeline agent compromise with service connection theft. Includes artifact poisoning techniques across all platforms, tooling guidance for gato and jenkins-attack-framework, and maps to MITRE ATT&CK T1195.002 (Supply Chain Compromise: Compromise Software Supply Chain). Covers enumeration of pipeline configurations, privilege escalation from contributor to code execution, lateral movement through pipeline trust boundaries, and persistence via modified workflow definitions. Each technique section provides working exploitation code, detection indicators, and defensive countermeasures."

**Location:** .opencode\claude-red--cicd--offensive-cicd-pipeline\SKILL.md

### [claude-red--cicd--offensive-cicd-secrets]
**Description:** "Comprehensive secrets extraction methodology targeting CI/CD environments across all major platforms. Covers environment variable extraction from build contexts, exploitation of vault and secrets-manager misconfigurations (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager), runner and agent token abuse for lateral movement, OIDC federation attacks exploiting trust relationships between CI/CD providers and cloud platforms, build log leakage analysis for inadvertently exposed credentials, cache poisoning techniques for credential exfiltration, platform-specific credential store exploitation (GitHub Actions secrets, GitLab CI variables, Jenkins credential providers), service connection and service account abuse in Azure DevOps and GCP, and Docker registry credential theft from build environments. Maps to MITRE ATT&CK T1552 (Unsecured Credentials) and its sub-techniques. Each section provides enumeration procedures, extraction techniques, and post-exploitation pivoting guidance for using recovered secrets to expand access."

**Location:** .opencode\claude-red--cicd--offensive-cicd-secrets\SKILL.md

### [claude-red--cloud--offensive-cloud]
**Description:** "Cloud security attack methodology covering AWS, Azure, and GCP. Includes credential harvesting (IMDS, ~/.aws, env vars, leaked CI secrets, instance roles), enumeration with cloud-specific tools (pacu, ScoutSuite, Prowler, ROADtools, gcp_enum), privilege escalation paths (IAM PassRole, AssumeRole chains, Lambda/Functions privilege flips, Azure Owner-on-self, GCP serviceAccountTokenCreator), persistence techniques (IAM user/key creation, AAD app registration, GCP svc account key creation, EventBridge/Logic Apps backdoors), data exfiltration (S3/Blob/GCS, snapshot share, RDS/CosmosDB/Cloud SQL exfil), cloud-native lateral movement (cross-account assume, Azure AD multi-tenant, GCP project hierarchy), serverless attacks (Lambda env vars, layer hijack, Step Functions), Kubernetes-on-cloud (EKS/AKS/GKE-specific paths to node and AWS metadata), and CSPM evasion (CloudTrail blind spots, GuardDuty mute, Sentinel rule shaping). Use when the engagement scope is cloud accounts, when you've stolen cloud credentials, or when assessing cloud posture."

**Location:** .opencode\claude-red--cloud--offensive-cloud\SKILL.md

### [claude-red--container--offensive-container-escape]
**Description:** "Container escape and breakout techniques targeting Docker, containerd, and Podman runtimes. Covers privileged container breakout via host filesystem mount and nsenter, Docker socket abuse through /var/run/docker.sock, Linux capability exploitation including CAP_SYS_ADMIN, CAP_SYS_PTRACE, and CAP_NET_ADMIN, cgroup v1 notify_on_release escape, runc CVEs such as CVE-2019-5736 and CVE-2024-21626 Leaky Vessels, kernel exploits from within containers, and Dockerfile misconfigurations like --privileged and host namespace sharing. Includes enumeration with capsh, amicontained, deepce, CDK, and nsenter. Maps to MITRE ATT&CK T1611 Escape to Host. Use this skill when the engagement scope includes container breakout, Docker escape, container privilege escalation, host access from container, or when you land inside a containerized environment and need to reach the underlying host."

**Location:** .opencode\claude-red--container--offensive-container-escape\SKILL.md

### [claude-red--container--offensive-k8s-attacks]
**Description:** "Kubernetes cluster attack techniques covering the full attack lifecycle from initial foothold in a pod to cluster-wide compromise. Covers service account token theft and impersonation, RBAC misconfiguration exploitation including wildcard permissions and privilege escalation via role binding, direct etcd access for secret extraction, kubelet API abuse on port 10250 and read-only port 10255, pod escape via hostPID hostNetwork and hostPath volume mounts, Kubernetes secrets enumeration and decoding, admission controller bypass techniques, network policy bypass and lateral movement, cloud metadata service access from pods for credential theft on AWS EKS GCP GKE and Azure AKS, CRD and operator abuse for persistence, and node compromise via DaemonSet deployment. Tools include kubectl, kube-hunter, peirates, kubeaudit, kdigger, kubeletctl. Maps to MITRE ATT&CK T1609 Container Administration Command, T1610 Deploy Container, T1613 Container and Resource Discovery. Use this skill when assessing Kubernetes clusters, attacking from within a compromised pod, exploiting RBAC or kubelet misconfigurations, or performing cloud-native lateral movement."

**Location:** .opencode\claude-red--container--offensive-k8s-attacks\SKILL.md

### [claude-red--crypto--offensive-crypto-attacks]
**Description:** "Systematic methodology for identifying and exploiting cryptographic implementation weaknesses in real-world applications. Covers padding oracle attacks against CBC-mode ciphers with PKCS7 padding (Vaudenay's original attack through modern padbuster automation), ECB mode exploitation including block cut-and-paste and byte-at-a-time decryption, hash length extension attacks against SHA1/SHA256/MD5-based MACs using HashPump, RSA vulnerabilities including small public exponent, common modulus, Bleichenbacher PKCS1v1.5 padding oracle, and Coppersmith's method for partial key recovery. Addresses weak PRNG exploitation targeting time-seeded generators and Mersenne Twister MT19937 state recovery from observed outputs, timing side-channel attacks against comparison operations, nonce reuse in AES-GCM leading to authentication key recovery, and key derivation weaknesses including insufficient iteration counts and missing salts. Primary tooling includes padbuster, RsaCtfTool, hashpump, and PyCryptodome for building custom exploit payloads. Maps to CWE-327 (Use of a Broken or Risky Cryptographic Algorithm), CWE-328 (Use of Weak Hash), and CWE-330 (Use of Insufficiently Random Values). Emphasizes black-box identification of vulnerable implementations before transitioning to targeted exploitation."

**Location:** .opencode\claude-red--crypto--offensive-crypto-attacks\SKILL.md

### [claude-red--crypto--offensive-tls-attacks]
**Description:** "Comprehensive methodology for auditing and exploiting TLS/SSL implementations and misconfigurations across network services and mobile applications. Covers protocol downgrade attacks including POODLE (CVE-2014-3566) against SSLv3 CBC padding, DROWN (CVE-2016-0800) cross-protocol attack leveraging SSLv2 export ciphers to decrypt TLS sessions, and FREAK (CVE-2015-0204) forcing RSA export-grade key exchange. Addresses BEAST (CVE-2011-3389) exploiting CBC IV predictability in TLS 1.0, CRIME (CVE-2012-4929) and BREACH targeting TLS-level and HTTP-level compression oracles respectively, and Heartbleed (CVE-2014-0160) for OpenSSL memory disclosure. Covers certificate validation bypass techniques for applications with improper hostname verification or chain validation, certificate pinning bypass using Frida and Objection for mobile application interception, HSTS bypass via NTP manipulation and subdomain exploitation, TLS 1.3 0-RTT replay attacks against non-idempotent endpoints, mutual TLS (mTLS) authentication attacks including client certificate theft and relay, and Certificate Transparency log monitoring for reconnaissance. Primary tooling includes testssl.sh for comprehensive TLS auditing, sslyze for Python-integrated scanning, sslscan for quick cipher enumeration, and tlsx for high-speed TLS probing at scale. Maps to CWE-295 (Improper Certificate Validation), CWE-319 (Cleartext Transmission of Sensitive Information), and CWE-757 (Selection of Less-Secure Algorithm During Negotiation)."

**Location:** .opencode\claude-red--crypto--offensive-tls-attacks\SKILL.md

### [claude-red--exploit-dev--offensive-basic-exploitation]
**Description:** 'Week 5 exploit development curriculum. Foundational exploitation techniques: controlling EIP/RIP, ROP chain construction, ret2libc, shellcode injection, heap spraying, bypass techniques for ASLR/NX/stack canaries. Use when building initial PoCs or understanding classic exploitation primitives.'

**Location:** .opencode\claude-red--exploit-dev--offensive-basic-exploitation\SKILL.md

### [claude-red--exploit-dev--offensive-crash-analysis]
**Description:** 'Week 4 exploit development curriculum. Crash triage and analysis methodology: WinDbg/GDB analysis, ASAN/MSAN output interpretation, exploitability assessment, register/stack trace reading, root cause identification. Use when analyzing crash dumps, assessing exploitability, or understanding fuzzer-generated crashes.'

**Location:** .opencode\claude-red--exploit-dev--offensive-crash-analysis\SKILL.md

### [claude-red--exploit-dev--offensive-exploit-dev-course]
**Description:** 'Full exploit development course roadmap and syllabus: weekly topics, recommended reading, lab setup, and learning path from vulnerability classes through advanced exploitation. Use to structure exploit dev training or onboard new researchers.'

**Location:** .opencode\claude-red--exploit-dev--offensive-exploit-dev-course\SKILL.md

### [claude-red--exploit-dev--offensive-exploit-development]
**Description:** 'Exploit development operational guide: environment setup, debugging workflow, PoC development lifecycle, writing reliable exploits, using pwntools/pwndbg, heap exploitation techniques, and weaponization considerations. Use when actively developing exploits or setting up an exploit dev environment.'

**Location:** .opencode\claude-red--exploit-dev--offensive-exploit-development\SKILL.md

### [claude-red--exploit-dev--offensive-mitigations]
**Description:** 'Security mitigation reference and bypass catalog: ASLR, DEP/NX, RELRO, stack canaries, CFI, sandboxing, seccomp. Covers both detection of enabled mitigations and known bypass techniques. Use when assessing target hardening or planning exploit mitigation bypasses.'

**Location:** .opencode\claude-red--exploit-dev--offensive-mitigations\SKILL.md

### [claude-red--exploit-dev--offensive-toctou]
**Description:** "Time-of-Check / Time-of-Use (TOCTOU) race condition exploitation methodology across binary, kernel, filesystem, web, and container layers. Covers symbolic-link races (open/access/stat split), file-descriptor races, fopen/realpath traversal races, /proc and procfs races, FUSE-backed slow-fs races to widen the window, ptrace and signal races, kernel double-fetch / userspace pointer races, container/runc/symlink escape primitives, kubernetes admission/authz TOCTOU, web auth-vs-authz TOCTOU, JWT-claim TOCTOU at gateway vs service, payment/idempotency races, and modern race-amplification techniques (single-packet attack, slow loris, FUSE pause, cgroup freeze, scheduler shaping). Use when you've identified a 'check then act' pattern in code, when fuzzing for race conditions, or when exploiting concurrency bugs in privileged binaries / kernel / orchestrators."

**Location:** .opencode\claude-red--exploit-dev--offensive-toctou\SKILL.md

### [claude-red--forensics--offensive-anti-forensics]
**Description:** "Anti-forensics and evidence destruction techniques for red team operators conducting authorized engagements. Covers log clearing on Windows (wevtutil, Clear-EventLog, ETW provider patching) and Linux (journal truncation, utmp/wtmp binary editing, syslog manipulation), timestamp manipulation via Timestomp and SetMACE to defeat timeline analysis, filesystem-level anti-forensics including NTFS Alternate Data Streams for payload hiding and secure deletion with sdelete/shred, memory artifact removal to counter live forensics, disk artifact manipulation targeting MFT entries and USN journal records, network forensics evasion through encrypted C2 channels and DNS-over-HTTPS tunneling, and anti-VM/sandbox detection to avoid dynamic analysis environments. Tools: Timestomp, wevtutil, sdelete, shred, MimiPenguin, Invoke-Phant0m. Aligns to MITRE ATT&CK T1070 (Indicator Removal), T1027 (Obfuscated Files or Information), T1497 (Virtualization/Sandbox Evasion). Each technique includes the forensic artifact it targets, the destruction or manipulation method, and the defender perspective so operators understand detection gaps they must account for."

**Location:** .opencode\claude-red--forensics--offensive-anti-forensics\SKILL.md

### [claude-red--forensics--offensive-c2-frameworks]
**Description:** "Command and Control framework deployment, configuration, and operational tradecraft for red team engagements. Covers Cobalt Strike (malleable C2 profiles, Beacon types HTTP/HTTPS/DNS/SMB, Beacon Object Files for in-memory execution, sleep and jitter tuning, named pipe pivoting), Sliver (implant generation across mTLS/WireGuard/DNS transport, operator multiplayer mode, armory extensions), Mythic (agent ecosystem with Apollo/Poseidon/Medusa, C2 profile configuration, translation containers), Havoc (Demon agent with sleep obfuscation via Ekko/Zilean, indirect syscalls, dotnet inline execution), Metasploit (msfvenom payload generation, multi/handler staging, Meterpreter post-exploitation modules), redirector architecture using Apache mod_rewrite and Nginx, domain fronting through CDN providers, DNS-based C2 for restrictive network egress, and TLS certificate management for infrastructure OPSEC. Tools: Cobalt Strike, Sliver, Mythic, Havoc, Metasploit Framework. Aligns to MITRE ATT&CK T1071 (Application Layer Protocol), T1573 (Encrypted Channel), T1090 (Proxy/Connection Proxy)."

**Location:** .opencode\claude-red--forensics--offensive-c2-frameworks\SKILL.md

### [claude-red--fuzzing--offensive-bug-identification]
**Description:** 'Systematic bug identification methodology: source code review patterns, black-box testing strategies, taint analysis, dangerous function hunting, data flow tracing, and automated scanning setup. Use for code audits, bug bounty triage, or building vulnerability identification pipelines.'

**Location:** .opencode\claude-red--fuzzing--offensive-bug-identification\SKILL.md

### [claude-red--fuzzing--offensive-fuzzing]
**Description:** "Practical offensive fuzzing methodology covering target identification, fuzzer selection (AFL++, libFuzzer, Honggfuzz, Boofuzz, syzkaller), harness writing, corpus curation, mutation strategies, coverage measurement, and crash triage. Use when setting up or running fuzz campaigns against any target: file parsers, network protocols, kernel drivers, EDR engines, embedded firmware, or language runtimes."

**Location:** .opencode\claude-red--fuzzing--offensive-fuzzing\SKILL.md

### [claude-red--fuzzing--offensive-fuzzing-course]
**Description:** 'Week 2 of the exploit development curriculum. Covers fuzzing methodology: target selection, corpus generation, coverage-guided fuzzing with AFL++/libFuzzer, structured fuzzing, and triage/deduplication. Use when setting up fuzz campaigns, selecting harness strategies, or triaging fuzzer output.'

**Location:** .opencode\claude-red--fuzzing--offensive-fuzzing-course\SKILL.md

### [claude-red--fuzzing--offensive-vuln-classes]
**Description:** 'Exploit development curriculum covering core vulnerability classes with real-world CVE case studies: stack/heap buffer overflows, use-after-free, integer overflows, format strings, type confusion, and race conditions. Use when learning or teaching vuln classes, researching specific CVE patterns, or building exploit dev knowledge.'

**Location:** .opencode\claude-red--fuzzing--offensive-vuln-classes\SKILL.md

### [claude-red--infrastructure--offensive-advanced-redteam]
**Description:** "Comprehensive red team operations methodology covering full engagement lifecycle from planning through reporting. Addresses engagement scoping and rules of engagement negotiation, multi-tier C2 infrastructure design with redirectors and domain fronting, malleable traffic profiles and beacon tradecraft, OPSEC discipline including attribution avoidance and indicator management, EDR and AMSI evasion techniques using direct syscalls and unhooking, data collection with chain-of-custody controls, and structured reporting with purple team debrief workflows. Covers assumed-breach, external-to-internal, insider threat, and hybrid physical-cyber engagement scenarios with MITRE ATT&CK mapping throughout. Targets operators planning or executing adversary simulation engagements against mature defenders."

**Location:** .opencode\claude-red--infrastructure--offensive-advanced-redteam\SKILL.md

### [claude-red--infrastructure--offensive-edr-evasion]
**Description:** 'EDR evasion offensive checklist: hook unhooking (user/kernel), direct syscalls, PPID spoofing, process injection variants, AMSI bypass, ETW patching, memory encryption, and behavior-based evasion. Use when planning EDR bypass during red team engagements or researching AV/EDR evasion techniques.'

**Location:** .opencode\claude-red--infrastructure--offensive-edr-evasion\SKILL.md

### [claude-red--infrastructure--offensive-initial-access]
**Description:** 'Initial access techniques checklist: phishing (spear/smishing), credential stuffing, exposed service exploitation, supply chain attacks, watering hole, VPN/RDP brute force, public-facing application exploitation. Maps to MITRE ATT&CK TA0001. Use when planning initial access phases of red team engagements.'

**Location:** .opencode\claude-red--infrastructure--offensive-initial-access\SKILL.md

### [claude-red--infrastructure--offensive-keylogger-arch]
**Description:** 'Low-level keylogger architecture design: kernel driver hooks (WH_KEYBOARD_LL, SetWindowsHookEx), ETW-based input capture, user-mode vs kernel-mode approaches, stealth techniques, and data exfiltration. Use for understanding input capture mechanisms, EDR evasion research, or malware architecture analysis.'

**Location:** .opencode\claude-red--infrastructure--offensive-keylogger-arch\SKILL.md

### [claude-red--infrastructure--offensive-shellcode]
**Description:** "Shellcode development reference for offensive security engagements. Use when writing custom x86/x64 shellcode, implementing position-independent code (PIC), building shellcode loaders, evading AV/EDR detection, or converting PE files to shellcode. Covers null byte avoidance, API hashing, encoder/decoder patterns, staged vs stageless payloads, Windows PEB traversal, and cross-platform shellcode techniques."

**Location:** .opencode\claude-red--infrastructure--offensive-shellcode\SKILL.md

### [claude-red--infrastructure--offensive-windows-boundaries]
**Description:** 'Windows security boundary taxonomy and attack surface enumeration: kernel/user boundary, sandbox boundaries (LPAC, AppContainer), COM/RPC boundaries, hypervisor boundary, trust level transitions. Use when planning privilege escalation paths, sandbox escapes, or understanding Windows security architecture.'

**Location:** .opencode\claude-red--infrastructure--offensive-windows-boundaries\SKILL.md

### [claude-red--infrastructure--offensive-windows-mitigations]
**Description:** 'Deep-dive on Windows exploit mitigations: ASLR, DEP/NX, CFG, CET/Shadow Stack, SEHOP, Heap Guard, ACG, Arbitrary Code Guard. Covers both the protection mechanism and known bypass techniques. Use when researching Windows exploit mitigations, planning bypass strategies, or understanding protection depth.'

**Location:** .opencode\claude-red--infrastructure--offensive-windows-mitigations\SKILL.md

### [claude-red--iot--offensive-iot]
**Description:** "IoT and embedded device security testing methodology. Covers hardware reconnaissance (UART, JTAG, SWD, SPI flash, I2C EEPROM, eMMC chip-off), firmware acquisition (vendor portals, OTA capture, flash dump, binwalk extraction), firmware analysis (filesystem mounting, binary triage, hardcoded secrets, default credential discovery), bootloader attacks (U-Boot console, secure-boot bypass, fault injection), runtime attacks on embedded Linux/RTOS (busybox CVEs, MTD writes, /dev/mem), wireless protocol attacks (Zigbee, BLE, Z-Wave, LoRaWAN, Thread/Matter, sub-GHz), MQTT/CoAP/Modbus/BACnet/OPC-UA exploitation, mobile companion app analysis, cloud-IoT API abuse, and side-channel/glitching basics. Use for IoT pentest, smart-home assessment, ICS/OT testing, or embedded vulnerability research."

**Location:** .opencode\claude-red--iot--offensive-iot\SKILL.md

### [claude-red--mobile--offensive-mobile]
**Description:** "Mobile (Android + iOS) application penetration testing methodology. Covers static analysis (apktool/jadx for Android, class-dump/Hopper/IDA for iOS), dynamic instrumentation with Frida and Objection, SSL pinning bypass strategies, root/jailbreak detection bypass, deep-link / URL-scheme abuse, exported component attacks (Android activities, services, providers, receivers; iOS XPC, URL schemes, universal links), insecure data storage (SharedPrefs, KeyStore misuse, NSUserDefaults, Keychain ACL bypass), IPC / Intent redirection, WebView vulnerabilities (JavaScriptInterface, file:// access), Firebase/AWS/Azure misconfiguration leakage, mobile API testing, biometric/Face ID/Touch ID bypass, app-cloning and runtime patching, and mobile malware/RAT analysis primitives. Use for mobile pentest, bug bounty mobile triage, or app-store reconnaissance."

**Location:** .opencode\claude-red--mobile--offensive-mobile\SKILL.md

### [claude-red--network--offensive-network-attacks]
**Description:** "Dense description covering ARP spoofing, LLMNR/NBT-NS/mDNS poisoning, DNS poisoning, MITM attacks, VLAN hopping, DHCP attacks, 802.1X/NAC bypass, IPv6 attacks. Tools: Bettercap, Responder, mitm6, Ettercap, Wireshark. MITRE T1557, T1040. Use when conducting internal network assessments or testing Layer 2/3 attack surface."

**Location:** .opencode\claude-red--network--offensive-network-attacks\SKILL.md

### [claude-red--post-exploitation--offensive-data-exfiltration]
**Description:** "Dense methodology covering DNS exfiltration (dnscat2, iodine, dns2tcp), HTTPS tunneling (domain fronting, CDN abuse, legitimate service channels), ICMP tunneling (icmpsh, ptunnel-ng), cloud storage dead drops (S3 presigned URLs, Azure Blob SAS tokens, GCS signed URLs), email-based exfil (SMTP, EWS, draft method), steganography (image, audio, document metadata), encoding/encryption (base64 chunking, XOR, AES), covert channels (custom protocol tunneling, HTTP header encoding, timing channels), and data staging (compression, splitting, encryption). Tools: dnscat2, iodine, dns2tcp, PacketWhisper, chisel, stunnel, icmpsh, ptunnel-ng, steghide, zsteg, OpenStego. MITRE ATT&CK: T1048 (Exfiltration Over Alternative Protocol), T1041 (Exfiltration Over C2 Channel), T1567 (Exfiltration Over Web Service), T1029 (Scheduled Transfer), T1030 (Data Transfer Size Limits), T1132 (Data Encoding), T1001 (Data Obfuscation). Use when planning or executing data exfiltration during authorized red team engagements or post-exploitation."

**Location:** .opencode\claude-red--post-exploitation--offensive-data-exfiltration\SKILL.md

### [claude-red--post-exploitation--offensive-lateral-movement]
**Description:** "Comprehensive lateral movement tradecraft for authorized red team engagements covering credential-based movement (pass-the-hash, pass-the-ticket, overpass-the-hash), NTLM relay attacks (ntlmrelayx with PetitPotam, DFSCoerce, PrinterBug coercion), remote execution protocols (WMI, WinRM, DCOM, PsExec and alternatives), RDP session hijacking, and network pivoting through tunneling tools (chisel, ligolo-ng, SSH tunnels, SOCKS proxies). Provides operator-ready command sequences for mimikatz, crackmapexec/netexec, impacket suite, and evil-winrm with emphasis on OPSEC considerations, SMB signing bypass, and detection evasion. Maps to MITRE ATT&CK T1021 (Remote Services), T1550 (Use Alternate Authentication Material), and sub-techniques. Includes defender-perspective detection guidance for blue team awareness and a rapid engagement cheatsheet for common lateral movement scenarios encountered during internal penetration tests and assumed-breach exercises."

**Location:** .opencode\claude-red--post-exploitation--offensive-lateral-movement\SKILL.md

### [claude-red--post-exploitation--offensive-persistence]
**Description:** "Comprehensive persistence tradecraft for authorized red team engagements covering Windows and Linux mechanisms. Windows techniques include registry Run/RunOnce keys, scheduled tasks, WMI event subscriptions, DLL search order hijacking, COM object hijacking, Startup folder drops, service creation, Security Support Provider (SSP) DLL injection, and Active Directory persistence (AdminSDHolder abuse, DCShadow, Golden Ticket, Silver Ticket, Skeleton Key, SID History injection). Linux techniques include cron and at jobs, systemd timers and services, SSH authorized_keys injection, shell profile backdoors (.bashrc/.bash_profile), PAM module backdoors, LD_PRELOAD hijacking, kernel module rootkits, web shells, and Git hook abuse. Provides operator-ready command sequences for SharPersist, Impacket ticketer, schtasks, sc.exe, crontab, and systemctl with OPSEC considerations for each method. Maps to MITRE ATT&CK T1547 (Boot or Logon Autostart), T1053 (Scheduled Task/Job), T1546 (Event Triggered Execution), T1556 (Modify Authentication Process), and sub-techniques. Includes detection indicators and a rapid engagement cheatsheet."

**Location:** .opencode\claude-red--post-exploitation--offensive-persistence\SKILL.md

### [claude-red--privesc--offensive-linux-privesc]
**Description:** "Comprehensive Linux privilege escalation methodology for offensive security engagements. Covers the full attack surface from a low-privilege shell to root: SUID/SGID binary abuse via GTFOBins, Linux capabilities exploitation (cap_setuid, cap_dac_override, cap_dac_read_search), sudo misconfigurations including NOPASSWD rules and Baron Samedit (CVE-2021-3156), cron job abuse through writable scripts, PATH hijacking, and wildcard injection with tar/rsync/chown. Includes writable /etc/passwd attacks, NFS no_root_squash exploitation, kernel exploits (DirtyPipe CVE-2022-0847, DirtyCow CVE-2016-5195, PwnKit CVE-2021-4034), Docker group container escapes, LD_PRELOAD and LD_LIBRARY_PATH hijacking for shared library injection, systemd service misconfigurations, and sensitive file enumeration for credential harvesting. Integrates automated enumeration with LinPEAS, linux-exploit-suggester, pspy for process monitoring, and GTFOBins for binary exploitation. Each technique includes detection signatures and defender-side visibility to support purple team operations. Maps to MITRE ATT&CK T1548 (Abuse Elevation Control Mechanism) and related sub-techniques. Designed for authorized penetration testing, red team engagements, and CTF competitions where you hold a low-privilege shell and need to escalate to root."

**Location:** .opencode\claude-red--privesc--offensive-linux-privesc\SKILL.md

### [claude-red--privesc--offensive-windows-privesc]
**Description:** "Comprehensive Windows privilege escalation methodology for offensive security engagements. Covers the full attack surface from a standard user shell to NT AUTHORITY\\SYSTEM: token impersonation via SeImpersonate and SeAssignPrimaryToken privileges using JuicyPotato, PrintSpoofer, GodPotato, SweetPotato, and RoguePotato; service misconfigurations including unquoted service paths, weak service DACLs, writable service binaries, and insecure service creation permissions; AlwaysInstallElevated MSI exploitation; DLL hijacking through search order abuse, phantom DLL loading, and writable PATH directory injection; UAC bypass techniques via fodhelper.exe, eventvwr.exe, CMSTP, and environment variable manipulation; scheduled task abuse for writable task actions and new task creation; registry autorun exploitation for persistence and escalation; PrintNightmare (CVE-2021-34527) for remote and local privilege escalation; and credential harvesting from SAM database extraction, DPAPI blob decryption, LSA secret dumping, and Credential Manager enumeration. Integrates automated enumeration with WinPEAS, PowerUp, SharpUp, Seatbelt, and BeRoot. Each technique includes detection signatures and defender-side visibility for purple team operations. Maps to MITRE ATT&CK T1548 (Abuse Elevation Control Mechanism) and T1574 (Hijack Execution Flow). Designed for authorized penetration testing, red team engagements, and CTF competitions where you hold a standard user shell and need to escalate to SYSTEM or local Administrator."

**Location:** .opencode\claude-red--privesc--offensive-windows-privesc\SKILL.md

### [claude-red--recon--offensive-osint]
**Description:** "Comprehensive OSINT methodology skill for offensive security, red team intelligence gathering, and bug bounty reconnaissance. Covers domain recon, email harvesting, social media profiling, GitHub/code leaks, Shodan/Censys enumeration, breach data lookup, employee profiling, infrastructure mapping, cryptocurrency tracing, geospatial intelligence, and AI-assisted analysis workflows. Use when performing reconnaissance against a target domain or organization, investigating a person or entity, tracing cryptocurrency flows, geolocating images or events, or building an attack-surface map."

**Location:** .opencode\claude-red--recon--offensive-osint\SKILL.md

### [claude-red--recon--offensive-osint-methodology]
**Description:** 'Structured OSINT methodology framework: target definition, source selection, collection workflows, data correlation, timeline reconstruction, and reporting. Use to guide systematic OSINT campaigns or teach OSINT methodology.'

**Location:** .opencode\claude-red--recon--offensive-osint-methodology\SKILL.md

### [claude-red--social-engineering--offensive-phishing]
**Description:** "Phishing campaign execution methodology for authorized red team engagements. Covers end-to-end campaign lifecycle: infrastructure provisioning (GoPhish, SMTP relay configuration, domain acquisition and aging, SPF/DKIM/DMARC alignment), payload delivery vectors (Office macro weaponization, HTA droppers, ISO/IMG container abuse, LNK shortcut hijacking, OneNote embedded payloads, HTML smuggling), email authentication bypass techniques (SPF softfail exploitation, DKIM replay attacks, display name spoofing, homoglyph and cousin domain registration), credential harvesting with MFA bypass (EvilGinx2 transparent proxy, Modlishka session relay, pixel-perfect HTML cloning), spear phishing pretext development informed by OSINT, email security gateway evasion, QR code phishing (quishing), and callback phishing for initial access. Integrates with GoPhish for campaign management, EvilGinx2 for adversary-in-the-middle credential interception, King Phisher for template design, and the Social Engineering Toolkit for payload generation. Maps to MITRE ATT&CK T1566 (Phishing) and sub-techniques T1566.001 (Spearphishing Attachment), T1566.002 (Spearphishing Link), T1566.003 (Spearphishing via Service). Assumes you have written authorization and a defined scope before any campaign execution."

**Location:** .opencode\claude-red--social-engineering--offensive-phishing\SKILL.md

### [claude-red--social-engineering--offensive-social-engineering]
**Description:** "Social engineering attack techniques beyond email phishing for authorized red team and physical penetration testing engagements. Covers pretexting methodology (persona creation, authority and urgency psychological triggers, rapport building), vishing (voice phishing via caller ID spoofing, IVR system exploitation, VoIP infrastructure setup with Twilio/Asterisk), smishing (SMS-based phishing, carrier gateway abuse, short code impersonation), physical social engineering (tailgating and piggybacking, RFID badge cloning with Proxmark3, lock picking and bypass, dumpster diving for sensitive documents), USB drop attacks (Rubber Ducky keystroke injection, Bash Bunny multi-vector payloads, O.MG cable covert implants, BadUSB firmware attacks), watering hole attack planning and execution, and OSINT-driven targeting (LinkedIn harvesting, organizational chart reconstruction, employee pattern analysis). Integrates with the Social Engineering Toolkit for attack automation, Proxmark3 for RFID/NFC cloning, USB Rubber Ducky and Bash Bunny for physical payload delivery, and BeEF for browser exploitation. Maps to MITRE ATT&CK T1598 (Phishing for Information), T1566 (Phishing), T1091 (Replication Through Removable Media), and T1189 (Drive-by Compromise). All techniques require explicit written authorization and defined rules of engagement."

**Location:** .opencode\claude-red--social-engineering--offensive-social-engineering\SKILL.md

### [claude-red--supply-chain--offensive-dependency-confusion]
**Description:** "Deep-dive offensive methodology for dependency confusion and namespace attacks across all major package ecosystems. Covers npm scope confusion exploiting the gap between public and private scoped packages and .npmrc misconfigurations where registry mappings fail to pin internal scopes exclusively. Addresses PyPI namespace attacks through --extra-index-url resolution ordering, NuGet feed priority exploitation when multiple package sources are configured without clear directives, Maven and Gradle repository ordering where artifact resolution traverses repositories sequentially, Go module proxy abuse through GOPROXY misconfiguration, Ruby gems namespace squatting, and Docker image tag confusion with unqualified image references. Provides complete proof-of-concept methodology using safe callbacks including DNS canary via interactsh or Burp Collaborator and HTTP beacon with no destructive payload. Covers reconnaissance techniques for discovering internal package names through GitHub repository analysis, error message harvesting, JavaScript source map extraction, lock file parsing, job postings mentioning internal tools, and package manifest inspection. Directly references and builds upon Alex Birsan's seminal 2021 dependency confusion research. Each ecosystem section includes registry-specific exploitation mechanics, configuration vulnerabilities, and defensive countermeasures for engagement reporting."

**Location:** .opencode\claude-red--supply-chain--offensive-dependency-confusion\SKILL.md

### [claude-red--supply-chain--offensive-supply-chain]
**Description:** "Comprehensive offensive methodology for software supply chain attacks covering the full kill chain from reconnaissance through exploitation. Addresses dependency confusion across npm, PyPI, and NuGet ecosystems where internal registry override allows an attacker to inject malicious packages that shadow private dependencies. Covers typosquatting techniques for popular packages, compromised package injection via maintainer account takeover or social engineering, and build system attacks through Makefile injection, setup.py install hooks, and npm postinstall scripts. Extends into CI/CD artifact tampering where build outputs are replaced or modified in transit, code signing abuse through stolen or self-signed certificates, upstream repository compromise via commit injection or force-push to trusted repos, and container image supply chain attacks including base image trojaning and registry confusion. Maps to MITRE ATT&CK T1195.001 (Supply Chain Compromise: Compromise Software Dependencies and Development Tools) and T1195.002 (Supply Chain Compromise: Compromise Software Supply Chain). Integrates tooling such as confused for dependency confusion scanning and dependency-check for known vulnerable component detection. Each technique section provides reproducible proof-of-concept patterns, detection guidance for defenders, and engagement-safe execution notes for authorized red team operations."

**Location:** .opencode\claude-red--supply-chain--offensive-supply-chain\SKILL.md

### [claude-red--utility--offensive-fast-checking]
**Description:** 'Speed-optimized offensive checklist for rapid assessment: quick-win vulnerability patterns, fast recon shortcuts, automated scanner configurations, and triage shortcuts. Use for time-boxed assessments, CTF-speed engagements, or initial rapid surface mapping.'

**Location:** .opencode\claude-red--utility--offensive-fast-checking\SKILL.md

### [claude-red--utility--offensive-reporting]
**Description:** "Penetration test and red team report writing methodology. Covers executive summary structuring (risk-led narrative for non-technical readers), technical finding format (title, severity, affected scope, narrative, reproduction steps, impact, remediation, references), CVSS v3.1 / v4.0 scoring with vector justification, OWASP risk rating, evidence hygiene (redacting credentials, hashing client data, time-stamping every action), screenshot and PoC artifact management, finding chain narratives, scope/limitations/assumptions documentation, retest evidence and remediation tracking, deliverable formats (PDF, DOCX, HTML, JSON for SIEM ingestion), client-customer-deliverable separation, and common report mistakes (over-CVSSing, undermining the triager, missing the 'so what'). Use at the end of an engagement when authoring a deliverable, when restructuring a draft for executive readability, or when establishing a reusable report template for a consulting practice."

**Location:** .opencode\claude-red--utility--offensive-reporting\SKILL.md

### [claude-red--web--offensive-business-logic]
**Description:** "Business logic vulnerability testing for web/mobile/API engagements. Covers workflow bypass, state machine violations, multi-step process abuse, price/quantity/discount manipulation, currency confusion, coupon stacking, refund/chargeback abuse, race conditions on logic boundaries, parameter tampering for hidden flows, role/tenant boundary violations, time-of-check vs use, anti-automation defeat, fraud-detection evasion, and subscription/quota abuse. Use when scoping an application after surface-level OWASP Top 10 has been covered, or when the asset is a transactional/marketplace/fintech/e-commerce/SaaS app where logic flaws produce direct financial impact."

**Location:** .opencode\claude-red--web--offensive-business-logic\SKILL.md

### [claude-red--web--offensive-deserialization]
**Description:** "Insecure deserialization exploitation across Java, PHP, .NET, Python, Node.js, and Ruby. Covers gadget chain construction with ysoserial/phpggc/ysoserial.net, ObjectInputStream and BinaryFormatter sink identification, pickle __reduce__ RCE, phar:// wrapper abuse, Jackson polymorphic typing, Json.NET TypeNameHandling, ViewState tampering, node-serialize IIFE injection, Ruby Marshal.load and YAML.load gadgets, framework-specific chains for Spring/Hibernate/Laravel/Symfony, modern attack surfaces including Kubernetes admission webhooks and message queue consumers, WAF bypass through encoding layers and content-type manipulation, and serialVersionUID/JMX/RMI vectors. Activate when the engagement involves deserialization sinks, serialized data in cookies or request bodies, gadget chain development, magic method abuse, ysoserial payload generation, or any review of marshalling and unmarshalling logic in target applications."

**Location:** .opencode\claude-red--web--offensive-deserialization\SKILL.md

### [claude-red--web--offensive-graphql]
**Description:** "Offensive methodology for attacking GraphQL APIs during penetration tests and bug bounty engagements. Covers the full attack lifecycle: endpoint discovery, introspection abuse and blind schema reconstruction when introspection is disabled, authentication and authorization bypass through Relay node IDs and nested object traversal, injection via variables and directives, query batching for brute force and OTP bypass, denial of service through depth bombs and alias amplification, WebSocket subscription hijacking, information disclosure through verbose errors and field suggestion oracles, and file upload abuse via the multipart GraphQL specification. Includes tool-specific guidance for InQL, graphql-cop, CrackQL, BatchQL, Altair, GraphQL Voyager, and clairvoyance. Trigger on: GraphQL, graphql, introspection query, batching attack, query depth, GraphQL injection, GraphQL IDOR, field suggestion, GraphQL auth bypass, GraphQL DoS, GraphQL security, graphql-cop, InQL, CrackQL, BatchQL, Relay node, alias amplification, subscription abuse, multipart upload GraphQL, schema enumeration, __schema, __type."

**Location:** .opencode\claude-red--web--offensive-graphql\SKILL.md

### [claude-red--web--offensive-idor]
**Description:** 'IDOR (Insecure Direct Object Reference) testing checklist: object ID enumeration, horizontal/vertical privilege escalation, GUID predictability, indirect references via hashes, chained IDOR, and API endpoint IDOR. Use for web app pentests and bug bounty IDOR discovery.'

**Location:** .opencode\claude-red--web--offensive-idor\SKILL.md

### [claude-red--web--offensive-open-redirect]
**Description:** 'Open redirect vulnerability checklist: parameter identification, bypass techniques (URL encoding, double slashes, CRLF injection, protocol handlers), chaining with OAuth/SSRF, and impact escalation paths. Use for web app testing and bug bounty open redirect discovery.'

**Location:** .opencode\claude-red--web--offensive-open-redirect\SKILL.md

### [claude-red--web--offensive-parameter-pollution]
**Description:** 'HTTP parameter pollution (HPP) checklist: duplicate parameter injection, backend vs frontend parsing differences, WAF bypass via HPP, server-side vs client-side HPP, and practical exploitation patterns. Use when testing web applications for parameter handling flaws.'

**Location:** .opencode\claude-red--web--offensive-parameter-pollution\SKILL.md

### [claude-red--web--offensive-race-condition]
**Description:** 'Race condition (TOCTOU) testing checklist: identifying timing windows, Burp Suite Turbo Intruder, Last-Byte sync technique, rate limit bypass, double-spend attacks, and concurrent request exploitation. Use for web app race condition testing or bug bounty time-of-check-to-time-of-use bugs.'

**Location:** .opencode\claude-red--web--offensive-race-condition\SKILL.md

### [claude-red--web--offensive-request-smuggling]
**Description:** 'HTTP request smuggling checklist: CL.TE, TE.CL, TE.TE variants, detection with timing and differential responses, WAF bypass, cache poisoning, credential hijacking, and request smuggling via HTTP/2. Use when testing reverse proxy/load balancer configurations.'

**Location:** .opencode\claude-red--web--offensive-request-smuggling\SKILL.md

### [claude-red--web--offensive-ssrf]
**Description:** 'Server-Side Request Forgery testing checklist: SSRF discovery, blind SSRF with out-of-band, cloud metadata endpoints (AWS/GCP/Azure), SSRF filter bypass techniques (IP encoding, DNS rebinding, redirect chains), and SSRF to RCE escalation. Use for web app SSRF testing and bug bounty.'

**Location:** .opencode\claude-red--web--offensive-ssrf\SKILL.md

### [claude-red--web--offensive-ssti]
**Description:** "Dense description covering Server-Side Template Injection across Jinja2, Twig, Freemarker, Velocity, Pebble, Smarty, Mako, Handlebars, ERB, Thymeleaf, EJS, Pug. Engine fingerprinting, filter bypass, blind exploitation, WAF evasion, SSTI-to-RCE chains. Tools: tplmap. CWE-1336. MITRE T1190. Use when testing template rendering endpoints or exploiting template injection for code execution."

**Location:** .opencode\claude-red--web--offensive-ssti\SKILL.md

### [claude-red--web--offensive-waf-bypass]
**Description:** 'WAF bypass techniques checklist: encoding bypass (URL/HTML/Unicode/double encoding), case variation, comment injection, HTTP header manipulation, chunked encoding, IP rotation, timing attacks, and payload obfuscation per WAF vendor. Use when WAF is blocking payloads during web app tests.'

**Location:** .opencode\claude-red--web--offensive-waf-bypass\SKILL.md

### [claude-red--web--offensive-xss]
**Description:** 'Cross-Site Scripting testing checklist: stored/reflected/DOM/blind XSS discovery, polyglot payloads, CSP bypass, XSS filter bypass, event handler injection, DOM clobbering, mutation XSS, and impact escalation (session hijack, phishing, keylogging). Use for web app XSS testing and bug bounty.'

**Location:** .opencode\claude-red--web--offensive-xss\SKILL.md

### [claude-red--web--offensive-xxe]
**Description:** 'XML External Entity injection testing checklist: classic XXE, blind XXE (out-of-band), XXE via file upload (SVG/docx), XXE in SOAP/REST, error-based XXE, XInclude attacks, and XXE filter bypass. Use for web app XXE testing and bug bounty.'

**Location:** .opencode\claude-red--web--offensive-xxe\SKILL.md

### [claude-red--wireless--offensive-bluetooth-ble]
**Description:** "Bluetooth Low Energy (BLE) attack methodology — GATT enumeration, characteristic read/write without auth, pairing downgrade (Just Works forced), LE Secure Connections bypass, MITM via active relay, sniffing with Sniffle (TI CC1352) / Ubertooth / Frontline, encryption key extraction (LE Legacy Pairing crackable, LE Secure Connections strong), proximity authentication abuse (cars, locks), and companion-app trust analysis. Use for IoT BLE devices, smart locks, fitness trackers, medical devices, BLE beacons, or any device pairing over BLE."

**Location:** .opencode\claude-red--wireless--offensive-bluetooth-ble\SKILL.md

### [claude-red--wireless--offensive-bluetooth-classic]
**Description:** "Bluetooth Classic (BR/EDR) attack methodology — device discovery, service enumeration via SDP, LMP/L2CAP layer attacks, legacy PIN cracking (BlueBorne / KNOB), Bluetooth file-transfer abuse (BlueSnarfing legacy), unauthenticated profile abuse (HSP, HFP, OPP), and modern relevance against older industrial / automotive / accessory targets. Use when in-scope devices use Bluetooth Classic (Bluetooth ≤ 4.0 BR/EDR) — common in legacy car kits, industrial sensors, older medical devices, and audio accessories."

**Location:** .opencode\claude-red--wireless--offensive-bluetooth-classic\SKILL.md

### [claude-red--wireless--offensive-deauth-disassoc]
**Description:** "Deauthentication and disassociation attacks against 802.11 networks — targeted single-client deauth for handshake capture, broadcast deauth for DoS (with authorization), action-frame attacks bypassing 802.11w (PMF), beacon flooding, mdk4 / aireplay-ng tooling, and rate-limit / PMF-aware operation. Use to coerce client reconnection (handshake capture, evil-twin roaming), as targeted DoS, or to test PMF posture."

**Location:** .opencode\claude-red--wireless--offensive-deauth-disassoc\SKILL.md

### [claude-red--wireless--offensive-evil-twin]
**Description:** "Evil Twin / KARMA / Mana access point methodology — rogue AP construction with hostapd-mana / wifiphisher / airgeddon, KARMA universal probe response, Mana selective probe response, captive portal phishing, deauth-driven client coercion to attacker AP, MAC randomization defeat via PNL leak analysis, post-association MITM (DNS, ARP, transparent proxy), credential capture for portal/web/SMB, and detection-evasion tactics. Use to coerce client devices onto an attacker-controlled AP, intercept their traffic, harvest credentials, or deliver payloads via captive portal."

**Location:** .opencode\claude-red--wireless--offensive-evil-twin\SKILL.md

### [claude-red--wireless--offensive-krack-fragattacks]
**Description:** "KRACK (CVE-2017-13077..082) and FragAttacks (CVE-2020-24586..588 + 26139-26147) — key reinstallation, fragmentation, and aggregation attacks against WPA2 supplicants. Covers Vanhoef's test scripts, viability against modern patched stacks (mostly mitigated post-2021), residual unpatched embedded devices and IoT vendors, and the practical limitations of these attacks in modern engagements. Use when assessing legacy supplicants, embedded clients, or vendors with poor patch cadence."

**Location:** .opencode\claude-red--wireless--offensive-krack-fragattacks\SKILL.md

### [claude-red--wireless--offensive-lorawan-sub-ghz]
**Description:** "LoRaWAN and sub-GHz (433 / 868 / 915 MHz) attack methodology — LoRaWAN ABP/OTAA join attack, network/session key reuse, frame counter replay, downlink injection on TTN/Helium-style networks, sub-GHz protocol replay (KeeLoq garage doors, fixed-code remotes, TPMS spoofing, smart plug telemetry), HackRF / RTL-SDR / Flipper Zero workflows, signal analysis with Inspectrum / Universal Radio Hacker, and reconstruction of proprietary packet formats. Use for LoRaWAN deployments (smart cities, asset tracking, industrial telemetry), or any wireless device using the unlicensed 433/868/915 MHz bands (garage openers, doorbells, IoT sensors, RC equipment)."

**Location:** .opencode\claude-red--wireless--offensive-lorawan-sub-ghz\SKILL.md

### [claude-red--wireless--offensive-wifi]
**Description:** "Wireless / 802.11 attack methodology for red team engagements and wireless security assessments. Covers monitor-mode setup, WPA/WPA2-PSK handshake capture and PMKID attacks, WPA3 SAE downgrade and Dragonblood, WPA-Enterprise (EAP) attacks (MSCHAPv2 cracking, EAP-TLS cert theft, evil-twin RADIUS), Karma / Known Beacons / Mana evil twin attacks, captive-portal phishing, KRACK and FragAttacks, WPS Pixie Dust, deauthentication and disassociation attacks, rogue AP construction (hostapd-mana), 802.1X bypass, MAC randomization defeat, BLE/Zigbee/IEEE 802.15.4 sidebands, and Wi-Fi 6/6E/7 considerations. Use when scoping wireless pentest, war-driving an estate, or testing corporate wireless segmentation."

**Location:** .opencode\claude-red--wireless--offensive-wifi\SKILL.md

### [claude-red--wireless--offensive-wifi-recon]
**Description:** "Wi-Fi reconnaissance methodology — adapter selection, monitor mode and packet injection setup, regulatory domain handling, multi-band airspace mapping, hidden SSID discovery, BSSID/ESSID/channel/PMF/encryption fingerprinting, client probe analysis, vendor OUI lookup, war-driving with Kismet/airodump-ng/Wigle, and structured airspace data capture for downstream attacks. Use at the start of any wireless engagement to build the target map before active attacks; covers 2.4 GHz, 5 GHz, and 6 GHz (Wi-Fi 6E) bands and adapter compatibility for each."

**Location:** .opencode\claude-red--wireless--offensive-wifi-recon\SKILL.md

### [claude-red--wireless--offensive-wpa-enterprise]
**Description:** "WPA/WPA2/WPA3-Enterprise (802.1X / EAP) attack methodology — EAP method identification (PEAP-MSCHAPv2, EAP-TTLS, EAP-TLS, EAP-GTC, EAP-PWD, EAP-FAST), evil-twin RADIUS attacks with eaphammer for credential capture, MSCHAPv2 challenge-response cracking, EAP-TLS client certificate theft paths (DPAPI, NDES, AD CS auto-enrollment), supplicant validation bypass (missing server cert validation, missing CN pinning, BYOD misconfigurations), and post-capture pivots into AD via cracked domain credentials. Use for corporate Wi-Fi engagements where the network is 802.1X authenticated."

**Location:** .opencode\claude-red--wireless--offensive-wpa-enterprise\SKILL.md

### [claude-red--wireless--offensive-wpa2-psk]
**Description:** "WPA/WPA2-PSK attack methodology — four-way handshake capture via targeted deauthentication, PMKID attacks (no client required), hcxdumptool / hcxpcapngtool conversion to hashcat hc22000 format, GPU-accelerated cracking with dictionary, mask, and rule-based attacks, vendor default-PSK generators (UPC, Sky, BT, etc.), 802.11r FT key cracking, opportunistic key cache analysis, and signal-level optimization. Use when the in-scope network is WPA/WPA2 Personal — the most common consumer/SMB encryption mode."

**Location:** .opencode\claude-red--wireless--offensive-wpa2-psk\SKILL.md

### [claude-red--wireless--offensive-wpa3-sae]
**Description:** "WPA3 / SAE (Simultaneous Authentication of Equals) attack methodology — transition-mode (mixed WPA2/WPA3) downgrade, Dragonblood side-channel attacks (CVE-2019-9494, 9495, 13377, 13456), SAE auth flooding for AP CPU exhaustion, Hash-to-Element (H2E) timing analysis, group downgrade, and 6 GHz / Wi-Fi 6E spec implications (PMF mandatory, no transition mode allowed). Use when target advertises WPA3-SAE or WPA3-Personal/Enterprise, or operates in 6 GHz where WPA3 + PMF are required by spec."

**Location:** .opencode\claude-red--wireless--offensive-wpa3-sae\SKILL.md

### [claude-red--wireless--offensive-wps]
**Description:** "WPS (Wi-Fi Protected Setup) PIN attack methodology — Pixie Dust offline attack against vulnerable chipsets (Ralink, Realtek, Broadcom, MediaTek), online PIN brute-force with reaver/bully, lockout handling, time-of-day evasion, WPS push-button vulnerability windows, and PIN-to-PSK derivation. Use when a target SOHO router exposes WPS — common on consumer ISP gear, often left enabled by default even when WPS attacks have been known for over a decade."

**Location:** .opencode\claude-red--wireless--offensive-wps\SKILL.md

### [claude-red--wireless--offensive-z-wave]
**Description:** "Z-Wave attack methodology — sniffing with Z-Force / EZ-Wave / RTL-SDR + ZniffMobile, S0 (legacy) network-key derivation flaw and key reuse, S2 (modern) ECDH commissioning analysis, replay/injection on unauthenticated nodes, default-key brute-force on test deployments, and home-automation hub pivots. Use when targeting Z-Wave smart home devices (door locks, sensors, garage controllers) — common in mid-2010s smart home deployments still in production."

**Location:** .opencode\claude-red--wireless--offensive-z-wave\SKILL.md

### [claude-red--wireless--offensive-zigbee-thread-matter]
**Description:** "Zigbee, Thread, and Matter mesh-protocol attack methodology — IEEE 802.15.4 sniffing with TI CC2531 / CC2540 / Sonoff Zigbee Dongle E, KillerBee toolkit, Touchlink commissioning abuse with the well-known transport key, replay/injection attacks, Zigbee Cluster Library command abuse for door locks and bulbs, Thread network credential theft, Matter commissioning chain analysis, and 6LoWPAN/IPv6 routing exploitation. Use when targeting smart-home or commercial mesh deployments, Zigbee-based door locks, lighting, or sensor networks."

**Location:** .opencode\claude-red--wireless--offensive-zigbee-thread-matter\SKILL.md

### [data-agent-kit-plugin--accidental-data-loss-prevention]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--accidental-data-loss-prevention\SKILL.md

### [data-agent-kit-plugin--bigquery-ai-ml]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--bigquery-ai-ml\SKILL.md

### [data-agent-kit-plugin--bigquery-bigframes]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--bigquery-bigframes\SKILL.md

### [data-agent-kit-plugin--bigquery-data-transfer-service]
**Description:** Discovers and inspects BigQuery Data Transfer Service (DTS) configurations.

**Location:** .opencode\data-agent-kit-plugin--bigquery-data-transfer-service\SKILL.md

### [data-agent-kit-plugin--bigquery-graph-author]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--bigquery-graph-author\SKILL.md

### [data-agent-kit-plugin--bigquery-graph-query]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--bigquery-graph-query\SKILL.md

### [data-agent-kit-plugin--bigquery-sql]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--bigquery-sql\SKILL.md

### [data-agent-kit-plugin--bigtable-basics]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--bigtable-basics\SKILL.md

### [data-agent-kit-plugin--building-data-apps]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--building-data-apps\SKILL.md

### [data-agent-kit-plugin--dak-setup]
**Description:** Configures (or reconfigures) the Google Cloud Data Agent Kit (DAK) plugin by checking gcloud and ADC credentials, collecting the GCP project ID, region, and services, and running its bundled `dak-setup` script. Use this proactively and without waiting to be asked whenever a SessionStart hook or any other system/context message reports that the Data Agent Kit plugin is not configured, is missing configuration, or needs to be reconfigured. Also use it whenever the user mentions setting up, configuring, reconfiguring, or changing the project, region, or service integrations for the Data Agent Kit or DAK plugin — even if they phrase it casually, like "dak isn't working" or "I want to enable more GCP service integrations".

**Location:** .opencode\data-agent-kit-plugin--dak-setup\SKILL.md

### [data-agent-kit-plugin--data-autocleaning]
**Description:** Automated data quality and transformation capabilities for Dataform/dbt/BigQuery

**Location:** .opencode\data-agent-kit-plugin--data-autocleaning\SKILL.md

### [data-agent-kit-plugin--dataform-bigquery]
**Description:** Expertise in generating clean, correct, and efficient Dataform pipeline

**Location:** .opencode\data-agent-kit-plugin--dataform-bigquery\SKILL.md

### [data-agent-kit-plugin--dbt-bigquery]
**Description:** Expert guidance for creating, modifying, and optimizing dbt pipelines

**Location:** .opencode\data-agent-kit-plugin--dbt-bigquery\SKILL.md

### [data-agent-kit-plugin--discovering-gcp-data-assets]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--discovering-gcp-data-assets\SKILL.md

### [data-agent-kit-plugin--enforcing-resource-attribution]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--enforcing-resource-attribution\SKILL.md

### [data-agent-kit-plugin--federate-lakehouse-catalog]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--federate-lakehouse-catalog\SKILL.md

### [data-agent-kit-plugin--gcp-composer-troubleshooting]
**Description:** 'Provides expert guidance for troubleshooting Cloud Composer (Apache

**Location:** .opencode\data-agent-kit-plugin--gcp-composer-troubleshooting\SKILL.md

### [data-agent-kit-plugin--gcp-data-pipelines]
**Description:** 'Primary entry point for building, managing, and orchestrating data pipelines

**Location:** .opencode\data-agent-kit-plugin--gcp-data-pipelines\SKILL.md

### [data-agent-kit-plugin--gcp-dataflow]
**Description:** >

**Location:** .opencode\data-agent-kit-plugin--gcp-dataflow\SKILL.md

### [data-agent-kit-plugin--gcp-managed-airflow-dag-authoring]
**Description:** Guides the authoring and validation of Apache Airflow DAGs for Managed Service for Apache Airflow (MSAA; formerly Cloud Composer). Covers environment context discovery, Airflow 2 vs 3 compatibility, authoring best practices, and local/remote validation processes. Use when creating or extending an Airflow DAG. Don't use when authoring Python code unrelated to Airflow DAGs.

**Location:** .opencode\data-agent-kit-plugin--gcp-managed-airflow-dag-authoring\SKILL.md

### [data-agent-kit-plugin--gcp-managed-airflow-migrations]
**Description:** Provides guidance for migrating Apache Airflow DAGs in Managed Service for Apache Airflow (MSAA; formerly Cloud Composer). Covers migration to Airflow 2.11.1 (MSAA Gen 2 and 3) and Airflow 3 (MSAA Gen 3), including environment inspection, GCS download/upload and scanning patterns for breaking changes.

**Location:** .opencode\data-agent-kit-plugin--gcp-managed-airflow-migrations\SKILL.md

### [data-agent-kit-plugin--gcp-managed-airflow-recommendations]
**Description:** 'Provides recommendations and best practices for creating, configuring, tuning and optimizing Managed Service for Apache Airflow (MSAA, Cloud Composer) environments. Use when the user asks for guidance, recommendations, or best practices on configuring Cloud Composer, scaling Airflow environments, preventing workload restarts, or analyzing system health.'

**Location:** .opencode\data-agent-kit-plugin--gcp-managed-airflow-recommendations\SKILL.md

### [data-agent-kit-plugin--gcp-managed-spark-upgrades]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--gcp-managed-spark-upgrades\SKILL.md

### [data-agent-kit-plugin--gcp-pipeline-orchestration]
**Description:** This skill helps the agent generate or update orchestration pipeline

**Location:** .opencode\data-agent-kit-plugin--gcp-pipeline-orchestration\SKILL.md

### [data-agent-kit-plugin--gcp-pipeline-resource-provisioning]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--gcp-pipeline-resource-provisioning\SKILL.md

### [data-agent-kit-plugin--gcp-spark]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--gcp-spark\SKILL.md

### [data-agent-kit-plugin--gcp-spark-troubleshooting]
**Description:** "Provides expert guidance for troubleshooting Google Cloud Spark and Dataproc workloads (Dataproc Serverless batches and standard Dataproc clusters), and inspecting, streaming, searching, tailing, or summarizing Spark driver outputs and event logs in Cloud Storage. Use when the user asks to debug, troubleshoot, diagnose, or perform Root Cause Analysis (RCA) on failed Spark jobs, PySpark batches, or Spark event logs."

**Location:** .opencode\data-agent-kit-plugin--gcp-spark-troubleshooting\SKILL.md

### [data-agent-kit-plugin--gcs-security-assessment]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--gcs-security-assessment\SKILL.md

### [data-agent-kit-plugin--google-cloud-auth-verification]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--google-cloud-auth-verification\SKILL.md

### [data-agent-kit-plugin--google-cloud-storage-basics]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--google-cloud-storage-basics\SKILL.md

### [data-agent-kit-plugin--google-cloud-storage-bucket-architect]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--google-cloud-storage-bucket-architect\SKILL.md

### [data-agent-kit-plugin--google-cloud-storage-fuse]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--google-cloud-storage-fuse\SKILL.md

### [data-agent-kit-plugin--managing-python-dependencies]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--managing-python-dependencies\SKILL.md

### [data-agent-kit-plugin--ml-best-practices]
**Description:** |

**Location:** .opencode\data-agent-kit-plugin--ml-best-practices\SKILL.md

### [data-agent-kit-plugin--notebook-guidance]
**Description:** |-

**Location:** .opencode\data-agent-kit-plugin--notebook-guidance\SKILL.md

### [data-agent-kit-plugin--resolving-mcp-region-configs]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--resolving-mcp-region-configs\SKILL.md

### [data-agent-kit-plugin--schema-mapping]
**Description:** >-

**Location:** .opencode\data-agent-kit-plugin--schema-mapping\SKILL.md

### [firebase--extension_to_functions_codebase]
**Description:** Skill for converting an installed Firebase Extension (or extension source) into a standalone Cloud Functions for Firebase codebase or publishable npm package, including V1 to V2 trigger upgrades, lifecycle hooks, and declarative security

**Location:** .opencode\firebase--extension_to_functions_codebase\SKILL.md

### [firebase--firebase_ai_logic_basics]
**Description:** Official skill for integrating Firebase AI Logic (Gemini API) into web applications. Covers setup, multimodal inference, structured output, and security.

**Location:** .opencode\firebase--firebase_ai_logic_basics\SKILL.md

### [firebase--firebase_app_hosting_basics]
**Description:** >-

**Location:** .opencode\firebase--firebase_app_hosting_basics\SKILL.md

### [firebase--firebase_auth_basics]
**Description:** Guide for setting up and using Firebase Authentication. Use this skill when the user's app requires user sign-in, user management, or secure data access using auth rules.

**Location:** .opencode\firebase--firebase_auth_basics\SKILL.md

### [firebase--firebase_basics]
**Description:** >-

**Location:** .opencode\firebase--firebase_basics\SKILL.md

### [firebase--firebase_crashlytics]
**Description:** Comprehensive guide for Firebase Crashlytics, including provisioning and SDK usage. Use this skill when the user needs help setting up Crashlytics, adding crash reporting, or using the Crashlytics SDK in their application.

**Location:** .opencode\firebase--firebase_crashlytics\SKILL.md

### [firebase--firebase_data_connect_basics]
**Description:** Builds and deploys Firebase SQL Connect (aka Firebase Data Connect) backends with PostgreSQL securely. Use when designing schemas with tables and relations, writing authorized queries and mutations, configuring real-time data updates, or generating type-safe SDKs. Use when you need a relational database with Firebase, or when the user mentions SQL Connect or Data Connect.

**Location:** .opencode\firebase--firebase_data_connect_basics\SKILL.md

### [firebase--firebase_firestore]
**Description:** >-

**Location:** .opencode\firebase--firebase_firestore\SKILL.md

### [firebase--firebase_hosting_basics]
**Description:** >-

**Location:** .opencode\firebase--firebase_hosting_basics\SKILL.md

### [firebase--firebase_remote_config_basics]
**Description:** >-

**Location:** .opencode\firebase--firebase_remote_config_basics\SKILL.md

### [firebase--firebase_security_rules_auditor]
**Description:** >-

**Location:** .opencode\firebase--firebase_security_rules_auditor\SKILL.md

### [firebase--firestore_rules_creation]
**Description:** >-

**Location:** .opencode\firebase--firestore_rules_creation\SKILL.md

### [firebase--xcode_project_setup]
**Description:** Safely modifies Xcode projects (.pbxproj) to add Swift Packages and link files. Use this skill whenever an iOS project needs dependencies installed (e.g. Firebase, Alamofire).

**Location:** .opencode\firebase--xcode_project_setup\SKILL.md

### [flutter--dart-add-unit-test]
**Description:** Write and organize unit tests for functions, methods, and classes using `package:test`. Use when creating new logic or fixing bugs to ensure code remains correct and regression-free.

**Location:** .opencode\flutter--dart-add-unit-test\SKILL.md

### [flutter--dart-build-cli-app]
**Description:** >-

**Location:** .opencode\flutter--dart-build-cli-app\SKILL.md

### [flutter--dart-collect-coverage]
**Description:** Collect coverage using the coverage packge and create an LCOV report

**Location:** .opencode\flutter--dart-collect-coverage\SKILL.md

### [flutter--dart-fix-runtime-errors]
**Description:** Uses get_runtime_errors and lsp to fetch an active stack trace, locate the failing line, apply a fix, and verify resolution via hot_reload.

**Location:** .opencode\flutter--dart-fix-runtime-errors\SKILL.md

### [flutter--dart-generate-test-mocks]
**Description:** Define and generate mock objects for external dependencies using `package:mockito` and `build_runner`. Use when unit testing classes that depend on complex external services like APIs or databases.

**Location:** .opencode\flutter--dart-generate-test-mocks\SKILL.md

### [flutter--dart-migrate-to-checks-package]
**Description:** |-

**Location:** .opencode\flutter--dart-migrate-to-checks-package\SKILL.md

### [flutter--dart-resolve-package-conflicts]
**Description:** Workflow for fixing package version conflicts. Use this when `pub get` fails due to incompatible package versions.

**Location:** .opencode\flutter--dart-resolve-package-conflicts\SKILL.md

### [flutter--dart-run-static-analysis]
**Description:** Execute `dart analyze` to identify warnings and errors, and use `dart fix --apply` to automatically resolve mechanical lint issues. Use during development to ensure code quality and before committing changes.

**Location:** .opencode\flutter--dart-run-static-analysis\SKILL.md

### [flutter--dart-setup-ffi-assets]
**Description:** "Guides agents in compiling and packaging C/C++ source code into dynamic or static libraries (Code Assets) using Dart's Native Assets hook system (via hook/build.dart and hook/link.dart utilizing package:hooks and package:native_toolchain_c). Use when a user asks to: 'setup native assets', 'compile C/C++ source code', 'bundle dynamic libraries', 'build native C code', 'link native assets', 'implement build.dart or link.dart hooks', or 'integrate C/C++ interop in Dart/Flutter'. Helps agents avoid manual toolchain orchestration and configures secure hash-validated binary downloads or advanced linker tree-shaking with package:record_use mapping."

**Location:** .opencode\flutter--dart-setup-ffi-assets\SKILL.md

### [flutter--dart-use-doc-examples]
**Description:** "How to inject external code examples into Dartdoc using the {@example} directive, and how to filter those files using #hide, #region, and #endregion tags."

**Location:** .opencode\flutter--dart-use-doc-examples\SKILL.md

### [flutter--dart-use-ffigen]
**Description:** Guide agents to use `package:ffigen` to automatically generate FFI bindings instead of writing them manually. Use this skill when a task involves writing new FFI bindings, extending C/Objective-C/Swift integrations, or replacing hand-crafted `dart:ffi` setups.

**Location:** .opencode\flutter--dart-use-ffigen\SKILL.md

### [flutter--dart-use-path-package]
**Description:** >-

**Location:** .opencode\flutter--dart-use-path-package\SKILL.md

### [flutter--dart-use-pattern-matching]
**Description:** >-

**Location:** .opencode\flutter--dart-use-pattern-matching\SKILL.md

### [flutter--dart-use-primary-constructors]
**Description:** >

**Location:** .opencode\flutter--dart-use-primary-constructors\SKILL.md

### [flutter--dart-write-documentation]
**Description:** "Rules and formatting guidelines for writing Dart /// API documentation and doc comments. Use when documenting Dart code, writing doc comments for any Dart declaration (libraries, classes, methods, variables, etc.), or when instructed to follow the Effective Dart documentation guidelines."

**Location:** .opencode\flutter--dart-write-documentation\SKILL.md

### [flutter--flutter-add-integration-test]
**Description:** Configures Flutter Driver for app interaction and converts MCP actions into permanent integration tests. Use when adding integration testing to a project, exploring UI components via MCP, or automating user flows with the integration_test package.

**Location:** .opencode\flutter--flutter-add-integration-test\SKILL.md

### [flutter--flutter-add-widget-preview]
**Description:** Adds interactive widget previews to the project using the previews.dart system. Use when creating new UI components or updating existing screens to ensure consistent design and interactive testing.

**Location:** .opencode\flutter--flutter-add-widget-preview\SKILL.md

### [flutter--flutter-add-widget-test]
**Description:** Implement a component-level test using `WidgetTester` to verify UI rendering and user interactions (tapping, scrolling, entering text). Use when validating that a specific widget displays correct data and responds to events as expected.

**Location:** .opencode\flutter--flutter-add-widget-test\SKILL.md

### [flutter--flutter-apply-architecture-best-practices]
**Description:** Architects a Flutter application using the recommended layered approach (UI, Logic, Data). Use when structuring a new project or refactoring for scalability.

**Location:** .opencode\flutter--flutter-apply-architecture-best-practices\SKILL.md

### [flutter--flutter-build-responsive-layout]
**Description:** Use `LayoutBuilder`, `MediaQuery`, or `Expanded/Flexible` to create a layout that adapts to different screen sizes. Use when you need the UI to look good on both mobile and tablet/desktop form factors.

**Location:** .opencode\flutter--flutter-build-responsive-layout\SKILL.md

### [flutter--flutter-fix-layout-issues]
**Description:** Fixes Flutter layout errors (overflows, unbounded constraints) using Dart and Flutter MCP tools. Use when addressing "RenderFlex overflowed", "Vertical viewport was given unbounded height", or similar layout issues.

**Location:** .opencode\flutter--flutter-fix-layout-issues\SKILL.md

### [flutter--flutter-implement-json-serialization]
**Description:** Create model classes with `fromJson` and `toJson` methods using `dart:convert`. Use when manually mapping JSON keys to class properties for simple data structures.

**Location:** .opencode\flutter--flutter-implement-json-serialization\SKILL.md

### [flutter--flutter-setup-declarative-routing]
**Description:** Configure `MaterialApp.router` using a package like `go_router` for advanced URL-based navigation. Use when developing web applications or mobile apps that require specific deep linking and browser history support.

**Location:** .opencode\flutter--flutter-setup-declarative-routing\SKILL.md

### [flutter--flutter-setup-localization]
**Description:** Add `flutter_localizations` and `intl` dependencies, enable "generate true" in `pubspec.yaml`, and create an `l10n.yaml` configuration file. Use when initializing localization support for a new Flutter project.

**Location:** .opencode\flutter--flutter-setup-localization\SKILL.md

### [flutter--flutter-use-http-package]
**Description:** Use the `http` package to execute GET, POST, PUT, or DELETE requests. Use when you need to fetch from or send data to a REST API.

**Location:** .opencode\flutter--flutter-use-http-package\SKILL.md

### [gcalendar--gcalendar]
**Description:** Read, create, and manage Google Calendar events. Use when the user shares a calendar.google.com URL, asks what is on their schedule, wants an event found, created, updated, deleted, or moved, wants to RSVP, wants free/busy or scheduling conflicts checked before proposing a time, wants focus time or an out-of-office block created, wants an event quick-added from a phrase or imported from an ICS file, or wants to know where someone is working from and which timezone they are in. Don't use for Gmail, Chat, or Tasks.

**Location:** .opencode\gcalendar--gcalendar\SKILL.md

### [gdocs--gdocs]
**Description:** Read, create, edit, and manage Google Docs. Use when the user shares a docs.google.com URL, asks to summarize or extract content from a doc, wants a doc drafted, edited, formatted, or commented on, wants tables, images, or smart chips inserted, wants markdown imported or synchronized with a doc, or wants a doc exported. Requires a known document ID — to find documents, use the gdrive skill from the Google Drive plugin; if it isn't installed, ask the user for the doc link. Don't use for Google Sheets, Slides, or Drive file management.

**Location:** .opencode\gdocs--gdocs\SKILL.md

### [gdrive--gdrive]
**Description:** Browse, search, and manage Google Drive files and folders. Use when the user shares a drive.google.com URL, asks what is in a folder, wants a file found, downloaded, uploaded, updated in place, moved, copied, or renamed, wants a Google file exported to PDF, Markdown, or CSV, wants comments read or added, wants sharing and permissions checked or changed, or wants Drive activity watched. Don't use for editing the contents of a Doc, Sheet, or Slides deck.

**Location:** .opencode\gdrive--gdrive\SKILL.md

### [gemini-api--gemini-api-dev]
**Description:** Use this skill when writing code that calls the Gemini API for text generation, multi-turn chat, multimodal understanding, image generation, video generation, speech generation (TTS), voice design, voice replication, streaming responses, background research tasks, function calling, structured output, or migrating from the old generateContent API. Covers SDK usage and best practices for Gemini models and agents in Python and TypeScript.

**Location:** .opencode\gemini-api--gemini-api-dev\SKILL.md

### [gemini-api--gemini-live-api-dev]
**Description:** Use this skill when building real-time, bidirectional streaming applications with the Gemini Live API, or migrating legacy Live models (2.0/2.5/3.1) to Gemini 3.8 Live. Covers WebSocket-based audio/video/text streaming, voice activity detection (VAD), background reasoning (extended thinking), asynchronous function calling, session management, ephemeral tokens, live transcription, and live translation. SDKs covered - google-genai (Python), @google/genai (JavaScript/TypeScript).

**Location:** .opencode\gemini-api--gemini-live-api-dev\SKILL.md

### [gemini-api--gemini-omni-flash-api]
**Description:** Use this skill for generative video editing, text-to-video, image-referenced video generation, first-frame-to-video, first-and-last-frame transitions, and video extensions using Gemini Omni 1.1 Flash (gemini-omni-1.1-flash) via the official google-genai SDK. Includes workflows for pre-processing/optimizing high-resolution or long source videos with ffmpeg, stripping audio for full sound regeneration, and handling turn-by-turn video editing and parallel execution.

**Location:** .opencode\gemini-api--gemini-omni-flash-api\SKILL.md

### [google-antigravity-sdk--google-antigravity-sdk]
**Description:** "Design, implement, and debug autonomous AI agents and multi-agent systems using the Google Antigravity (AGY) SDK. ACTIVATE this skill when the user wants to create, configure, or orchestrate Google Antigravity agents."

**Location:** .opencode\google-antigravity-sdk--google-antigravity-sdk\SKILL.md

### [google-cloud-developer--finding-google-skills]
**Description:** >-

**Location:** .opencode\google-cloud-developer--finding-google-skills\SKILL.md

### [google-cloud-developer--gcloud]
**Description:** >-

**Location:** .opencode\google-cloud-developer--gcloud\SKILL.md

### [google-cloud-developer--google-cloud-recipe-auth]
**Description:** Provides expert guidance on Identity and Access Management (IAM) and authenticating and authorizing to Google Cloud services and APIs, covering human users, service identities, Application Default Credentials (ADC), and best practices for secure access.

**Location:** .opencode\google-cloud-developer--google-cloud-recipe-auth\SKILL.md

### [google-cloud-developer--google-cloud-recipe-onboarding]
**Description:** >-

**Location:** .opencode\google-cloud-developer--google-cloud-recipe-onboarding\SKILL.md

### [google-cloud-developer--retrieving-developer-knowledge]
**Description:** >-

**Location:** .opencode\google-cloud-developer--retrieving-developer-knowledge\SKILL.md

### [google-developer-knowledge--retrieving-developer-knowledge]
**Description:** >-

**Location:** .opencode\google-developer-knowledge--retrieving-developer-knowledge\SKILL.md

### [google_maps_platform--skills]
**Description:** A collection of skills for architecting and implementing production-ready code using Google Maps Platform APIs and SDKs for any map, place, address, geocoding, routing/ETA (including eco-friendly routing), nearby search, 3D / Street View / static map, marker clustering, custom styling, drawing, geofencing, heatmap, or environmental (air-quality / pollen / solar / weather) feature — across Web, Android, iOS, and Web Services APIs. For prototyping, use the public Maps Demo Key — no billing setup and no Cloud project required, covering a growing set of the most popular Google Maps Platform APIs. For production, the skill prompts you to create and restrict your own key. All non-trivial code is grounded in freshly retrieved docs via the Google Maps Platform Code Assist service (no reliance on training-data memory).

**Location:** .opencode\google_maps_platform--skills\SKILL.md

### [gsheets--gsheets]
**Description:** Read, write, format, and manage Google Sheets. Use when the user shares a sheets.google.com or docs.google.com/spreadsheets URL, asks to read or summarize spreadsheet data, wants cells written, formatted, sorted, merged, or validated, wants rows/columns inserted or deleted, wants charts, pivot tables, or tables added, wants CSV imported, or wants a spreadsheet created, copied, shared, or exported. Don't use for Google Docs, Slides, or Drive file management.

**Location:** .opencode\gsheets--gsheets\SKILL.md

### [gslides--gslides]
**Description:** Read, create, and edit Google Slides presentations. Use when creating presentations, when the user shares a slides.google.com URL, asks to summarize or extract content from a deck, wants slides drafted or updated, or wants a presentation exported. Don't use for Google Docs, Sheets, or Drive file management.

**Location:** .opencode\gslides--gslides\SKILL.md

### [science--alphafold_database_fetch_and_analyze]
**Description:** >

**Location:** .opencode\science--alphafold_database_fetch_and_analyze\SKILL.md

### [science--alphagenome_atlas_website_links]
**Description:** >-

**Location:** .opencode\science--alphagenome_atlas_website_links\SKILL.md

### [science--alphagenome_single_variant_analysis]
**Description:** >

**Location:** .opencode\science--alphagenome_single_variant_analysis\SKILL.md

### [science--alphagenome_variant_impact_score]
**Description:** >-

**Location:** .opencode\science--alphagenome_variant_impact_score\SKILL.md

### [science--biomolecular_structure_viewer]
**Description:** >

**Location:** .opencode\science--biomolecular_structure_viewer\SKILL.md

### [science--chembl_database]
**Description:** >

**Location:** .opencode\science--chembl_database\SKILL.md

### [science--clinical_trials_database]
**Description:** >

**Location:** .opencode\science--clinical_trials_database\SKILL.md

### [science--clinvar_database]
**Description:** >

**Location:** .opencode\science--clinvar_database\SKILL.md

### [science--credentials]
**Description:** >-

**Location:** .opencode\science--credentials\SKILL.md

### [science--dbsnp_database]
**Description:** >

**Location:** .opencode\science--dbsnp_database\SKILL.md

### [science--embl_ebi_ols]
**Description:** >

**Location:** .opencode\science--embl_ebi_ols\SKILL.md

### [science--encode_ccres_database]
**Description:** >

**Location:** .opencode\science--encode_ccres_database\SKILL.md

### [science--ensembl_database]
**Description:** >

**Location:** .opencode\science--ensembl_database\SKILL.md

### [science--foldseek_structural_search]
**Description:** >

**Location:** .opencode\science--foldseek_structural_search\SKILL.md

### [science--gnomad_database]
**Description:** >

**Location:** .opencode\science--gnomad_database\SKILL.md

### [science--gtex_database]
**Description:** >

**Location:** .opencode\science--gtex_database\SKILL.md

### [science--human_protein_atlas_database]
**Description:** >

**Location:** .opencode\science--human_protein_atlas_database\SKILL.md

### [science--interpro_database]
**Description:** >

**Location:** .opencode\science--interpro_database\SKILL.md

### [science--jaspar_database]
**Description:** >

**Location:** .opencode\science--jaspar_database\SKILL.md

### [science--literature_search_arxiv]
**Description:** >

**Location:** .opencode\science--literature_search_arxiv\SKILL.md

### [science--literature_search_biorxiv]
**Description:** >

**Location:** .opencode\science--literature_search_biorxiv\SKILL.md

### [science--literature_search_europepmc]
**Description:** >

**Location:** .opencode\science--literature_search_europepmc\SKILL.md

### [science--literature_search_openalex]
**Description:** >

**Location:** .opencode\science--literature_search_openalex\SKILL.md

### [science--ncbi_sequence_fetch]
**Description:** >

**Location:** .opencode\science--ncbi_sequence_fetch\SKILL.md

### [science--openfda_database]
**Description:** >

**Location:** .opencode\science--openfda_database\SKILL.md

### [science--opentargets_database]
**Description:** >

**Location:** .opencode\science--opentargets_database\SKILL.md

### [science--pdb_database]
**Description:** >

**Location:** .opencode\science--pdb_database\SKILL.md

### [science--predictingthepast]
**Description:** >

**Location:** .opencode\science--predictingthepast\SKILL.md

### [science--protein_sequence_msa]
**Description:** >

**Location:** .opencode\science--protein_sequence_msa\SKILL.md

### [science--protein_sequence_similarity_search]
**Description:** >

**Location:** .opencode\science--protein_sequence_similarity_search\SKILL.md

### [science--pubchem_database]
**Description:** >

**Location:** .opencode\science--pubchem_database\SKILL.md

### [science--pubmed_database]
**Description:** >-

**Location:** .opencode\science--pubmed_database\SKILL.md

### [science--pymol]
**Description:** >

**Location:** .opencode\science--pymol\SKILL.md

### [science--quickgo_database]
**Description:** >

**Location:** .opencode\science--quickgo_database\SKILL.md

### [science--reactome_database]
**Description:** >

**Location:** .opencode\science--reactome_database\SKILL.md

### [science--string_database]
**Description:** >

**Location:** .opencode\science--string_database\SKILL.md

### [science--ucsc_conservation_and_tfbs]
**Description:** >

**Location:** .opencode\science--ucsc_conservation_and_tfbs\SKILL.md

### [science--unibind_database]
**Description:** >-

**Location:** .opencode\science--unibind_database\SKILL.md

### [science--uniprot_database]
**Description:** >-

**Location:** .opencode\science--uniprot_database\SKILL.md

### [science--uv]
**Description:** >-

**Location:** .opencode\science--uv\SKILL.md

### [science--workflow_skill_creator]
**Description:** >

**Location:** .opencode\science--workflow_skill_creator\SKILL.md

### [superpowers--brainstorming]
**Description:** "You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation)."

**Location:** .opencode\superpowers--brainstorming\SKILL.md

### [superpowers--diagnosing-superpowers]
**Description:** Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for the current session or a past one identified by id or path, on any harness.

**Location:** .opencode\superpowers--diagnosing-superpowers\SKILL.md

### [superpowers--dispatching-parallel-agents]
**Description:** Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies

**Location:** .opencode\superpowers--dispatching-parallel-agents\SKILL.md

### [superpowers--executing-plans]
**Description:** Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available

**Location:** .opencode\superpowers--executing-plans\SKILL.md

### [superpowers--finishing-a-development-branch]
**Description:** Use when implementation is complete, all tests pass, and you need to decide how to integrate the work

**Location:** .opencode\superpowers--finishing-a-development-branch\SKILL.md

### [superpowers--receiving-code-review]
**Description:** Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation

**Location:** .opencode\superpowers--receiving-code-review\SKILL.md

### [superpowers--requesting-code-review]
**Description:** Use when completing tasks, implementing major features, or before merging to verify work meets requirements

**Location:** .opencode\superpowers--requesting-code-review\SKILL.md

### [superpowers--subagent-driven-development]
**Description:** Use when executing implementation plans with independent tasks in the current session

**Location:** .opencode\superpowers--subagent-driven-development\SKILL.md

### [superpowers--systematic-debugging]
**Description:** Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes

**Location:** .opencode\superpowers--systematic-debugging\SKILL.md

### [superpowers--test-driven-development]
**Description:** Use when implementing any feature or bugfix, before writing implementation code

**Location:** .opencode\superpowers--test-driven-development\SKILL.md

### [superpowers--using-git-worktrees]
**Description:** Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback

**Location:** .opencode\superpowers--using-git-worktrees\SKILL.md

### [superpowers--using-superpowers]
**Description:** Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions

**Location:** .opencode\superpowers--using-superpowers\SKILL.md

### [superpowers--verification-before-completion]
**Description:** Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always

**Location:** .opencode\superpowers--verification-before-completion\SKILL.md

### [superpowers--writing-plans]
**Description:** Use when you have a spec or requirements for a multi-step task, before touching code

**Location:** .opencode\superpowers--writing-plans\SKILL.md

### [superpowers--writing-skills]
**Description:** Use when creating new skills, editing existing skills, or verifying skills work before deployment

**Location:** .opencode\superpowers--writing-skills\SKILL.md

## Category: android-cli-plugin (1 skills)

### [skills]
**Description:** Provides instructions for installing and using the `android` CLI. The `android` command-line tool is a critical tool for Android development and helps you create new Android projects, run Android apps on devices, manage and interact with Android virtual devices (including screenshots and UI inspection), manage Android SDK components, look up official Android documentation, and discover and install official Android skills.

**Location:** android-cli-plugin\skills\SKILL.md

## Category: Antigravity-Builtin (9 skills)

### [agy-customizations]
**Description:** >-

**Location:** Antigravity-Builtin\agy-customizations\SKILL.md

### [antigravity_guide]
**Description:** Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.

**Location:** Antigravity-Builtin\antigravity_guide\SKILL.md

### [automation]
**Description:** Interactive guide to design and create a scheduled background automation. Use this skill when the user wants to create an automated or recurring scheduled task (e.g. "summarize my emails every morning", "every Monday send me a to-do list"). Also triggered by the /automation slash command.

**Location:** Antigravity-Builtin\automation\SKILL.md

### [generative_ui]
**Description:** How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.

**Location:** Antigravity-Builtin\generative_ui\SKILL.md

### [migrate-workflows]
**Description:** Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.

**Location:** Antigravity-Builtin\migrate-workflows\SKILL.md

### [permissioned-github]
**Description:** Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.

**Location:** Antigravity-Builtin\permissioned-github\SKILL.md

### [plugin]
**Description:** How to manage and create plugins — namespaced bundles of skills, agents, rules, MCP servers and hooks that install, enable and disable as a single unit. Use this skill when the user wants to enable, disable, install or uninstall a plugin, when they want to create a new plugin, or when a new customization should be packaged into a plugin rather than left loose. Also triggered by the /plugin slash command. Don't use for the underlying customization system itself — discovery roots, loading priority, or authoring a standalone skill, agent, rule, hook or MCP server outside a plugin; see the customizations guide skill for those.

**Location:** Antigravity-Builtin\plugin\SKILL.md

### [run-workflow]
**Description:** >-

**Location:** Antigravity-Builtin\run-workflow\SKILL.md

### [ui-plugin-navigation]
**Description:** Discover UI plugin panels relevant to the current task and surface a one-click pill in chat to open (toggle) them in the side pane. Use when a running UI plugin's panel would help with what the user is doing, or right after the user enables a new UI plugin pane and a shortcut to open it is handy.

**Location:** Antigravity-Builtin\ui-plugin-navigation\SKILL.md

## Category: chrome-devtools-plugin (6 skills)

### [a11y-debugging]
**Description:** Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.

**Location:** chrome-devtools-plugin\a11y-debugging\SKILL.md

### [chrome-devtools]
**Description:** Uses Chrome DevTools via MCP for efficient debugging, troubleshooting and browser automation. Use when debugging web pages, automating browser interactions, analyzing performance, or inspecting network requests. This skill does not apply to `--slim` mode (MCP configuration).

**Location:** chrome-devtools-plugin\chrome-devtools\SKILL.md

### [cookie-debugging]
**Description:** Uses Chrome DevTools MCP for inspecting, debugging, and testing cookies, session state, authentication issues, and cookie consent compliance. Use when diagnosing 401/403 errors, authentication redirects, session expiration, Cookie/Set-Cookie header issues, cookie banner consent conformance, or third-party cookie/SameSite/Partitioned cookie warnings.

**Location:** chrome-devtools-plugin\cookie-debugging\SKILL.md

### [debug-optimize-lcp]
**Description:** Guides debugging and optimizing Largest Contentful Paint (LCP) using Chrome DevTools MCP tools. Use this skill whenever the user asks about LCP performance, slow page loads, Core Web Vitals optimization, or wants to understand why their page's main content takes too long to appear. Also use when the user mentions "largest contentful paint", "page load speed", "CWV", or wants to improve how fast their hero image or main content renders.

**Location:** chrome-devtools-plugin\debug-optimize-lcp\SKILL.md

### [memory-leak-debugging]
**Description:** Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to capture, compare, or inspect heap snapshots with Chrome DevTools MCP memory tools.

**Location:** chrome-devtools-plugin\memory-leak-debugging\SKILL.md

### [troubleshooting]
**Description:** Uses Chrome DevTools MCP and documentation to troubleshoot connection and target issues. Trigger this skill when list_pages, new_page, or navigate_page fail, or when the server initialization fails.

**Location:** chrome-devtools-plugin\troubleshooting\SKILL.md

## Category: data-agent-kit-plugin (37 skills)

### [accidental-data-loss-prevention]
**Description:** |

**Location:** data-agent-kit-plugin\accidental-data-loss-prevention\SKILL.md

### [bigquery-ai-ml]
**Description:** >-

**Location:** data-agent-kit-plugin\bigquery-ai-ml\SKILL.md

### [bigquery-bigframes]
**Description:** >-

**Location:** data-agent-kit-plugin\bigquery-bigframes\SKILL.md

### [bigquery-data-transfer-service]
**Description:** Discovers and inspects BigQuery Data Transfer Service (DTS) configurations.

**Location:** data-agent-kit-plugin\bigquery-data-transfer-service\SKILL.md

### [bigquery-graph-author]
**Description:** >-

**Location:** data-agent-kit-plugin\bigquery-graph-author\SKILL.md

### [bigquery-graph-query]
**Description:** >-

**Location:** data-agent-kit-plugin\bigquery-graph-query\SKILL.md

### [bigquery-sql]
**Description:** >-

**Location:** data-agent-kit-plugin\bigquery-sql\SKILL.md

### [bigtable-basics]
**Description:** >-

**Location:** data-agent-kit-plugin\bigtable-basics\SKILL.md

### [building-data-apps]
**Description:** |

**Location:** data-agent-kit-plugin\building-data-apps\SKILL.md

### [dak-setup]
**Description:** Configures (or reconfigures) the Google Cloud Data Agent Kit (DAK) plugin by checking gcloud and ADC credentials, collecting the GCP project ID, region, and services, and running its bundled `dak-setup` script. Use this proactively and without waiting to be asked whenever a SessionStart hook or any other system/context message reports that the Data Agent Kit plugin is not configured, is missing configuration, or needs to be reconfigured. Also use it whenever the user mentions setting up, configuring, reconfiguring, or changing the project, region, or service integrations for the Data Agent Kit or DAK plugin — even if they phrase it casually, like "dak isn't working" or "I want to enable more GCP service integrations".

**Location:** data-agent-kit-plugin\dak-setup\SKILL.md

### [data-autocleaning]
**Description:** Automated data quality and transformation capabilities for Dataform/dbt/BigQuery

**Location:** data-agent-kit-plugin\data-autocleaning\SKILL.md

### [dataform-bigquery]
**Description:** Expertise in generating clean, correct, and efficient Dataform pipeline

**Location:** data-agent-kit-plugin\dataform-bigquery\SKILL.md

### [dbt-bigquery]
**Description:** Expert guidance for creating, modifying, and optimizing dbt pipelines

**Location:** data-agent-kit-plugin\dbt-bigquery\SKILL.md

### [discovering-gcp-data-assets]
**Description:** |

**Location:** data-agent-kit-plugin\discovering-gcp-data-assets\SKILL.md

### [enforcing-resource-attribution]
**Description:** |

**Location:** data-agent-kit-plugin\enforcing-resource-attribution\SKILL.md

### [federate-lakehouse-catalog]
**Description:** >-

**Location:** data-agent-kit-plugin\federate-lakehouse-catalog\SKILL.md

### [gcp-composer-troubleshooting]
**Description:** 'Provides expert guidance for troubleshooting Cloud Composer (Apache

**Location:** data-agent-kit-plugin\gcp-composer-troubleshooting\SKILL.md

### [gcp-data-pipelines]
**Description:** 'Primary entry point for building, managing, and orchestrating data pipelines

**Location:** data-agent-kit-plugin\gcp-data-pipelines\SKILL.md

### [gcp-dataflow]
**Description:** >

**Location:** data-agent-kit-plugin\gcp-dataflow\SKILL.md

### [gcp-managed-airflow-dag-authoring]
**Description:** Guides the authoring and validation of Apache Airflow DAGs for Managed Service for Apache Airflow (MSAA; formerly Cloud Composer). Covers environment context discovery, Airflow 2 vs 3 compatibility, authoring best practices, and local/remote validation processes. Use when creating or extending an Airflow DAG. Don't use when authoring Python code unrelated to Airflow DAGs.

**Location:** data-agent-kit-plugin\gcp-managed-airflow-dag-authoring\SKILL.md

### [gcp-managed-airflow-migrations]
**Description:** Provides guidance for migrating Apache Airflow DAGs in Managed Service for Apache Airflow (MSAA; formerly Cloud Composer). Covers migration to Airflow 2.11.1 (MSAA Gen 2 and 3) and Airflow 3 (MSAA Gen 3), including environment inspection, GCS download/upload and scanning patterns for breaking changes.

**Location:** data-agent-kit-plugin\gcp-managed-airflow-migrations\SKILL.md

### [gcp-managed-airflow-recommendations]
**Description:** 'Provides recommendations and best practices for creating, configuring, tuning and optimizing Managed Service for Apache Airflow (MSAA, Cloud Composer) environments. Use when the user asks for guidance, recommendations, or best practices on configuring Cloud Composer, scaling Airflow environments, preventing workload restarts, or analyzing system health.'

**Location:** data-agent-kit-plugin\gcp-managed-airflow-recommendations\SKILL.md

### [gcp-managed-spark-upgrades]
**Description:** |

**Location:** data-agent-kit-plugin\gcp-managed-spark-upgrades\SKILL.md

### [gcp-pipeline-orchestration]
**Description:** This skill helps the agent generate or update orchestration pipeline

**Location:** data-agent-kit-plugin\gcp-pipeline-orchestration\SKILL.md

### [gcp-pipeline-resource-provisioning]
**Description:** |

**Location:** data-agent-kit-plugin\gcp-pipeline-resource-provisioning\SKILL.md

### [gcp-spark]
**Description:** |

**Location:** data-agent-kit-plugin\gcp-spark\SKILL.md

### [gcp-spark-troubleshooting]
**Description:** "Provides expert guidance for troubleshooting Google Cloud Spark and Dataproc workloads (Dataproc Serverless batches and standard Dataproc clusters), and inspecting, streaming, searching, tailing, or summarizing Spark driver outputs and event logs in Cloud Storage. Use when the user asks to debug, troubleshoot, diagnose, or perform Root Cause Analysis (RCA) on failed Spark jobs, PySpark batches, or Spark event logs."

**Location:** data-agent-kit-plugin\gcp-spark-troubleshooting\SKILL.md

### [gcs-security-assessment]
**Description:** >-

**Location:** data-agent-kit-plugin\gcs-security-assessment\SKILL.md

### [google-cloud-auth-verification]
**Description:** >-

**Location:** data-agent-kit-plugin\google-cloud-auth-verification\SKILL.md

### [google-cloud-storage-basics]
**Description:** >-

**Location:** data-agent-kit-plugin\google-cloud-storage-basics\SKILL.md

### [google-cloud-storage-bucket-architect]
**Description:** >-

**Location:** data-agent-kit-plugin\google-cloud-storage-bucket-architect\SKILL.md

### [google-cloud-storage-fuse]
**Description:** >-

**Location:** data-agent-kit-plugin\google-cloud-storage-fuse\SKILL.md

### [managing-python-dependencies]
**Description:** |

**Location:** data-agent-kit-plugin\managing-python-dependencies\SKILL.md

### [ml-best-practices]
**Description:** |

**Location:** data-agent-kit-plugin\ml-best-practices\SKILL.md

### [notebook-guidance]
**Description:** |-

**Location:** data-agent-kit-plugin\notebook-guidance\SKILL.md

### [resolving-mcp-region-configs]
**Description:** >-

**Location:** data-agent-kit-plugin\resolving-mcp-region-configs\SKILL.md

### [schema-mapping]
**Description:** >-

**Location:** data-agent-kit-plugin\schema-mapping\SKILL.md

## Category: ECC (311 skills)

### [accessibility]
**Description:** Design, implement, and audit accessible UI to WCAG 2.2 Level AA across Web, iOS, and Android — semantic ARIA roles and labels, accessibility traits and hints, focus management, contrast, target size, and screen-reader support. Use when building or auditing UI for accessibility compliance, keyboard navigation, or screen-reader support.

**Location:** ECC\accessibility\SKILL.md

### [agent-architecture-audit]
**Description:** Full-stack diagnostic for agent and LLM applications. Audits the 12-layer agent stack for wrapper regression, memory pollution, tool discipline failures, hidden repair loops, and rendering corruption. Produces severity-ranked findings with code-first fixes. Essential for developers building agent applications, autonomous loops, or any LLM-powered feature. Use when an agent or LLM feature misbehaves and the failing layer is unknown, or before shipping an agent stack.

**Location:** ECC\agent-architecture-audit\SKILL.md

### [agent-eval]
**Description:** Head-to-head comparison of coding agents (Claude Code, Aider, Codex, etc.) on custom tasks with pass rate, cost, time, and consistency metrics. Use when choosing between coding agents, or when a change to an agent setup needs measured pass rate, cost, and time rather than an impression.

**Location:** ECC\agent-eval\SKILL.md

### [agent-harness-construction]
**Description:** Design and optimize AI agent action spaces, tool definitions, and observation formatting for higher completion rates. Use when defining or revising an agent's tool set, action space, or observation format.

**Location:** ECC\agent-harness-construction\SKILL.md

### [agent-introspection-debugging]
**Description:** Structured self-debugging workflow for AI agent failures using capture, diagnosis, contained recovery, and introspection reports. Use when an agent run fails and you need a reproducible diagnosis instead of a retry.

**Location:** ECC\agent-introspection-debugging\SKILL.md

### [agent-payment-x402]
**Description:** Add x402 payment execution to AI agents with per-task budgets, spending controls, and non-custodial wallets. Supports Base through agentwallet-sdk, X Layer through OKX Payments / OKX Agent Payments Protocol, and Solana plus multi-network EVM through the upstream x402 packages with facilitator-based settlement. Use when an agent must pay for something itself and needs per-task budgets, spending controls, and a non-custodial wallet.

**Location:** ECC\agent-payment-x402\SKILL.md

### [agent-runtime-gateway-smoke-test]
**Description:** Verify a local agent API, temporary gateway tunnel, and remote sandbox callback with a tool-free task, then restore the original app connection.

**Location:** ECC\agent-runtime-gateway-smoke-test\SKILL.md

### [agent-security-hardening]
**Description:** Security hardening guidance for AI agent frameworks that process untrusted content, invoke tools, write workspace files, manage runtime identifiers, or handle credentials. Use when building or reviewing an agent runtime, autonomous worker, tool gateway, memory service, or multi-tenant agent deployment. Do not use for general web application security or offensive testing.

**Location:** ECC\agent-security-hardening\SKILL.md

### [agent-self-evaluation]
**Description:** Use after completing any non-trivial task. The agent self-rates its output on 5 axes — accuracy, completeness, clarity, actionability, conciseness — with concrete evidence per criterion. Produces a structured 1-5 scorecard with specific improvement suggestions.

**Location:** ECC\agent-self-evaluation\SKILL.md

### [agent-sort]
**Description:** Build an evidence-backed ECC install plan for a specific repo by sorting skills, commands, rules, hooks, and extras into DAILY vs LIBRARY buckets using parallel repo-aware review passes. Use when ECC should be trimmed to what a project actually needs instead of loading the full bundle.

**Location:** ECC\agent-sort\SKILL.md

### [agentic-engineering]
**Description:** Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing. Use when planning or executing engineering work that agents will carry out end to end.

**Location:** ECC\agentic-engineering\SKILL.md

### [agentic-os]
**Description:** Build persistent multi-agent operating systems on Claude Code. Covers kernel architecture, specialist agents, slash commands, file-based memory, scheduled automation, and state management without external databases. Use when building a persistent multi-agent system on Claude Code with its own memory, commands, and scheduling.

**Location:** ECC\agentic-os\SKILL.md

### [ai-first-engineering]
**Description:** Engineering operating model for teams where AI agents generate a large share of implementation output. Use when setting team process, review gates, or ownership rules for a codebase largely written by agents.

**Location:** ECC\ai-first-engineering\SKILL.md

### [ai-regression-testing]
**Description:** Regression testing strategies for AI-assisted development. Sandbox-mode API testing without database dependencies, automated bug-check workflows, and patterns to catch AI blind spots where the same model writes and reviews code. Use when adding regression coverage to AI-assisted code, or when the same model both wrote and reviewed a change.

**Location:** ECC\ai-regression-testing\SKILL.md

### [android-clean-architecture]
**Description:** Clean Architecture patterns for Android and Kotlin Multiplatform projects — module structure, dependency rules, UseCases, Repositories, and data layer patterns. Use when structuring modules, layers, or data flow in an Android or KMP project.

**Location:** ECC\android-clean-architecture\SKILL.md

### [angular-developer]
**Description:** Generates Angular code and provides architectural guidance. Trigger when creating projects, components, or services, or for best practices on reactivity (signals, linkedSignal, resource), forms, dependency injection, routing, SSR, accessibility (ARIA), animations, styling (component styles, Tailwind CSS), testing, or CLI tooling.

**Location:** ECC\angular-developer\SKILL.md

### [api-connector-builder]
**Description:** Build a new API connector or provider by matching the target repo's existing integration pattern exactly. Use when adding one more integration without inventing a second architecture.

**Location:** ECC\api-connector-builder\SKILL.md

### [api-design]
**Description:** REST API design patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting for production APIs. Use when designing or reviewing REST endpoints, resource names, status codes, pagination, or versioning.

**Location:** ECC\api-design\SKILL.md

### [architecture-decision-records]
**Description:** Capture architectural decisions as numbered ADR markdown files in docs/adr/ with context, alternatives considered, consequences, and an index README. Use when the user says 'record this decision' or 'ADR this', chooses between frameworks or databases, discusses trade-offs, or asks why the codebase is shaped this way.

**Location:** ECC\architecture-decision-records\SKILL.md

### [article-writing]
**Description:** Write articles, guides, blog posts, tutorials, newsletter issues, and other long-form content in a distinctive voice derived from supplied examples or brand guidance. Use when the user wants polished written content longer than a paragraph, especially when voice consistency, structure, and credibility matter.

**Location:** ECC\article-writing\SKILL.md

### [automation-audit-ops]
**Description:** Evidence-first automation inventory and overlap audit workflow for ECC. Use when the user wants to know which jobs, hooks, connectors, MCP servers, or wrappers are live, broken, redundant, or missing before fixing anything.

**Location:** ECC\automation-audit-ops\SKILL.md

### [autonomous-agent-harness]
**Description:** Transform Claude Code into a fully autonomous agent system with persistent memory, scheduled operations, computer use, and task queuing. Replaces standalone agent frameworks (Hermes, AutoGPT) by leveraging Claude Code's native crons, dispatch, MCP tools, and memory. Use when the user wants continuous autonomous operation, scheduled tasks, or a self-directing agent loop.

**Location:** ECC\autonomous-agent-harness\SKILL.md

### [autonomous-loops]
**Description:** "Patterns and architectures for autonomous Claude Code loops — from simple sequential pipelines to RFC-driven multi-agent DAG systems. Retained for compatibility only: when new autonomous loop guidance is needed, use continuous-agent-loop instead."

**Location:** ECC\autonomous-loops\SKILL.md

### [backend-patterns]
**Description:** Backend architecture patterns, API design, database optimization, and server-side best practices for Node.js, Express, and Next.js API routes. Use when building or reviewing Node.js, Express, or Next.js API routes and their data access.

**Location:** ECC\backend-patterns\SKILL.md

### [benchmark]
**Description:** Measure performance baselines and detect regressions across browser Core Web Vitals (LCP, INP, CLS, page weight), API endpoint latency percentiles, and build/test feedback times, with before/after comparison stored in git-tracked .ecc/benchmarks JSON. Use when checking page speed, responding to 'it feels slow' reports, verifying launch performance targets, or comparing stack alternatives.

**Location:** ECC\benchmark\SKILL.md

### [benchmark-methodology]
**Description:** "Score a scoped competitor set into comparable profile cards: nine weighted dimensions (positioning, voice, visual craft, offer packaging, evidence, enterprise-readiness, thought leadership, pricing, client tension) with 1-5 evidence-anchored rubrics and a tension 2x2 plot. Use when benchmarking or scoring competitors, building a competitive comparison matrix, or grading rival positioning before assembling the report; runs after competitive-platform-analysis and before competitive-report-structure."

**Location:** ECC\benchmark-methodology\SKILL.md

### [benchmark-optimization-loop]
**Description:** Convert 'make it faster' requests into a bounded measured optimization loop — baseline first, generate one-hypothesis variants, benchmark each against a correctness gate, and promote the fastest safe variant with reproducible commands. Use when asked to speed something up, try many variants, run recursive optimization, benchmark latency/throughput/cost, or pick the best implementation by repeated measured tests.

**Location:** ECC\benchmark-optimization-loop\SKILL.md

### [bengali-nlp]
**Description:** Bengali (Bangla) text processing patterns including Unicode normalization, script detection, tokenization, conjunct handling, and Bangla-specific NLP best practices for AI applications.

**Location:** ECC\bengali-nlp\SKILL.md

### [blender-motion-state-inspection]
**Description:** Use this skill when inspecting Blender characters, rigs, poses, animation retargeting, ground contact, facing direction, or model-vs-motion alignment where screenshots alone are not enough.

**Location:** ECC\blender-motion-state-inspection\SKILL.md

### [blueprint]
**Description:** "Turn a one-line objective into a step-by-step construction plan for multi-session, multi-agent engineering projects: one-PR-sized steps with self-contained context briefs, dependency graph with parallel-step detection, adversarial review gate, and plan mutation protocol. Use when planning a large feature, refactor, or roadmap that spans multiple PRs or sessions; not for single-PR tasks or when the user says \"just do it\"."

**Location:** ECC\blueprint\SKILL.md

### [brand-discovery]
**Description:** Run a structured, resumable multi-session brand identity interview across 8 modules (purpose, positioning, audience, personality, voice, narrative, founder tension) using laddering, 5 Whys, and projective techniques, persisting answers to disk and producing a master brandbook (90_SYNTHESIS.md). Use when creating or repositioning a brand, briefing designers or writers, or making implicit founder knowledge explicit.

**Location:** ECC\brand-discovery\SKILL.md

### [brand-voice]
**Description:** Build a source-derived writing style profile from real posts, essays, launch notes, docs, or site copy, then reuse that profile across content, outreach, and social workflows. Use when the user wants voice consistency without generic AI writing tropes.

**Location:** ECC\brand-voice\SKILL.md

### [brownfield-retrospective]
**Description:** Run the ECC engineering process retroactively against an existing project slice. Audit current state, reconstruct past decisions, produce a four-axis gap register (thinking, coding practice, missing features, technology selection), then execute fixes forward through the plan-TDD-review pipeline. Use when adopting ECC mid-project, taking over an inherited codebase, or asking what was missed and what would have been built differently from day one.

**Location:** ECC\brownfield-retrospective\SKILL.md

### [browser-qa]
**Description:** "Run automated post-deploy UI verification with a browser automation MCP (claude-in-chrome, Playwright, or Puppeteer): console-error and Core Web Vitals smoke checks, form and auth-flow interaction tests, screenshot visual regression across three breakpoints, and axe-core accessibility audits ending in a SHIP / DO-NOT-SHIP verdict. Use when testing a deployed feature on staging or preview, before shipping frontend changes, reviewing a frontend PR, or checking responsive layout and accessibility."

**Location:** ECC\browser-qa\SKILL.md

### [bun-runtime]
**Description:** Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support.

**Location:** ECC\bun-runtime\SKILL.md

### [canary-watch]
**Description:** Use this skill to monitor and verify a deployed URL after releases — checks HTTP endpoints, SSE streams, static assets, console errors, and performance regressions after deploys, merges, or dependency upgrades. Smoke / canary / post-deploy verification.

**Location:** ECC\canary-watch\SKILL.md

### [carrier-relationship-management]
**Description:** "Manage truckload, LTL, and intermodal carrier portfolios: sourcing and FMCSA vetting, freight rate and fuel-surcharge negotiation, RFPs and routing guides, carrier scorecards, allocation, and renewals. Use when onboarding carriers, running freight RFPs, negotiating rates, evaluating carrier performance, reallocating freight, or building freight strategy."

**Location:** ECC\carrier-relationship-management\SKILL.md

### [change-impact]
**Description:** >-

**Location:** ECC\change-impact\SKILL.md

### [cisco-ios-patterns]
**Description:** Cisco IOS and IOS-XE review patterns for show commands, config hierarchy, wildcard masks, ACL placement, interface hygiene, and safe change-window verification. Use when reading, writing, or reviewing Cisco IOS / IOS-XE configuration or planning a change window.

**Location:** ECC\cisco-ios-patterns\SKILL.md

### [ck]
**Description:** "Persistent per-project memory for Claude Code (Context Keeper) driven by deterministic Node.js /ck commands: init, save, resume, info, list, forget, and v1-to-v2 migrate, plus a SessionStart hook that injects a compact project brief. Use when context must survive across sessions, saving session state with next steps and decisions, resuming where a previous session left off, or picking up a project without re-explaining it."

**Location:** ECC\ck\SKILL.md

### [claude-devfleet]
**Description:** Orchestrate multi-agent coding tasks via Claude DevFleet — plan projects, dispatch parallel agents in isolated worktrees, monitor progress, and read structured reports. Use when dispatching parallel coding agents across isolated worktrees and tracking their reports.

**Location:** ECC\claude-devfleet\SKILL.md

### [click-path-audit]
**Description:** "Trace every user-facing button/touchpoint through its full state change sequence to find bugs where functions individually work but cancel each other out, produce wrong final state, or leave the UI in an inconsistent state. Use when: systematic debugging found no bugs but users report broken buttons, or after any major refactor touching shared state stores."

**Location:** ECC\click-path-audit\SKILL.md

### [clickhouse-io]
**Description:** ClickHouse database patterns, query optimization, analytics, and data engineering best practices for high-performance analytical workloads. Use when writing ClickHouse schemas or queries, or when an analytical query is too slow.

**Location:** ECC\clickhouse-io\SKILL.md

### [code-tour]
**Description:** Create CodeTour `.tour` files — persona-targeted, step-by-step walkthroughs with real file and line anchors. Use for onboarding tours, architecture walkthroughs, PR tours, RCA tours, and structured "explain how this works" requests. Use when the user asks for a code tour, onboarding walkthrough, PR tour, or an explanation of how a subsystem works.

**Location:** ECC\code-tour\SKILL.md

### [codebase-onboarding]
**Description:** Analyze an unfamiliar codebase and generate a structured onboarding guide with architecture map, key entry points, conventions, and a starter CLAUDE.md. Use when joining a new project or setting up Claude Code for the first time in a repo.

**Location:** ECC\codebase-onboarding\SKILL.md

### [codehealth-mcp]
**Description:** Real-time structural Code Health via CodeScene MCP — review before edits, verify score deltas after changes, gate commits and PRs. Use when reviewing code quality, refactoring, checking if AI changes degraded a file, or before commit/PR.

**Location:** ECC\codehealth-mcp\SKILL.md

### [coding-standards]
**Description:** Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. Use when reviewing code quality or naming with no framework-specific skill that applies.

**Location:** ECC\coding-standards\SKILL.md

### [competitive-platform-analysis]
**Description:** Use when scoping a competitive landscape — identifying, categorising, and score-filtering a competitor set before any benchmarking begins. Decides who counts as a competitor, which tier they belong to, and which sources to mine. First step in the three-skill competitive pipeline; precedes benchmark-methodology.

**Location:** ECC\competitive-platform-analysis\SKILL.md

### [competitive-report-structure]
**Description:** Assemble scored competitor profile cards (from benchmark-methodology) into a decision-grade competitive report with landscape map, competitor tiers, benchmarking matrix, white-space analysis, strategic recommendations, and team alignment trigger questions. Use when presenting competitive findings to leadership or a board, writing a competitive landscape report, or as the final step of the competitive analysis pipeline.

**Location:** ECC\competitive-report-structure\SKILL.md

### [compose-multiplatform-patterns]
**Description:** Compose Multiplatform and Jetpack Compose patterns for KMP projects — state management, navigation, theming, performance, and platform-specific UI. Use when building Compose or Jetpack Compose UI, state, navigation, or theming in a KMP project.

**Location:** ECC\compose-multiplatform-patterns\SKILL.md

### [config-gc]
**Description:** Garbage collection for your Claude Code configuration. Periodically scans ~/.claude (skills, memory, hooks, permissions, MCP servers, caches) for redundant, stale, orphaned, or low-value items, then walks the user through a confirm-each-deletion cleanup. Use when the user says "clean up my config", "config GC", "too many skills", "audit my setup", "my .claude is bloated", or asks for a periodic config review.

**Location:** ECC\config-gc\SKILL.md

### [configure-ecc]
**Description:** "Run the conversational ECC setup wizard inside the current harness: inventory the install, collect scope (user/project/local) and hook mode (off/minimal/standard/strict) in Claude Code, use Codex's native plugin lifecycle, or install the project surface under ./.kimi-code, then preview, apply, and verify. Use when installing, updating, reconfiguring, or repairing an ECC installation, changing hook profiles, or moving ECC between install scopes."

**Location:** ECC\configure-ecc\SKILL.md

### [connections-optimizer]
**Description:** Reorganize the user's X and LinkedIn network with review-first pruning, add/follow recommendations, and channel-specific warm outreach drafted in the user's real voice. Use when the user wants to clean up following lists, grow toward current priorities, or rebalance a social graph around higher-signal relationships.

**Location:** ECC\connections-optimizer\SKILL.md

### [content-engine]
**Description:** Create platform-native content systems for X, LinkedIn, TikTok, YouTube, newsletters, and repurposed multi-platform campaigns. Use when the user wants social posts, threads, scripts, content calendars, or one source asset adapted cleanly across platforms.

**Location:** ECC\content-engine\SKILL.md

### [content-hash-cache-pattern]
**Description:** Cache expensive file processing results using SHA-256 content hashes — path-independent, auto-invalidating, with service layer separation. Use when repeated file processing is slow and results should be cached and invalidated by content rather than path.

**Location:** ECC\content-hash-cache-pattern\SKILL.md

### [context-and-decisions]
**Description:** >-

**Location:** ECC\context-and-decisions\SKILL.md

### [context-budget]
**Description:** Routes live context checks to the native Codex or Claude Code meter without scanning files, and performs a bounded static component audit only when explicitly requested. Use for context-budget requests about remaining capacity or installed context overhead.

**Location:** ECC\context-budget\SKILL.md

### [continuous-agent-loop]
**Description:** Patterns for continuous autonomous agent loops with quality gates, evals, and recovery controls. Use when running an agent loop that must self-check, gate on evals, and recover from failures.

**Location:** ECC\continuous-agent-loop\SKILL.md

### [continuous-learning]
**Description:** "[DEPRECATED - use continuous-learning-v2] Legacy v1 stop-hook skill extractor. v2 is a strict superset with instinct-based, project-scoped, hook-reliable learning. Do not invoke v1: when continuous learning, session learning, or pattern extraction is requested, route to continuous-learning-v2 instead."

**Location:** ECC\continuous-learning\SKILL.md

### [continuous-learning-v2]
**Description:** Instinct-based learning system that observes sessions via hooks, creates atomic instincts with confidence scoring, and evolves them into skills/commands/agents. v2.1 adds project-scoped instincts to prevent cross-project contamination. Use when capturing lessons from a session, managing instincts, or promoting them into skills, commands, or agents.

**Location:** ECC\continuous-learning-v2\SKILL.md

### [contract-first]
**Description:** Coordinate frontend/backend or service-to-service work through one authoritative machine-checkable contract (OpenAPI, AsyncAPI, Protocol Buffers, or JSON Schema), with generated consumer types and contract-verified integration. Use when parallel consumer and provider work must evolve an API or event schema without field drift, mock/production shape mismatch, or one side silently redefining the interface.

**Location:** ECC\contract-first\SKILL.md

### [conventional-commit-review]
**Description:** Reviews staged changes and drafts a Conventional Commits-compliant commit message with the right type, scope, and length. Use before committing, or when the user asks to write, fix, or review a commit message.

**Location:** ECC\conventional-commit-review\SKILL.md

### [cost-aware-llm-pipeline]
**Description:** Cost optimization patterns for LLM API usage — model routing by task complexity, budget tracking, retry logic, and prompt caching. Use when LLM spend needs to come down, or when routing tasks across model tiers and budgets.

**Location:** ECC\cost-aware-llm-pipeline\SKILL.md

### [cost-tracking]
**Description:** Track and report Claude Code token usage, spending, and budgets from the local ECC cost-tracker metrics log. Use when the user asks about costs, spending, usage, tokens, budgets, or cost breakdowns by model, session, or date.

**Location:** ECC\cost-tracking\SKILL.md

### [council]
**Description:** Convene a four-voice council for ambiguous decisions, tradeoffs, and go/no-go calls. Use when multiple valid paths exist and you need structured disagreement before choosing.

**Location:** ECC\council\SKILL.md

### [council-multi-model]
**Description:** Add one optional external Codex critique after the existing council has produced a decision draft. Use when an ambiguous, high-consequence decision would benefit from a separate model invocation's attempt to break the synthesis. Requires explicit consent before sending the compact draft and disagreement to OpenAI, labels same-provider reviews honestly, and marks the review absent when the adapter is unavailable.

**Location:** ECC\council-multi-model\SKILL.md

### [counterparty-channel-discipline]
**Description:** Per-channel strict prompts, mention gating, silent observation, and a communication autonomy policy for agents that sit in shared channels with external counterparties. Use when an agent joins group chats, shared channels, or DMs where outsiders can read every message and you need it to speak only when addressed, never leak internal context, and route risky content to draft-only approval.

**Location:** ECC\counterparty-channel-discipline\SKILL.md

### [cpp-coding-standards]
**Description:** C++ coding standards based on the C++ Core Guidelines (isocpp.github.io). Use when writing, reviewing, or refactoring C++ code to enforce modern, safe, and idiomatic practices.

**Location:** ECC\cpp-coding-standards\SKILL.md

### [cpp-testing]
**Description:** Use only when writing/updating/fixing C++ tests, configuring GoogleTest/CTest, diagnosing failing or flaky tests, or adding coverage/sanitizers.

**Location:** ECC\cpp-testing\SKILL.md

### [crosspost]
**Description:** Multi-platform content distribution across X, LinkedIn, Threads, and Bluesky. Adapts content per platform using content-engine patterns. Never posts identical content cross-platform. Use when the user wants to distribute content across social platforms.

**Location:** ECC\crosspost\SKILL.md

### [csharp-testing]
**Description:** C# and .NET testing patterns with xUnit, FluentAssertions, mocking, integration tests, and test organization best practices. Use when writing or reviewing xUnit tests, mocks, or integration tests in a C# / .NET project.

**Location:** ECC\csharp-testing\SKILL.md

### [customer-billing-ops]
**Description:** Operate customer billing workflows such as subscriptions, refunds, churn triage, billing-portal recovery, and plan analysis using connected billing tools like Stripe. Use when the user needs to help a customer, inspect subscription state, or manage revenue-impacting billing operations.

**Location:** ECC\customer-billing-ops\SKILL.md

### [customs-trade-compliance]
**Description:** Codified customs and trade compliance expertise — HS/HTS tariff classification with GRI rules, commercial invoices and entry documentation, Incoterms 2020, FTA qualification and duty optimization (USMCA, RCEP, FTZs, drawback), denied-party screening, and penalty mitigation across US, EU, UK, and APAC jurisdictions. Use when classifying goods, preparing import/export documentation, screening restricted parties, responding to customs audits or CF-28/penalty notices, or optimizing duties.

**Location:** ECC\customs-trade-compliance\SKILL.md

### [dart-flutter-patterns]
**Description:** Production-ready Dart and Flutter patterns covering null safety, immutable state with Freezed, async composition, widget architecture, state management (BLoC, Riverpod, Provider), GoRouter navigation with auth guards, Dio networking, error handling, and testing. Use when writing or reviewing Dart and Flutter code — state, widgets, navigation, networking, or architecture.

**Location:** ECC\dart-flutter-patterns\SKILL.md

### [dashboard-builder]
**Description:** Build monitoring dashboards that answer real operator questions for Grafana, SigNoz, and similar platforms. Use when turning metrics into a working dashboard instead of a vanity board.

**Location:** ECC\dashboard-builder\SKILL.md

### [data-scraper-agent]
**Description:** Build a fully automated AI-powered data collection agent for any public source — job boards, prices, news, GitHub, sports, anything. Runs on a schedule, enriches data with a free LLM (Gemini Flash), stores results in Notion/Sheets/Supabase, and learns from user feedback. Runs 100% free on GitHub Actions. Use when the user wants to monitor, collect, or track any public data automatically.

**Location:** ECC\data-scraper-agent\SKILL.md

### [data-throughput-accelerator]
**Description:** Diagnose and accelerate large data movement — ingestion, backfill, export, ETL, warehouse loading, manifest catch-up, and table synchronization — by isolating the true bottleneck, benchmarking variants, and codifying the fastest path with a hard accounting block proving rows and timestamps cohere. Use when a pipeline or backfill is too slow and must get faster without losing data correctness.

**Location:** ECC\data-throughput-accelerator\SKILL.md

### [database-migrations]
**Description:** "Safe, reversible database migration patterns: forward-only production changes, expand-contract zero-downtime renames, concurrent indexes, batched backfills, and per-tool workflows for PostgreSQL, Prisma, Drizzle, Kysely, Django, and golang-migrate. Use when writing a schema or data migration, adding a column or index to a large table, planning a rollback, or preparing a zero-downtime deploy."

**Location:** ECC\database-migrations\SKILL.md

### [deep-research]
**Description:** Produce cited research reports from multiple web sources using firecrawl and exa MCP tools — plan sub-questions, search and deep-read sources, then synthesize findings with inline citations and confidence levels. Use when the user asks to research a topic in depth, run a deep dive or investigation, or do competitive analysis, technology evaluation, market sizing, or due diligence on a company.

**Location:** ECC\deep-research\SKILL.md

### [deepseek-harness-setup]
**Description:** "Install and operate Everything Claude Code (ECC) on the DeepSeek Harness (DSH): native skill roots (~/.dsh/skills, .agents/skills), the @deepseek-ai/dsh-hooks-claude-code bridge for command hooks, bare-insert patch mounting, generator usage, event-support limits, and update workflow. Use when setting up ECC on DeepSeek Harness, wiring ECC hooks into a DSH profile, or debugging why ECC skills or hooks do not appear in a DSH session."

**Location:** ECC\deepseek-harness-setup\SKILL.md

### [defi-amm-security]
**Description:** Security checklist for Solidity AMM contracts, liquidity pools, and swap flows. Covers reentrancy, CEI ordering, donation or inflation attacks, oracle manipulation, slippage, admin controls, and integer math. Use when auditing or writing Solidity AMM, liquidity pool, or swap code.

**Location:** ECC\defi-amm-security\SKILL.md

### [delivery-gate]
**Description:** Stop hook that blocks Claude from finishing until quality checks pass. Detects rationalization patterns (surface text heuristics), stale learning logs (filesystem mtime), and low disk space. Complements self-audit by mechanically enforcing learning capture habits. Use when Claude should be mechanically blocked from declaring work finished before quality checks and learning capture actually pass.

**Location:** ECC\delivery-gate\SKILL.md

### [deployment-patterns]
**Description:** Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness checklists for web applications. Use when setting up CI/CD, containerizing an app, or checking production readiness before a release.

**Location:** ECC\deployment-patterns\SKILL.md

### [design-system]
**Description:** "Generate a design system from an existing codebase or audit one for visual consistency: extract tokens (colors, typography, spacing, shadows) into design-tokens.json and CSS custom properties with DESIGN.md rationale and an interactive HTML preview, score the UI across 10 dimensions, and flag AI-slop patterns. Use when starting a design system, auditing visual consistency before a redesign, or reviewing a PR that touches styling."

**Location:** ECC\design-system\SKILL.md

### [dev-team]
**Description:** Simulate a collaborative dev team session where multiple role-based personas (PM, Architect, Developer, QA) respond to the same problem together in one session. Use when designing a feature, reviewing a proposal, or onboarding a new initiative and you want multi-role perspective without switching agents manually.

**Location:** ECC\dev-team\SKILL.md

### [django-celery]
**Description:** Django + Celery async task patterns — configuration, task design, beat scheduling, retries, canvas workflows, monitoring, and testing. Use when adding background jobs, scheduled tasks, or async processing to a Django app.

**Location:** ECC\django-celery\SKILL.md

### [django-patterns]
**Description:** Django architecture patterns, REST API design with DRF, ORM best practices, caching, signals, middleware, and production-grade Django apps. Use when building or reviewing Django apps, DRF APIs, ORM queries, or caching.

**Location:** ECC\django-patterns\SKILL.md

### [django-security]
**Description:** Django security best practices, authentication, authorization, CSRF protection, SQL injection prevention, XSS prevention, and secure deployment configurations. Use when reviewing Django authentication, authorization, input handling, or deployment settings.

**Location:** ECC\django-security\SKILL.md

### [django-tdd]
**Description:** Django testing strategies with pytest-django, TDD methodology, factory_boy, mocking, coverage, and testing Django REST Framework APIs. Use when writing Django or DRF tests with pytest-django, or driving a Django feature test-first.

**Location:** ECC\django-tdd\SKILL.md

### [django-verification]
**Description:** Run the full Django verification loop — environment check, mypy/ruff/black linting, migration safety, pytest with coverage targets, pip-audit and bandit security scans, settings and logging review, and diff review — producing a phased pass/fail report before release or PR. Use when preparing a Django pull request, validating migrations or coverage, or running pre-deploy readiness checks.

**Location:** ECC\django-verification\SKILL.md

### [dmux-workflows]
**Description:** Multi-agent orchestration using dmux (tmux pane manager for AI agents). Patterns for parallel agent workflows across Claude Code, Codex, OpenCode, and other harnesses. Use when running multiple agent sessions in parallel or coordinating multi-agent development workflows.

**Location:** ECC\dmux-workflows\SKILL.md

### [docker-patterns]
**Description:** Docker and Docker Compose patterns for local development, hardened CLI installer harnesses, container security, networking, volumes, and multi-service orchestration. Use when creating or reviewing Dockerfiles and Compose services, testing installers across Linux distributions, or planning accurate native macOS and Windows validation.

**Location:** ECC\docker-patterns\SKILL.md

### [docs-governance]
**Description:** Route broad documentation-governance requests to existing ECC skills and run an opt-in, read-only audit of mapped documentation roles, links, ADR indexes, and evidence references. Use when a user asks for documentation governance, project-knowledge organization, documentation integrity, or a deterministic docs audit without naming a narrower skill.

**Location:** ECC\docs-governance\SKILL.md

### [documentation-lookup]
**Description:** Use up-to-date library and framework docs via Context7 MCP instead of training data. Activates for setup questions, API references, code examples, or when the user names a framework (e.g. React, Next.js, Prisma).

**Location:** ECC\documentation-lookup\SKILL.md

### [dotnet-patterns]
**Description:** Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications. Use when writing or reviewing C# / .NET code — DI, async, or general conventions.

**Location:** ECC\dotnet-patterns\SKILL.md

### [dynamic-workflow-mode]
**Description:** "Design task-local harnesses, eval gates, and reusable skill extraction for Claude dynamic workflow mode and other adaptive agent harnesses. Use when building a task-local harness, adding eval gates, or extracting a reusable skill from ad-hoc work."

**Location:** ECC\dynamic-workflow-mode\SKILL.md

### [e2e-testing]
**Description:** Playwright E2E testing patterns, Page Object Model, configuration, CI/CD integration, artifact management, and flaky test strategies. Use when writing Playwright tests, structuring page objects, or fixing flaky E2E runs in CI.

**Location:** ECC\e2e-testing\SKILL.md

### [ecc-guide]
**Description:** Answer questions about ECC by reading the live repo surface — agents, skills, commands, hooks, rules, install profiles, and docs — instead of memory. Use when the user asks what ECC includes, how to install or reset it, which skill or command fits a task, or how project onboarding works.

**Location:** ECC\ecc-guide\SKILL.md

### [ecc-recipes]
**Description:** Map a described workflow to the right ECC command group with run-order and stop condition, or browse all command-group recipe families read live from the commands directory. Advisory only — never executes. Use when asked which commands run a workflow, the command sequence for a task, or to list ECC pipelines; not for executing the task (route to the command itself), single-command docs (use ecc-guide), or prompt rewrites (use prompt-optimizer).

**Location:** ECC\ecc-recipes\SKILL.md

### [ecc-tools-cost-audit]
**Description:** Evidence-first ECC Tools burn and billing audit workflow. Use when investigating runaway PR creation, quota bypass, premium-model leakage, duplicate jobs, or GitHub App cost spikes in the ECC Tools repo.

**Location:** ECC\ecc-tools-cost-audit\SKILL.md

### [email-ops]
**Description:** Evidence-first mailbox triage, drafting, send verification, and sent-mail-safe follow-up workflow for ECC. Use when the user wants to organize email, draft or send through the real mail surface, or prove what landed in Sent.

**Location:** ECC\email-ops\SKILL.md

### [energy-procurement]
**Description:** "Procure electricity and natural gas for commercial and industrial facilities: tariff and rate-schedule optimization, demand-charge mitigation, supplier RFPs, fixed/index/block-and-index hedging, renewable PPA and REC evaluation, and sustainability reporting. Use when procuring energy, optimizing utility tariffs, managing demand charges, evaluating PPAs, or building energy budgets and hedge strategies."

**Location:** ECC\energy-procurement\SKILL.md

### [enterprise-agent-ops]
**Description:** Operational controls for long-lived or cloud-hosted agent systems — runtime lifecycle (start, pause, stop, restart), observability (logs, metrics, traces), least-privilege safety scopes and kill switches, and rollout/rollback change management with audit logs and success/cost metrics. Use when running production agent fleets on PM2, systemd, or containers that need monitoring, incident response, or deployment gates.

**Location:** ECC\enterprise-agent-ops\SKILL.md

### [error-handling]
**Description:** Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers, and user-facing error messages. Use when designing error types, retries, circuit breakers, or user-facing failure messages in TypeScript, Python, or Go.

**Location:** ECC\error-handling\SKILL.md

### [esign-field-placement]
**Description:** Deterministic method for placing signature, date, and text fields in a web e-signature composer through a browser automation session, using a fixed signature page, numeric Location panel coordinates instead of drag, and a save-as-draft default. Use when automating envelope preparation for generated agreements and you need repeatable field positions, correct per-recipient ownership, and a hard gate before anything is sent or signed.

**Location:** ECC\esign-field-placement\SKILL.md

### [eval-harness]
**Description:** Eval-driven development (EDD) framework for AI coding sessions — define capability and regression evals before coding, grade with code-based, model-based, rule, or human graders, and track pass@k and pass^k reliability. Use when defining pass/fail criteria for agent tasks, measuring agent reliability, building regression suites for prompt or agent changes, or benchmarking across model versions.

**Location:** ECC\eval-harness\SKILL.md

### [evm-token-decimals]
**Description:** Prevent silent decimal mismatch bugs across EVM chains. Covers runtime decimal lookup, chain-aware caching, bridged-token precision drift, and safe normalization for bots, dashboards, and DeFi tools. Use when handling token amounts across EVM chains, or when a balance, price, or transfer amount is off by orders of magnitude.

**Location:** ECC\evm-token-decimals\SKILL.md

### [exa-search]
**Description:** Neural search via Exa MCP for web, code, and company research. Use when the user needs web search, code examples, company intel, people lookup, or AI-powered deep research with Exa's neural search engine.

**Location:** ECC\exa-search\SKILL.md

### [fal-ai-media]
**Description:** Unified media generation via fal.ai MCP — image, video, and audio. Covers text-to-image (Nano Banana), text/image-to-video (Seedance, Kling, Veo 3), text-to-speech (CSM-1B), and video-to-audio (ThinkSound). Use when the user wants to generate images, videos, or audio with AI.

**Location:** ECC\fal-ai-media\SKILL.md

### [fastapi-patterns]
**Description:** FastAPI best practices covering project structure, Pydantic v2 schemas, dependency injection, async handlers, authentication, authorization, transactional service layers, and testing with httpx and pytest. Use when building or reviewing FastAPI apps — Pydantic schemas, dependencies, async handlers, auth, or tests.

**Location:** ECC\fastapi-patterns\SKILL.md

### [finance-billing-ops]
**Description:** Evidence-first revenue, pricing, refunds, team-billing, and billing-model truth workflow for ECC. Use when the user wants a sales snapshot, pricing comparison, duplicate-charge diagnosis, or code-backed billing reality instead of generic payments advice.

**Location:** ECC\finance-billing-ops\SKILL.md

### [flox-environments]
**Description:** "Create reproducible, cross-platform (macOS/Linux) development environments with Flox, a declarative Nix-based environment manager. Use when setting up project toolchains, installing system-level dependencies (compilers, databases, native libs), pinning exact package versions for a team, onboarding developers, running local services (PostgreSQL, Redis, Kafka), or solving 'works on my machine' problems — including agent/vibe-coding setups that need project-scoped tools without sudo. Also use when the user mentions .flox/, manifest.toml, flox activate, or FloxHub."

**Location:** ECC\flox-environments\SKILL.md

### [flutter-dart-code-review]
**Description:** Library-agnostic Flutter/Dart code review checklist covering widget best practices, state management patterns (BLoC, Riverpod, Provider, GetX, MobX, Signals), Dart idioms, performance, accessibility, security, and clean architecture. Use when reviewing Flutter or Dart code, whatever state management library the project uses.

**Location:** ECC\flutter-dart-code-review\SKILL.md

### [foundation-models-on-device]
**Description:** Apple FoundationModels framework for on-device LLM — text generation, guided generation with @Generable, tool calling, and snapshot streaming in iOS 26+. Use when adding on-device LLM features with Apple FoundationModels on iOS 26+.

**Location:** ECC\foundation-models-on-device\SKILL.md

### [frontend-a11y]
**Description:** Accessibility patterns for React and Next.js — semantic HTML, ARIA attributes, form labeling, keyboard navigation, focus management, and screen reader support. Use when building or reviewing forms, modals, dropdowns, tooltips, or tabs, fixing a11y lint or code-review findings, or wiring up keyboard navigation and focus management.

**Location:** ECC\frontend-a11y\SKILL.md

### [frontend-design-direction]
**Description:** Set an ECC-specific frontend design direction for production UI work. Use when building or improving websites, dashboards, applications, components, landing pages, visual tools, or any web UI that needs stronger product-specific design judgment.

**Location:** ECC\frontend-design-direction\SKILL.md

### [frontend-patterns]
**Description:** Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices. Use when building or reviewing React or Next.js components, state, or render performance.

**Location:** ECC\frontend-patterns\SKILL.md

### [frontend-slides]
**Description:** Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices.

**Location:** ECC\frontend-slides\SKILL.md

### [fsharp-testing]
**Description:** F# testing patterns with xUnit, FsUnit, Unquote, FsCheck property-based testing, integration tests, and test organization best practices. Use when writing F# tests with xUnit, FsUnit, Unquote, or FsCheck.

**Location:** ECC\fsharp-testing\SKILL.md

### [gan-style-harness]
**Description:** "GAN-inspired Generator-Evaluator agent harness for building high-quality applications autonomously. Based on Anthropic's March 2026 harness design paper. Use when a feature should be built autonomously through generator and evaluator iteration until it clears a quality bar."

**Location:** ECC\gan-style-harness\SKILL.md

### [gateguard]
**Description:** "PreToolUse fact-forcing gate that denies the first Edit/Write/Bash (including MultiEdit and NotebookEdit) attempt until the agent presents concrete facts (importers, data schemas, verbatim user instruction), then allows retry; A/B-tested at +2.25 quality points. Use when enabling or configuring the GateGuard hook, exempting paths via env vars, or handling first-touch denials."

**Location:** ECC\gateguard\SKILL.md

### [generating-python-installer]
**Description:** "Commercial-grade Python installer expert for Windows: Nuitka extreme compilation, dist slimming, DLL footprint analysis, and Inno Setup packaging to ship the smallest, fastest installers. Use when a Python app must ship as a minimal, fast-starting Windows installer; not for basic script-to-exe conversion. 中文触发：Nuitka 极限优化、Python 商业打包、极限编译 Python、dist 瘦身、DLL 分析、最小安装包、最快启动、商业级打包风格"

**Location:** ECC\generating-python-installer\SKILL.md

### [git-workflow]
**Description:** Git workflow patterns including branching strategies, commit conventions, keeping history clean and readable, tidying local commits before merging, merge vs rebase, conflict resolution, and collaborative development best practices for teams of all sizes. Use when choosing a branching strategy, writing commit conventions, cleaning up history before a pull request, deciding merge versus rebase, or resolving conflicts.

**Location:** ECC\git-workflow\SKILL.md

### [github-ops]
**Description:** GitHub repository operations, automation, and management. Issue triage, PR management, CI/CD operations, release management, and security monitoring using the gh CLI. Use when the user wants to manage GitHub issues, PRs, CI status, releases, contributors, stale items, or any GitHub operational task beyond simple git commands.

**Location:** ECC\github-ops\SKILL.md

### [golang-patterns]
**Description:** Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications. Use when writing or reviewing Go code and idiomatic structure or conventions are in question.

**Location:** ECC\golang-patterns\SKILL.md

### [golang-testing]
**Description:** Go testing patterns including table-driven tests, subtests, benchmarks, fuzzing, and test coverage. Follows TDD methodology with idiomatic Go practices. Use when writing Go tests — table-driven cases, subtests, benchmarks, fuzzing, or coverage.

**Location:** ECC\golang-testing\SKILL.md

### [google-workspace-ops]
**Description:** Operate across Google Drive, Docs, Sheets, and Slides as one workflow surface for plans, trackers, decks, and shared documents. Use when the user needs to find, summarize, edit, migrate, or clean up Google Workspace assets without dropping to raw tool calls.

**Location:** ECC\google-workspace-ops\SKILL.md

### [growth-log]
**Description:** Write growth log entries that extract reusable patterns from completed work — root cause, transferable rule, and a recognizable signal — instead of diary-style event narration, with a 4-8 sentence template and merge-duplicates discipline. Use when capturing what was learned after a complex task, debugging session, failure, or rollback, when reviewing progress over a period, or when a delivery gate asks what was learned.

**Location:** ECC\growth-log\SKILL.md

### [healthcare-cdss-patterns]
**Description:** Clinical Decision Support System (CDSS) development patterns. Drug interaction checking, dose validation, clinical scoring (NEWS2, qSOFA), alert severity classification, and integration into EMR workflows. Use when building clinical decision support — drug interaction checks, dose validation, clinical scoring, or alert severity.

**Location:** ECC\healthcare-cdss-patterns\SKILL.md

### [healthcare-emr-patterns]
**Description:** EMR/EHR development patterns for healthcare applications. Clinical safety, encounter workflows, prescription generation, clinical decision support integration, and accessibility-first UI for medical data entry. Use when building EMR or EHR features such as encounter workflows, prescription generation, or clinical data entry UI.

**Location:** ECC\healthcare-emr-patterns\SKILL.md

### [healthcare-eval-harness]
**Description:** Patient safety evaluation harness for healthcare application deployments. Automated test suites for CDSS accuracy, PHI exposure, clinical workflow integrity, and integration compliance. Blocks deployments on safety failures. Use when a healthcare deployment must be gated on patient-safety tests for CDSS accuracy, PHI exposure, and workflow integrity.

**Location:** ECC\healthcare-eval-harness\SKILL.md

### [healthcare-phi-compliance]
**Description:** "Protected Health Information (PHI) and PII compliance patterns for healthcare applications: data classification, row-level access control, tamper-proof audit trails, schema tagging, and common leak vectors such as logs, URLs, and browser storage. Use when code touches patient or clinician data, when implementing HIPAA or GDPR access controls, or when auditing a healthcare system for data exposure."

**Location:** ECC\healthcare-phi-compliance\SKILL.md

### [hermes-imports]
**Description:** Convert local Hermes operator workflows into sanitized ECC skills and release-pack artifacts. Use when preparing a Hermes workflow for public ECC reuse without leaking private workspace state, credentials, or local-only paths.

**Location:** ECC\hermes-imports\SKILL.md

### [hexagonal-architecture]
**Description:** Design, implement, and refactor Ports & Adapters systems with clear domain boundaries, dependency inversion, and testable use-case orchestration across TypeScript, Java, Kotlin, and Go services. Use when introducing or refactoring toward Ports and Adapters, or when domain logic has become entangled with I/O.

**Location:** ECC\hexagonal-architecture\SKILL.md

### [hipaa-compliance]
**Description:** HIPAA-specific entrypoint for healthcare privacy and security work. Use when a task is explicitly framed around HIPAA, PHI handling, covered entities, BAAs, breach posture, or US healthcare compliance requirements.

**Location:** ECC\hipaa-compliance\SKILL.md

### [homelab-network-readiness]
**Description:** Readiness checklist for homelab VLAN segmentation, local DNS filtering (Pi-hole, AdGuard Home), and WireGuard-style remote access. Use when planning or reviewing home network changes — splitting a flat network into trusted, IoT, guest, or management VLANs, moving DHCP to a local resolver, or adding VPN access — before changing router, firewall, DHCP, or VPN configuration.

**Location:** ECC\homelab-network-readiness\SKILL.md

### [homelab-network-setup]
**Description:** Practical home and homelab network planning for gateways, switches, access points, IP ranges, DHCP reservations, DNS, cabling, and common beginner mistakes. Use when planning or fixing a home or homelab network — gateway, switch, AP, IP ranges, DHCP, DNS, or cabling.

**Location:** ECC\homelab-network-setup\SKILL.md

### [homelab-pihole-dns]
**Description:** Pi-hole installation, blocklist management, DNS-over-HTTPS setup, DHCP integration, local DNS records, and troubleshooting broken DNS resolution on a home network. Use when the task explicitly involves Pi-hole — installing it, managing blocklists, configuring DoH or DHCP, adding local DNS records, or diagnosing DNS resolution with Pi-hole in the path.

**Location:** ECC\homelab-pihole-dns\SKILL.md

### [homelab-vlan-segmentation]
**Description:** Segmenting home networks into VLANs for IoT, guest, trusted, and server traffic using UniFi, pfSense/OPNsense, and MikroTik — including switch trunk config, firewall rules, and wireless SSID mapping. Use when splitting a home network into IoT, guest, trusted, and server VLANs on UniFi, pfSense/OPNsense, or MikroTik.

**Location:** ECC\homelab-vlan-segmentation\SKILL.md

### [homelab-wireguard-vpn]
**Description:** WireGuard VPN server setup, peer configuration, key generation, split tunneling vs full tunnel routing, and remote access to a home network from mobile and laptop clients. Use when setting up WireGuard for remote access to a home network, or deciding between split and full tunnel routing.

**Location:** ECC\homelab-wireguard-vpn\SKILL.md

### [hookify-rules]
**Description:** Create and configure hookify rules — markdown files with YAML frontmatter that match bash, file, prompt, or stop events by regex or conditions and show warn/block messages to the agent. Use when creating a hookify rule, writing hook rule syntax, configuring hookify, or adding pattern guardrails such as blocking dangerous commands, .env edits, or debug code.

**Location:** ECC\hookify-rules\SKILL.md

### [i18n-sync]
**Description:** "Translate and synchronize application JSON locale files using source-key usage, project terminology, and focused validation. Use when adding keys or languages, updating source copy, or reviewing missing and stale translations."

**Location:** ECC\i18n-sync\SKILL.md

### [inherit-legacy-style]
**Description:** Prevent AI style drift on legacy projects by scanning the codebase for implicit conventions, resolving conflicts with the operator one at a time, and writing an enforceable .ai-style-rules.md (Golden Files, naming rules, DONTs) plus an optional CLAUDE.md hook. Use when onboarding an AI agent onto a hand-written legacy codebase or extracting a project's unwritten coding rules.

**Location:** ECC\inherit-legacy-style\SKILL.md

### [intent-driven-development]
**Description:** Turn ambiguous or high-impact product and engineering changes into scoped, verifiable acceptance criteria before or alongside implementation. Use when a user asks to clarify a feature, define acceptance criteria, de-risk a security/data/migration/integration change, prepare implementation requirements for another agent, or make a complex request testable. Do not trigger for trivial edits, straightforward fixes, active debugging, code review, or implementation requests whose acceptance conditions are already clear unless the user explicitly invokes this skill.

**Location:** ECC\intent-driven-development\SKILL.md

### [inventory-demand-planning]
**Description:** "Codified demand planning expertise for multi-location retailers: demand forecasting method selection, ABC/XYZ segmentation, safety stock and reorder-point optimization, promotional lift and post-promo dip estimation, and seasonal transition and markdown timing. Use when forecasting demand, setting safety stock, planning replenishment, managing promotions, or optimizing inventory levels."

**Location:** ECC\inventory-demand-planning\SKILL.md

### [investor-materials]
**Description:** Create and update pitch decks, one-pagers, investor memos, accelerator applications, financial models, and fundraising materials. Use when the user needs investor-facing documents, projections, use-of-funds tables, milestone plans, or materials that must stay internally consistent across multiple fundraising assets.

**Location:** ECC\investor-materials\SKILL.md

### [investor-outreach]
**Description:** Draft cold emails, warm intro blurbs, follow-ups, update emails, and investor communications for fundraising. Use when the user wants outreach to angels, VCs, strategic investors, or accelerators and needs concise, personalized, investor-facing messaging.

**Location:** ECC\investor-outreach\SKILL.md

### [ios-icon-gen]
**Description:** Generate iOS app icons as PNG imagesets for Xcode asset catalogs from SF Symbols (5000+ Apple-native) or Iconify API (275k+ open source icons from 200+ collections). Use when generating icons, creating icon assets, adding icons to asset catalog, or searching for icons for iOS projects.

**Location:** ECC\ios-icon-gen\SKILL.md

### [iterative-retrieval]
**Description:** Pattern for progressively refining context retrieval to solve the subagent context problem. Use when a subagent lacks the context it needs and retrieval must be refined across passes.

**Location:** ECC\iterative-retrieval\SKILL.md

### [ito-baskets]
**Description:** Read-only Itô basket and prediction-market data skill. Index the live basket catalog, compare a basket against user-supplied research or a watchlist, build a source-grounded market brief, or draft a non-executable planning worksheet. Use when a user asks to browse or index Itô baskets, compare a basket against notes or a thesis, research prediction-market events/venues/liquidity, or plan a basket or market idea without trading. Never advises, orders, trades, reserves, or executes.

**Location:** ECC\ito-baskets\SKILL.md

### [ito-compute]
**Description:** Query live GPU inventory, submit an authenticated Itô fixed-rate RFQ, inspect RFQ or procurement status, revoke device credentials, and run explicitly gated node qualification through the separately installed canonical CLI. Use when a user asks to find H100/H200 capacity, request a fixed compute rate, check Itô compute status, validate GPU nodes, revoke Itô access, or rent or purchase GPU compute and needs the supported boundary explained.

**Location:** ECC\ito-compute\SKILL.md

### [ito-inference]
**Description:** Inspect the availability of model serving on a completed Itô compute booking and, when the canonical backend becomes available, hand off an explicitly confirmed serving manifest. Use after ito-compute has booked GPU nodes and the user asks for an OpenAI-compatible endpoint, ito-serve, hosted Kimi, or self-hosted open-weights inference. ECC implements no serving stack of its own.

**Location:** ECC\ito-inference\SKILL.md

### [ito-training]
**Description:** Inspect the availability of ML training on a completed Itô compute booking and, when the canonical backend becomes available, hand off an explicitly confirmed training manifest. Use after ito-compute has booked GPU nodes and the user wants pre-training, fine-tuning, or RL on that metal. ECC implements no training stack of its own.

**Location:** ECC\ito-training\SKILL.md

### [java-coding-standards]
**Description:** "Java coding standards for Spring Boot and Quarkus services: naming, immutability, Optional usage, streams, exceptions, generics, CDI, reactive patterns, and project layout. Automatically applies framework-specific conventions. Use when writing or reviewing Java in a Spring Boot or Quarkus service."

**Location:** ECC\java-coding-standards\SKILL.md

### [jira-integration]
**Description:** Use this skill when retrieving Jira tickets, analyzing requirements, updating ticket status, adding comments, or transitioning issues. Provides Jira API patterns via MCP or direct REST calls.

**Location:** ECC\jira-integration\SKILL.md

### [jpa-patterns]
**Description:** JPA/Hibernate patterns for entity design, relationships, query optimization, transactions, auditing, indexing, pagination, and pooling in Spring Boot. Use when designing JPA entities or relationships, or when a Hibernate query, transaction, or N+1 problem needs fixing.

**Location:** ECC\jpa-patterns\SKILL.md

### [knowledge-ops]
**Description:** Knowledge base management, ingestion, sync, and retrieval across multiple storage layers (local files, MCP memory, vector stores, Git repos). Use when the user wants to save, organize, sync, deduplicate, or search across their knowledge systems.

**Location:** ECC\knowledge-ops\SKILL.md

### [kotlin-coroutines-flows]
**Description:** Kotlin Coroutines and Flow patterns for Android and KMP — structured concurrency, Flow operators, StateFlow, error handling, and testing. Use when writing coroutines or Flow code on Android or KMP, or debugging cancellation and concurrency.

**Location:** ECC\kotlin-coroutines-flows\SKILL.md

### [kotlin-exposed-patterns]
**Description:** JetBrains Exposed ORM patterns including DSL queries, DAO pattern, transactions, HikariCP connection pooling, Flyway migrations, and repository pattern. Use when working with the Exposed ORM — DSL or DAO queries, transactions, pooling, or migrations.

**Location:** ECC\kotlin-exposed-patterns\SKILL.md

### [kotlin-ktor-patterns]
**Description:** Ktor server patterns including routing DSL, plugins, authentication, Koin DI, kotlinx.serialization, WebSockets, and testApplication testing. Use when building a Ktor server — routing, plugins, auth, DI, serialization, or tests.

**Location:** ECC\kotlin-ktor-patterns\SKILL.md

### [kotlin-patterns]
**Description:** Idiomatic Kotlin patterns, best practices, and conventions for building robust, efficient, and maintainable Kotlin applications with coroutines, null safety, and DSL builders. Use when writing or reviewing Kotlin code and idiomatic structure or null safety is in question.

**Location:** ECC\kotlin-patterns\SKILL.md

### [kotlin-testing]
**Description:** Kotlin testing patterns with Kotest, MockK, coroutine testing, property-based testing, and Kover coverage. Follows TDD methodology with idiomatic Kotlin practices. Use when writing Kotlin tests with Kotest or MockK, or testing coroutines and checking coverage.

**Location:** ECC\kotlin-testing\SKILL.md

### [kubernetes-patterns]
**Description:** Kubernetes workload patterns, resource management, RBAC, probes, autoscaling, ConfigMap/Secret handling, and kubectl debugging for production-grade deployments. Use when writing or reviewing Kubernetes manifests, or debugging probes, RBAC, autoscaling, or resource limits.

**Location:** ECC\kubernetes-patterns\SKILL.md

### [laravel-patterns]
**Description:** Laravel architecture patterns, routing/controllers, Eloquent ORM, service layers, queues, events, caching, and API resources for production apps. Use when building or reviewing Laravel apps — controllers, Eloquent, service layers, queues, or API resources.

**Location:** ECC\laravel-patterns\SKILL.md

### [laravel-plugin-discovery]
**Description:** Discover and evaluate Laravel packages via LaraPlugins.io MCP. Use when the user wants to find plugins, check package health, or assess Laravel/PHP compatibility.

**Location:** ECC\laravel-plugin-discovery\SKILL.md

### [laravel-security]
**Description:** Laravel security best practices — authentication, authorization, Eloquent safety, CSRF, XSS prevention, API security, and secure deployment configurations. Use when reviewing Laravel auth, Eloquent safety, CSRF, XSS, API security, or deployment configuration.

**Location:** ECC\laravel-security\SKILL.md

### [laravel-tdd]
**Description:** Laravel testing strategies with PHPUnit, Pest, model factories, HTTP tests, Sanctum authentication testing, mocking, and coverage. Use when writing Laravel tests with PHPUnit or Pest, or driving a Laravel feature test-first.

**Location:** ECC\laravel-tdd\SKILL.md

### [laravel-verification]
**Description:** "Verification loop for Laravel projects: env checks, linting, static analysis, tests with coverage, security scans, and deployment readiness. Use when verifying a Laravel project before merge or deploy — lint, static analysis, tests, coverage, security."

**Location:** ECC\laravel-verification\SKILL.md

### [latency-critical-systems]
**Description:** Optimize and verify latency-sensitive systems — realtime dashboards, market data feeds, streaming agents, execution gateways, queues, and caches — by tracking p50/p95/p99 latency, freshness age, and queue depth, mapping hot paths, and running live readbacks. Use when p95 latency, throughput, or data freshness matters.

**Location:** ECC\latency-critical-systems\SKILL.md

### [lead-intelligence]
**Description:** AI-native lead intelligence and outreach pipeline. Replaces Apollo, Clay, and ZoomInfo with agent-powered signal scoring, mutual ranking, warm path discovery, source-derived voice modeling, and channel-specific outreach across email, LinkedIn, and X. Use when the user wants to find, qualify, and reach high-value contacts.

**Location:** ECC\lead-intelligence\SKILL.md

### [liquid-glass-design]
**Description:** iOS 26 Liquid Glass design system — dynamic glass material with blur, reflection, and interactive morphing for SwiftUI, UIKit, and WidgetKit. Use when building iOS 26 Liquid Glass UI in SwiftUI, UIKit, or WidgetKit.

**Location:** ECC\liquid-glass-design\SKILL.md

### [living-docs-governance]
**Description:** "Keep a long-lived project's documentation from rotting by assigning existing project docs clear constitution, map, status, and history roles, then wiring the active agent harness to those canonical sources. Use in the maintain phase when docs drift from code, agents lose context between sessions, or intentional removals keep being recreated. Prefer adopting the repository's current docs structure over creating new root files. 中文触发：文档治理、活文档、项目状态追踪、防文档漂移、项目地图、健康仪表盘、删除区、长期项目治理"

**Location:** ECC\living-docs-governance\SKILL.md

### [llm-trading-agent-security]
**Description:** Security patterns for autonomous trading agents with wallet or transaction authority. Covers prompt injection, spend limits, pre-send simulation, circuit breakers, MEV protection, and key handling. Use when an autonomous agent holds wallet or transaction authority and its limits, simulation, or key handling need review.

**Location:** ECC\llm-trading-agent-security\SKILL.md

### [logistics-exception-management]
**Description:** Codified freight-exception handling expertise for shipment delays, damages, losses, shortages, and carrier disputes, with escalation protocols, carrier-specific behaviors by mode, claims procedures, and eat-the-cost vs fight-the-claim judgment frameworks. Use when handling shipping exceptions, freight claims, delivery issues, or carrier disputes.

**Location:** ECC\logistics-exception-management\SKILL.md

### [loop-design-check]
**Description:** "Design a goal-oriented agent loop or review one for failure modes: spinning, Goodhart-gaming the verifier, or running a wrong answer to completion. Covers machine-decidable goals, loop types, plan/build/judge skeletons, and runaway prevention; mechanism wiring lives in autonomous-loops. Use when designing, writing, or checking an agent loop. 中文触发：写 loop、设计 loop、做一个 loop、检查 loop 对不对、loop 体检、loop 会不会跑飞、可判定目标、五个崩法、plan build judge。"

**Location:** ECC\loop-design-check\SKILL.md

### [mailtrap-email-integration]
**Description:** Guides agents through integrating transactional email sending via Mailtrap's Email API, including sandbox testing, domain verification, and API authentication. Use when implementing email-sending features, debugging delivery issues, or setting up safe dev/staging email testing.

**Location:** ECC\mailtrap-email-integration\SKILL.md

### [make-interfaces-feel-better]
**Description:** Apply concrete design-engineering details that make interfaces feel polished. Use when reviewing or improving UI spacing, typography, borders, shadows, motion, hit areas, icons, text wrapping, and interaction states.

**Location:** ECC\make-interfaces-feel-better\SKILL.md

### [manim-video]
**Description:** Build reusable Manim explainers for technical concepts, graphs, system diagrams, and product walkthroughs, then hand off to the wider ECC video stack if needed. Use when the user wants a clean animated explainer rather than a generic talking-head script.

**Location:** ECC\manim-video\SKILL.md

### [market-research]
**Description:** Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizing, competitor comparisons, fund research, technology scans, or research that informs business decisions.

**Location:** ECC\market-research\SKILL.md

### [marketing-campaign]
**Description:** End-to-end marketing campaign planning and execution. Covers audience research, positioning, campaign angle definition, landing page copy, email sequences, social posts, ad copy, short-form video scripts, and content calendars. Use as the orchestration layer for multi-channel product launches. Use when planning or executing a multi-channel product launch, or producing landing page, email, social, or ad copy.

**Location:** ECC\marketing-campaign\SKILL.md

### [master-agreement-generator]
**Description:** Generate review drafts of counterparty master agreements from one template plus a JSON spec, with role-selected clauses and a Schedule A workflow limited to the executed agreement's notice authority. Use when you need reproducible drafting and separately reviewed execution preparation.

**Location:** ECC\master-agreement-generator\SKILL.md

### [mcp-dependency-review]
**Description:** Statically review MCP configuration for mutable package references before approval or CI, without executing discovered MCP servers. Use when reviewing .mcp.json, Cursor, VS Code, Claude, Windsurf, or other repo-scoped MCP config.

**Location:** ECC\mcp-dependency-review\SKILL.md

### [mcp-server-patterns]
**Description:** Build MCP servers with Node/TypeScript SDK — tools, resources, prompts, Zod validation, stdio vs Streamable HTTP. Use Context7 or official MCP docs for latest API. Use when building or debugging an MCP server — tools, resources, prompts, validation, or transport choice.

**Location:** ECC\mcp-server-patterns\SKILL.md

### [messages-ops]
**Description:** Evidence-first live messaging workflow for ECC. Use when the user wants to read texts or DMs, recover a recent one-time code, inspect a thread before replying, or prove which message source was actually checked.

**Location:** ECC\messages-ops\SKILL.md

### [ml-adoption-playbook]
**Description:** End-to-end methodology for AI agents and software engineers to add machine learning algorithms to existing non-ML codebases. Covers problem framing, data readiness, architectural decoupling, and baseline model integration. Use when adding a machine learning capability to a codebase that has none, from problem framing through a baseline model.

**Location:** ECC\ml-adoption-playbook\SKILL.md

### [mle-workflow]
**Description:** Production machine-learning engineering workflow for data contracts, reproducible training, model evaluation, deployment, monitoring, and rollback. Use when building, reviewing, or hardening ML systems beyond one-off notebooks.

**Location:** ECC\mle-workflow\SKILL.md

### [module-regression]
**Description:** >-

**Location:** ECC\module-regression\SKILL.md

### [motion-advanced]
**Description:** Advanced motion patterns for React / Next.js — drag & drop, gestures, text animations, SVG path drawing, custom hooks, imperative sequences (useAnimate), loaders, and the full API decision tree. Requires motion-foundations. Use when building drag and drop, gestures, text or SVG animation, or imperative animation sequences in React or Next.js.

**Location:** ECC\motion-advanced\SKILL.md

### [motion-foundations]
**Description:** Motion tokens, spring presets, performance rules, device adaptation, accessibility enforcement, and SSR safety for React / Next.js using motion/react. Foundation layer — all other motion skills depend on this. Use when setting up motion tokens, spring presets, reduced-motion handling, or SSR-safe animation in React or Next.js.

**Location:** ECC\motion-foundations\SKILL.md

### [motion-patterns]
**Description:** Production-ready animation patterns for React / Next.js — button, modal, toast, stagger, page transitions, exit animations, scroll, and layout — built on motion-foundations tokens and springs. Use when animating a specific UI element in React or Next.js — button, modal, toast, stagger, page transition, or scroll.

**Location:** ECC\motion-patterns\SKILL.md

### [mybatis-patterns]
**Description:** MyBatis and MyBatis-Spring patterns for mapper design, XML and annotation SQL, result mapping, dynamic SQL safety, transactions, batching, pagination, and query performance. Use when building or reviewing Java persistence code with MyBatis, Spring Boot, MyBatis-Spring, or MyBatis-based legacy applications.

**Location:** ECC\mybatis-patterns\SKILL.md

### [mysql-patterns]
**Description:** MySQL and MariaDB schema, query, indexing, transaction, replication, and connection-pool patterns for production backends. Use when designing MySQL or MariaDB schemas and indexes, or when a query, transaction, or replica lags.

**Location:** ECC\mysql-patterns\SKILL.md

### [nanoclaw-repl]
**Description:** Operate and extend NanoClaw, ECC's zero-dependency session-aware REPL, with persistent markdown-backed sessions and slash commands for model switching, skill loading, session branching, cross-session search, history compaction, and export. Use when running or extending scripts/claw.js, or when resuming, branching, compacting, searching, or exporting a NanoClaw session.

**Location:** ECC\nanoclaw-repl\SKILL.md

### [nasiko-control-plane]
**Description:** Manage the experimental Nasiko CLI lifecycle through ECC — read-only status checks, consent-gated install of the pinned qualified version with dry-run preview, and ownership-checked uninstall, under explicit telemetry and secrets boundaries. Use when the user asks to install, inspect, or remove the Nasiko CLI or check whether it is present.

**Location:** ECC\nasiko-control-plane\SKILL.md

### [nestjs-patterns]
**Description:** NestJS architecture patterns for modules, controllers, providers, DTO validation, guards, interceptors, config, and production-grade TypeScript backends. Use when building or reviewing a NestJS backend — modules, providers, DTO validation, guards, or interceptors.

**Location:** ECC\nestjs-patterns\SKILL.md

### [netmiko-ssh-automation]
**Description:** Safe Python Netmiko patterns for read-only collection, bounded batch SSH, TextFSM parsing, guarded config changes, timeouts, and network automation error handling. Use when automating network device access with Python Netmiko, whether collecting state or pushing guarded config changes.

**Location:** ECC\netmiko-ssh-automation\SKILL.md

### [network-bgp-diagnostics]
**Description:** Diagnostics-only BGP troubleshooting patterns for neighbor state, route exchange, prefix policy, AS path inspection, and safe evidence collection. Use when a BGP neighbor is down, routes are missing, or prefix policy and AS path need inspection.

**Location:** ECC\network-bgp-diagnostics\SKILL.md

### [network-config-validation]
**Description:** Pre-deployment checks for router and switch configuration, including dangerous commands, duplicate addresses, subnet overlaps, stale references, management-plane risk, and IOS-style security hygiene. Use when reviewing a router or switch configuration before deployment.

**Location:** ECC\network-config-validation\SKILL.md

### [network-interface-health]
**Description:** Diagnose interface errors, drops, CRCs, duplex mismatches, flapping, speed negotiation issues, and counter trends on routers, switches, and Linux hosts. Use when an interface shows errors, drops, CRCs, flapping, or a duplex or speed mismatch.

**Location:** ECC\network-interface-health\SKILL.md

### [nextjs-turbopack]
**Description:** Next.js 16+ and Turbopack guidance — incremental Rust bundling, file-system caching, faster dev startup and HMR, Turbopack vs webpack tradeoffs, and the middleware.ts to proxy.ts filename change. Use when developing or debugging Next.js 16+ apps, diagnosing slow dev startup or hot reload, choosing between bundlers, or reviewing middleware/proxy file naming.

**Location:** ECC\nextjs-turbopack\SKILL.md

### [nodejs-keccak256]
**Description:** Prevent Ethereum hashing bugs in JavaScript and TypeScript. Node's sha3-256 is NIST SHA3, not Ethereum Keccak-256, and silently breaks selectors, signatures, storage slots, and address derivation. Use when hashing for Ethereum in JavaScript or TypeScript, or when a selector, signature, storage slot, or derived address is wrong.

**Location:** ECC\nodejs-keccak256\SKILL.md

### [nutrient-document-processing]
**Description:** Process, convert, OCR, extract, redact, sign, and fill documents using the Nutrient DWS API. Works with PDFs, DOCX, XLSX, PPTX, HTML, and images. Use when converting, OCRing, extracting from, redacting, signing, or filling documents via the Nutrient DWS API.

**Location:** ECC\nutrient-document-processing\SKILL.md

### [nuxt4-patterns]
**Description:** Nuxt 4 app patterns for hydration safety, performance, route rules, lazy loading, and SSR-safe data fetching with useFetch and useAsyncData. Use when building or reviewing a Nuxt 4 app, or debugging hydration mismatches and SSR-safe data fetching.

**Location:** ECC\nuxt4-patterns\SKILL.md

### [openclaw-persona-forge]
**Description:** "为 OpenClaw AI Agent 锻造完整的龙虾灵魂方案。根据用户偏好或随机抽卡， 输出身份定位、灵魂描述(SOUL.md)、角色化底线规则、名字和头像生图提示词。 如当前环境提供已审核的生图 skill，可自动生成统一风格头像图片。 当用户需要创建、设计或定制 OpenClaw 龙虾灵魂时使用。 不适用于：微调已有 SOUL.md、非 OpenClaw 平台的角色设计、纯工具型无性格 Agent。 触发词：龙虾灵魂、虾魂、OpenClaw 灵魂、养虾灵魂、龙虾角色、龙虾定位、 龙虾剧本杀角色、龙虾游戏角色、龙虾 NPC、龙虾性格、龙虾背景故事、 lobster soul、lobster character、抽卡、随机龙虾、龙虾 SOUL、gacha。 Use when creating, designing, or customizing an OpenClaw lobster persona — identity, SOUL.md, name, or avatar prompt."

**Location:** ECC\openclaw-persona-forge\SKILL.md

### [opensource-pipeline]
**Description:** "Open-source pipeline: fork, sanitize, and package private projects for safe public release. Chains 3 agents (forker, sanitizer, packager). Triggers: '/opensource', 'open source this', 'make this public', 'prepare for open source'. Use when a private project must be forked, stripped of secrets, and packaged for public release."

**Location:** ECC\opensource-pipeline\SKILL.md

### [operator-approval-loop]
**Description:** Operator approval contract with internal filing notices for agent-drafted outbound messages, hashed drafts, epoch-keyed decisions, durable delivery claims and receipts, and a pre-draft baseline gate. Use when an agent drafts messages to external counterparties and a human operator must approve, reject, or steer each send before it leaves.

**Location:** ECC\operator-approval-loop\SKILL.md

### [orch-add-feature]
**Description:** Orchestrate building a brand-new feature end to end — research, plan, TDD implementation, review, and gated commit — by delegating each phase to the matching ECC agent. Use when adding a capability that does not exist yet.

**Location:** ECC\orch-add-feature\SKILL.md

### [orch-build-mvp]
**Description:** Orchestrate bootstrapping a working MVP from a design or spec document — ingest the SDD/PRD, plan thin vertical slices, scaffold the first end-to-end slice, then drive a generator-evaluator build loop with review and gated feat commits. Use when a design or spec document must become a running MVP through planned vertical slices.

**Location:** ECC\orch-build-mvp\SKILL.md

### [orch-change-feature]
**Description:** Orchestrate altering an existing, working feature to new desired behavior — update its tests to the new spec, change the implementation to match, review, and gated commit. Use when behavior is not broken but should be different.

**Location:** ECC\orch-change-feature\SKILL.md

### [orch-fix-defect]
**Description:** Orchestrate fixing a bug — reproduce it as a failing regression test, fix to green, review, and gated commit — by delegating each phase to the matching ECC agent. Use when existing behavior is broken or wrong.

**Location:** ECC\orch-fix-defect\SKILL.md

### [orch-pipeline]
**Description:** Shared orchestration engine behind the orch-* skill family — the gated Research-Plan-TDD-Review-Commit pipeline, size classifier, agent and command map, and two human gates (plan approval, commit confirmation) that orch-* operation skills delegate to. Use indirectly via orch-add-feature, orch-fix-defect, orch-change-feature, orch-refine-code, or orch-build-mvp; read directly only when adding an orch operation or tuning shared phases.

**Location:** ECC\orch-pipeline\SKILL.md

### [orch-refine-code]
**Description:** Orchestrate a behavior-preserving refactor — confirm tests are green, restructure without changing behavior, keep tests green, review, and gated commit. Use when the structure should improve but behavior must not change.

**Location:** ECC\orch-refine-code\SKILL.md

### [osint-investigation]
**Description:** Sparse-clue OSINT investigation methodology for extracting overlooked leads, connecting fragmented evidence, and testing explanations across sources. Use for multi-step CTF challenges, image/video geolocation, event reconstruction, public-account and entity verification, artifact interpretation, infrastructure research, or stalled investigations.

**Location:** ECC\osint-investigation\SKILL.md

### [parallel-execution-optimizer]
**Description:** Speed up a task by turning it into a dependency graph of parallel lanes with a lane matrix, batched reads and checks, write surfaces isolated by file, worktree, branch, or service, and a final verification table. Use when the user wants a task done much faster through parallel work, concurrent agents, batched tool calls, isolated worktrees, or many independent verification lanes without losing correctness.

**Location:** ECC\parallel-execution-optimizer\SKILL.md

### [perl-patterns]
**Description:** Modern Perl 5.36+ idioms, best practices, and conventions for building robust, maintainable Perl applications. Use when writing or reviewing modern Perl 5.36+ code.

**Location:** ECC\perl-patterns\SKILL.md

### [perl-security]
**Description:** Comprehensive Perl security covering taint mode, input validation, safe process execution, DBI parameterized queries, web security (XSS/SQLi/CSRF), and perlcritic security policies. Use when reviewing Perl input handling, process execution, DBI queries, or web-facing code.

**Location:** ECC\perl-security\SKILL.md

### [perl-testing]
**Description:** Perl testing patterns using Test2::V0, Test::More, prove runner, mocking, coverage with Devel::Cover, and TDD methodology. Use when writing Perl tests with Test2::V0 or Test::More, or measuring coverage.

**Location:** ECC\perl-testing\SKILL.md

### [plan-canvas]
**Description:** Open plans and HTML artifacts in a local browser canvas where the human annotates elements, chats, and approves or requests changes without leaving the page. Use when presenting a plan for review, or when feedback like "move this, change that" is easier pointed at than typed.

**Location:** ECC\plan-canvas\SKILL.md

### [plan-orchestrate]
**Description:** Read a plan document, decompose it into steps, classify each step, and emit the ready-to-paste ECC slash command for that step, carrying the step identifier and scope in the command's own documented argument form. Generative only — never invokes commands itself and never claims to control what a command runs internally. Steps whose command cannot carry plan scope fail closed instead of being emitted. Use when the user has a multi-step plan and wants the right command for each step without picking it by hand.

**Location:** ECC\plan-orchestrate\SKILL.md

### [plankton-code-quality]
**Description:** "Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. Use when setting up write-time formatting, linting, or auto-fix hooks on file edits."

**Location:** ECC\plankton-code-quality\SKILL.md

### [postgres-patterns]
**Description:** PostgreSQL database patterns for query optimization, schema design, indexing, and security. Based on Supabase best practices. Use when designing PostgreSQL schemas, indexes, or RLS policies, or when a query is too slow.

**Location:** ECC\postgres-patterns\SKILL.md

### [prediction-market-oracle-research]
**Description:** Research prediction markets as data sources or oracle signals for products, agents, dashboards, and corporate decision intelligence. Use for source-grounded analysis of market-implied probabilities, caveats, and integration patterns without investment advice. Use when evaluating prediction markets as a data source or oracle signal for a product, agent, or dashboard.

**Location:** ECC\prediction-market-oracle-research\SKILL.md

### [prediction-market-risk-review]
**Description:** Review prediction-market, basket, oracle, and trading-agent workflows for compliance, safety, data-quality, privacy, and execution risk. Use before any workflow handles venue auth, user portfolio data, API keys, or trade planning.

**Location:** ECC\prediction-market-risk-review\SKILL.md

### [prisma-patterns]
**Description:** Prisma ORM patterns for TypeScript backends — schema design, query optimization, transactions, pagination, and critical traps like updateMany returning count not records, $transaction timeouts, migrate dev resetting the DB, @updatedAt skipped on bulk writes, and serverless connection exhaustion. Use when writing a Prisma schema or query, or debugging transactions, migrations, or serverless connection limits.

**Location:** ECC\prisma-patterns\SKILL.md

### [product-capability]
**Description:** Translate PRD intent, roadmap asks, or product discussions into an implementation-ready capability plan that exposes constraints, invariants, interfaces, and unresolved decisions before multi-service work starts. Use when the user needs an ECC-native PRD-to-SRS lane instead of vague planning prose.

**Location:** ECC\product-capability\SKILL.md

### [product-lens]
**Description:** Validate the why before building through four product diagnostics — a YC-style product diagnostic that produces PRODUCT-BRIEF.md with a go/no-go recommendation, a founder review scoring product-market-fit signals, a user journey audit measuring time-to-value, and ICE feature prioritization. Use when pressure-testing product direction, choosing between features, sanity-checking a launch, or converting a vague idea into a product brief.

**Location:** ECC\product-lens\SKILL.md

### [production-audit]
**Description:** Local-evidence production readiness audit for shipped apps, pre-launch reviews, post-merge checks, and "what breaks in prod?" questions without sending repo data to an external audit service. Use when auditing production readiness before launch, after a merge, or when asked what breaks in prod.

**Location:** ECC\production-audit\SKILL.md

### [production-scheduling]
**Description:** Codified expertise for production scheduling, job sequencing, line balancing, changeover optimization, and bottleneck resolution in discrete and batch manufacturing. Informed by production schedulers with 15+ years experience. Includes TOC/drum-buffer-rope, SMED, OEE analysis, disruption response frameworks, and ERP/MES interaction patterns. Use when scheduling production, resolving bottlenecks, optimizing changeovers, responding to disruptions, or balancing manufacturing lines.

**Location:** ECC\production-scheduling\SKILL.md

### [project-flow-ops]
**Description:** Operate execution flow across GitHub and Linear by triaging issues and pull requests, linking active work, and keeping GitHub public-facing while Linear remains the internal execution layer. Use when the user wants backlog control, PR triage, or GitHub-to-Linear coordination.

**Location:** ECC\project-flow-ops\SKILL.md

### [prompt-caching-strategy]
**Description:** >-

**Location:** ECC\prompt-caching-strategy\SKILL.md

### [prompt-optimizer]
**Description:** Analyze draft prompts, detect intent and missing context, match ECC commands, skills, and agents, and output a ready-to-paste optimized prompt with diagnosis and rationale — advisory only, never executes the task. Use when the user says 'optimize prompt', 'improve my prompt', 'rewrite this prompt', 'help me prompt', 优化prompt, 改进prompt, 怎么写prompt, or 帮我优化这个指令; not for requests to optimize code or performance.

**Location:** ECC\prompt-optimizer\SKILL.md

### [python-patterns]
**Description:** Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications. Use when writing or reviewing Python code and idiomatic structure, typing, or PEP 8 is in question.

**Location:** ECC\python-patterns\SKILL.md

### [python-testing]
**Description:** Python testing strategies using pytest, TDD methodology, fixtures, mocking, parametrization, and coverage requirements. Use when writing pytest tests — fixtures, mocks, parametrization, or coverage.

**Location:** ECC\python-testing\SKILL.md

### [pytorch-patterns]
**Description:** PyTorch deep learning patterns and best practices for building robust, efficient, and reproducible training pipelines, model architectures, and data loading. Use when writing or reviewing PyTorch training loops, model architectures, or data loading, or when a run will not reproduce.

**Location:** ECC\pytorch-patterns\SKILL.md

### [quality-nonconformance]
**Description:** "Quality control and non-conformance management for regulated manufacturing (FDA 21 CFR 820, IATF 16949, AS9100): NCR lifecycle and disposition, 5-Why/Ishikawa/fault-tree/8D root cause analysis, CAPA systems, SPC interpretation, AQL sampling, and supplier quality audits. Use when investigating non-conformances, performing root cause analysis, managing CAPAs, interpreting SPC data, or handling supplier quality issues."

**Location:** ECC\quality-nonconformance\SKILL.md

### [quarkus-patterns]
**Description:** Quarkus 3.x LTS architecture patterns with Camel for messaging, RESTful API design, CDI services, data access with Panache, and async processing. Use for Java Quarkus backend work with event-driven architectures. Use when building or reviewing a Quarkus service, especially with Camel messaging or Panache data access.

**Location:** ECC\quarkus-patterns\SKILL.md

### [quarkus-security]
**Description:** "Quarkus security implementation patterns: JWT and OIDC authentication, @RolesAllowed RBAC and SecurityIdentity checks, Bean Validation and custom validators, parameterized Panache queries, BCrypt password hashing, CORS and security headers, rate limiting, audit logging, Vault or environment-variable secrets, and dependency CVE scanning. Use when adding authentication or authorization, validating input, managing secrets, or hardening a Quarkus application."

**Location:** ECC\quarkus-security\SKILL.md

### [quarkus-tdd]
**Description:** Test-driven development for Quarkus 3.x LTS using JUnit 5, Mockito, REST Assured, Camel testing, and JaCoCo. Use when adding features, fixing bugs, or refactoring event-driven services.

**Location:** ECC\quarkus-tdd\SKILL.md

### [quarkus-verification]
**Description:** "Verification loop for Quarkus projects: build, static analysis (Checkstyle, PMD, SpotBugs), tests with JaCoCo coverage, OWASP dependency and container security scans, GraalVM native compilation, health checks, and config validation. Use when verifying a Quarkus service before a PR, after major refactoring or dependency upgrades, or pre-deploy."

**Location:** ECC\quarkus-verification\SKILL.md

### [rails-patterns]
**Description:** Ruby on Rails framework patterns for Rails 7.1+ and 8.x apps. Covers the directory contract, skinny controllers with service objects, form objects, query objects, idiomatic ActiveRecord, background jobs, ViewComponent, Hotwire, and the Rails 8 Solid stack. Use when building or reviewing Rails apps, controllers, models, services, jobs, or views.

**Location:** ECC\rails-patterns\SKILL.md

### [ralphinho-rfc-pipeline]
**Description:** Split an RFC into a multi-agent execution DAG — decompose into work units with dependencies and acceptance tests, run research, plan, implement, test, and review per unit, then merge through a queue with re-based branches and final system verification. Use when a feature is too large for a single agent pass, orchestrating RFC-driven multi-agent execution, or managing merge queues across agent-built units.

**Location:** ECC\ralphinho-rfc-pipeline\SKILL.md

### [react-native-patterns]
**Description:** React Native and Expo app patterns — Expo Router navigation, state separation (server/client/route/form), TanStack Query data fetching with Zod, performant lists, NativeWind/StyleSheet styling, native APIs, and secure storage. Use when building or editing React Native / Expo screens, components, navigation, or data layers.

**Location:** ECC\react-native-patterns\SKILL.md

### [react-patterns]
**Description:** React 18/19 patterns including hooks discipline, server/client component boundaries, Suspense + error boundaries, form actions, data fetching, state management decision trees, and accessibility-first composition. Use when writing or reviewing React components.

**Location:** ECC\react-patterns\SKILL.md

### [react-performance]
**Description:** React and Next.js performance optimization patterns adapted from Vercel Engineering's React Best Practices (https://github.com/vercel-labs/agent-skills). Organizes 70+ rules across 8 priority categories — waterfalls, bundle size, server-side, client fetching, re-render, rendering, JS micro-perf, advanced. Use when writing, reviewing, or refactoring React/Next.js code for performance.

**Location:** ECC\react-performance\SKILL.md

### [react-testing]
**Description:** React component testing with React Testing Library, Vitest/Jest, MSW for network mocking, accessibility assertions with axe, and the decision boundary between component tests and Playwright/Cypress end-to-end runs. Use when writing or fixing tests for React components, hooks, or pages.

**Location:** ECC\react-testing\SKILL.md

### [recsys-pipeline-architect]
**Description:** Design composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framework popularized by xAI's open-sourced For You algorithm. Use this skill whenever the user is building any system that picks "the top K items for a (user, context)" — social feeds, content CMSs, RAG rerankers, task prioritizers, notification triage, search reranking, ad ranking.

**Location:** ECC\recsys-pipeline-architect\SKILL.md

### [recursive-decision-ledger]
**Description:** Run repeated rollouts ("Prime Gauss" style recursive prompting) while keeping an append-only decision ledger of trials, marks, coherence checks, and promotion gates, so recursive confidence never auto-approves live trading, deploy, or destructive actions. Use when the user asks for repeated rollouts, marked decision processes, high-dimensional search, stochastic optimization, local-optima exploration, ensemble comparison, or recursive reasoning with a visible evidence trail.

**Location:** ECC\recursive-decision-ledger\SKILL.md

### [redis-patterns]
**Description:** Redis data structure patterns, caching strategies, distributed locks, rate limiting, pub/sub, and connection management for production applications. Use when adding caching, a distributed lock, rate limiting, or pub/sub with Redis, or when key design needs review.

**Location:** ECC\redis-patterns\SKILL.md

### [regex-vs-llm-structured-text]
**Description:** Decision framework for parsing structured text (quizzes, forms, invoices, receipts, tables) with a hybrid regex-first pipeline — regex extraction handles 95%+ cheaply, a confidence scorer flags low-confidence items, and an LLM validator fixes only the edge cases. Use when choosing between regex and LLM for text extraction, building a cheap document parser, or optimizing extraction cost and accuracy.

**Location:** ECC\regex-vs-llm-structured-text\SKILL.md

### [remotion-video-creation]
**Description:** Best practices for Remotion - Video creation in React. 29 domain-specific rules covering 3D, animations, audio, captions, charts, transitions, and more. Use when building video in React with Remotion — animations, audio, captions, charts, or transitions.

**Location:** ECC\remotion-video-creation\SKILL.md

### [repo-scan]
**Description:** Bootstrap pointer that installs the external repo-scan skill from a pinned, reviewable commit. Use when repo-scan must be installed before running its cross-stack source-code asset audit; this ECC pointer does not perform the audit itself.

**Location:** ECC\repo-scan\SKILL.md

### [research-ops]
**Description:** Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any supplied local context.

**Location:** ECC\research-ops\SKILL.md

### [returns-reverse-logistics]
**Description:** Codified expertise for returns authorization, receipt and inspection, disposition decisions, refund processing, fraud detection, and warranty claims management. Informed by returns operations managers with 15+ years experience. Includes grading frameworks, disposition economics, fraud pattern recognition, and vendor recovery processes. Use when handling product returns, reverse logistics, refund decisions, return fraud detection, or warranty claims.

**Location:** ECC\returns-reverse-logistics\SKILL.md

### [rules-distill]
**Description:** "Scan skills to extract cross-cutting principles and distill them into rules — append, revise, or create new rule files. Use when the same principle keeps recurring across skills and belongs in a rule file instead."

**Location:** ECC\rules-distill\SKILL.md

### [rust-patterns]
**Description:** Idiomatic Rust patterns, ownership, error handling, traits, concurrency, and best practices for building safe, performant applications. Use when writing or reviewing Rust code and ownership, error handling, traits, or concurrency is in question.

**Location:** ECC\rust-patterns\SKILL.md

### [rust-testing]
**Description:** Rust testing patterns including unit tests, integration tests, async testing, property-based testing, mocking, and coverage. Follows TDD methodology. Use when writing Rust tests — unit, integration, async, property-based, or coverage.

**Location:** ECC\rust-testing\SKILL.md

### [safety-guard]
**Description:** "Guard against destructive operations with three modes: Careful intercepts dangerous commands (rm -rf, git push --force, DROP TABLE) for confirmation, Freeze locks writes to one directory, and Guard combines both via PreToolUse hooks. Use when working on production systems, running agents autonomously, restricting edits to a directory, or during migrations, deploys, and data changes."

**Location:** ECC\safety-guard\SKILL.md

### [santa-method]
**Description:** "Multi-agent adversarial verification: two independent reviewers with the same rubric must both pass before output ships, with a fix-and-re-review convergence loop and human escalation cap. Use when gating publishing, production deploys, compliance or brand-sensitive content, or hallucination-prone claims before they ship."

**Location:** ECC\santa-method\SKILL.md

### [scientific-db-pubmed-database]
**Description:** Direct PubMed and NCBI E-utilities search workflows for biomedical literature, MeSH queries, PMID lookup, citation retrieval, and API-backed literature monitoring. Use when a task needs biomedical literature from PubMed rather than general web search.

**Location:** ECC\scientific-db-pubmed-database\SKILL.md

### [scientific-db-uspto-database]
**Description:** USPTO patent and trademark data workflow for official record lookup, PatentSearch queries, TSDR checks, assignment data, and reproducible IP research logs. Use when a task needs official United States patent or trademark records from USPTO systems.

**Location:** ECC\scientific-db-uspto-database\SKILL.md

### [scientific-pkg-gget]
**Description:** gget CLI and Python workflow for quick genomic database queries, sequence lookup, BLAST-style searches, enrichment checks, and reproducible bioinformatics evidence logs. Use when a task needs quick bioinformatics lookup across genomic reference databases with the gget CLI or Python package.

**Location:** ECC\scientific-pkg-gget\SKILL.md

### [scientific-thinking-literature-review]
**Description:** Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, and evidence logging. Use when the task is to find, screen, synthesize, and cite a body of academic or technical literature.

**Location:** ECC\scientific-thinking-literature-review\SKILL.md

### [scientific-thinking-scholar-evaluation]
**Description:** Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback. Use when evaluating academic or scientific work — papers, proposals, methods sections, or evidence quality — against a repeatable rubric.

**Location:** ECC\scientific-thinking-scholar-evaluation\SKILL.md

### [search-first]
**Description:** "Research-before-coding workflow: search npm/PyPI, MCP servers, skills, and GitHub for existing tools before writing custom code, then adopt, extend, or build. Launches the researcher agent for non-trivial needs. Use when starting a feature, adding a dependency or integration, or about to write a utility that may already exist."

**Location:** ECC\search-first\SKILL.md

### [security-bounty-hunter]
**Description:** Hunt for exploitable, bounty-worthy security issues in repositories. Focuses on remotely reachable vulnerabilities that qualify for real reports instead of noisy local-only findings. Use when hunting reportable, remotely reachable vulnerabilities in a repository.

**Location:** ECC\security-bounty-hunter\SKILL.md

### [security-review]
**Description:** Use this skill when adding authentication, handling user input, working with secrets, creating API endpoints, or implementing payment/sensitive features. Provides comprehensive security checklist and patterns.

**Location:** ECC\security-review\SKILL.md

### [security-scan]
**Description:** Scan your Claude Code configuration (.claude/ directory) for security vulnerabilities, misconfigurations, and injection risks using AgentShield. Checks CLAUDE.md, settings.json, MCP servers, hooks, and agent definitions. Use when auditing a .claude/ directory — CLAUDE.md, settings.json, MCP servers, hooks, or agent definitions.

**Location:** ECC\security-scan\SKILL.md

### [seo]
**Description:** Audit, plan, and implement SEO improvements across technical SEO, on-page optimization, structured data, Core Web Vitals, and content strategy. Use when the user wants better search visibility, SEO remediation, schema markup, sitemap/robots work, or keyword mapping.

**Location:** ECC\seo\SKILL.md

### [skill-comply]
**Description:** Visualize whether skills, rules, and agent definitions are actually followed — auto-generates scenarios at 3 prompt strictness levels, runs agents, classifies behavioral sequences, and reports compliance rates with full tool call timelines. Use when checking whether agents actually follow the skills, rules, and definitions they were given, rather than assuming they do.

**Location:** ECC\skill-comply\SKILL.md

### [skill-host-compat]
**Description:** Lint ECC skills for Codex/Cursor-safe frontmatter and Claude-only substitutions before a skill PR.

**Location:** ECC\skill-host-compat\SKILL.md

### [skill-scout]
**Description:** Search existing local, marketplace, GitHub, and web skill sources before creating a new skill. Use when the user wants to create, build, fork, or find a skill for a workflow.

**Location:** ECC\skill-scout\SKILL.md

### [skill-stocktake]
**Description:** "Use when auditing Claude skills and commands for quality. Supports Quick Scan (changed skills only) and Full Stocktake modes with sequential subagent batch evaluation."

**Location:** ECC\skill-stocktake\SKILL.md

### [social-graph-ranker]
**Description:** Weighted social-graph ranking for warm intro discovery, bridge scoring, and network gap analysis across X and LinkedIn. Use when the user wants the reusable graph-ranking engine itself, not the broader outreach or network-maintenance workflow layered on top of it.

**Location:** ECC\social-graph-ranker\SKILL.md

### [social-publisher]
**Description:** Agent-driven scheduling and publishing of social media posts across 13 platforms via SocialClaw. Use when the user wants to publish to X, LinkedIn, Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube, Reddit, WordPress, or Pinterest — or when managing campaigns, uploading media, or monitoring post delivery status.

**Location:** ECC\social-publisher\SKILL.md

### [springboot-patterns]
**Description:** Spring Boot architecture patterns, REST API design, layered services, data access, caching, async processing, and logging. Use for Java Spring Boot backend work. Use when building or reviewing a Spring Boot backend — REST layer, services, data access, caching, or async work.

**Location:** ECC\springboot-patterns\SKILL.md

### [springboot-security]
**Description:** Spring Security best practices for authn/authz, validation, CSRF, secrets, headers, rate limiting, and dependency security in Java Spring Boot services. Use when reviewing Spring Security authn/authz, validation, CSRF, secrets, headers, or rate limiting.

**Location:** ECC\springboot-security\SKILL.md

### [springboot-tdd]
**Description:** Test-driven development for Spring Boot using JUnit 5, Mockito, MockMvc, Testcontainers, and JaCoCo. Use when adding features, fixing bugs, or refactoring.

**Location:** ECC\springboot-tdd\SKILL.md

### [springboot-verification]
**Description:** Run the full Spring Boot verification loop — Maven or Gradle build, SpotBugs, PMD, and Checkstyle static analysis, unit and Testcontainers integration tests with JaCoCo coverage, OWASP dependency and secret scans, and diff review — producing a pass/fail readiness report. Use when preparing a Spring Boot pull request, validating coverage thresholds, or running pre-deploy verification.

**Location:** ECC\springboot-verification\SKILL.md

### [story-lifecycle]
**Description:** Manage a file-based epic → story → sprint development loop without requiring an external project management tool. Creates and tracks epics, breaks them into user stories, assigns them to sprints, and drives implementation story by story. Use when starting a new feature initiative or when the team has no Jira/Linear/Taiga but needs structured delivery tracking.

**Location:** ECC\story-lifecycle\SKILL.md

### [strategic-compact]
**Description:** Suggests manual context compaction at logical intervals to preserve context through task phases rather than arbitrary auto-compaction. Use when a session is approaching a context limit and a task phase is a natural place to compact.

**Location:** ECC\strategic-compact\SKILL.md

### [swift-actor-persistence]
**Description:** Thread-safe data persistence in Swift using actors — in-memory cache with file-backed storage, eliminating data races by design. Use when persisting data in Swift and a data race or thread-safety problem needs designing out.

**Location:** ECC\swift-actor-persistence\SKILL.md

### [swift-concurrency-6-2]
**Description:** Swift 6.2 Approachable Concurrency — single-threaded by default, @concurrent for explicit background offloading, isolated conformances for main actor types. Use when adopting Swift 6.2 concurrency — offloading with @concurrent or resolving main-actor isolation.

**Location:** ECC\swift-concurrency-6-2\SKILL.md

### [swift-protocol-di-testing]
**Description:** Protocol-based dependency injection for testable Swift code — mock file system, network, and external APIs using focused protocols and Swift Testing. Use when Swift code needs testing and file system, network, or external APIs must be mocked.

**Location:** ECC\swift-protocol-di-testing\SKILL.md

### [swiftui-patterns]
**Description:** SwiftUI architecture patterns, state management with @Observable, view composition, navigation, performance optimization, and modern iOS/macOS UI best practices. Use when building or reviewing SwiftUI views, @Observable state, navigation, or render performance.

**Location:** ECC\swiftui-patterns\SKILL.md

### [taste]
**Description:** Creative-direction layer for music videos and short-form edits in the angelcore / cloud-trance / hyperpop family — a named-genre aesthetic vocabulary, mood + color + light system, beat-synced editing grammar, and a pipeline chaining ECC's video skills from b-roll generation to distribution. Use when a video must feel intentional rather than merely functional — music videos, fancams, moodboard-driven reels, or giving AI-generated b-roll a coherent visual direction.

**Location:** ECC\taste\SKILL.md

### [taste-application]
**Description:** Generate new video against a distilled style pack and cut it into a finished piece - plan takes from the reference's cut rhythm, generate on fal, grade with the pack's measured LUT, cut at the measured cadence, weave in existing footage, composite overlay plates, mint 3D props, and verify the result numerically. Use when the user wants to make a video in a captured style, supplement existing footage, or assemble generated clips into a real edit.

**Location:** ECC\taste-application\SKILL.md

### [taste-distillation]
**Description:** Measure a set of reference videos into a reusable style pack - colour grade as a 3D LUT, cut rhythm as a shot-length distribution, hero stills, screen-blend overlay plates, and a text spec for a generative model. Use when the user wants to capture the look of reference footage, build a repeatable look, mint assets from references, or reproduce someone's grade and pacing.

**Location:** ECC\taste-distillation\SKILL.md

### [tasteforge-video]
**Description:** Use for file-driven multimodal image, video, and 3D-asset discovery; taste interviews; distill or apply workflows; style-pack validation; editable EDL/FCPXML export; provenance audits; and offline planning that must fail closed before provider generation.

**Location:** ECC\tasteforge-video\SKILL.md

### [tdd-workflow]
**Description:** "Test-driven development workflow: write a failing test first, watch it fail, implement the smallest change to green, then refactor with 80%+ coverage across unit, integration, and E2E tests. Use when writing a new feature, fixing a bug, refactoring, or when told to write failing tests first."

**Location:** ECC\tdd-workflow\SKILL.md

### [team-agent-orchestration]
**Description:** "Run team-based orchestration for agent squads: work items with owners and scope, agent Kanban state, branch isolation, control pane visibility, and merge gates. Use when coordinating multiple agents in parallel across branches or worktrees — multi-agent fan-out, agent Kanban, squad coordination, or merging agent output into one product."

**Location:** ECC\team-agent-orchestration\SKILL.md

### [team-builder]
**Description:** Interactive picker that discovers available agent personas via the claude agents command and agents/ markdown globs, groups them into domains, has the user select up to five, dispatches them in parallel on one task, and synthesizes agreements and conflicts into a unified report. Use when composing a team of agents, browsing available agent personas, or running several specialist agents in parallel.

**Location:** ECC\team-builder\SKILL.md

### [terminal-opener]
**Description:** Open an executable and its argument array in a visible terminal window through a reusable, shell-free launch plan with dry-run, JSON, capability detection, detached fallback, and standalone recovery modes. Use when Codex needs to open an interactive CLI, SSH session, local development process, sandbox, or other argv-based command in a new host terminal; diagnose whether a supported terminal is available; or provide an actionable plan when the requested terminal is unsupported.

**Location:** ECC\terminal-opener\SKILL.md

### [terminal-ops]
**Description:** Evidence-first repo execution workflow for ECC. Use when the user wants a command run, a repo checked, a CI failure debugged, or a narrow fix pushed with exact proof of what was executed and verified.

**Location:** ECC\terminal-ops\SKILL.md

### [test-collaboration]
**Description:** "Inventory and govern a project's test assets. Connect requirements, business rules, risks, bugs, and cross-boundary contracts to stable TEST-IDs and executable evidence in the repository's existing test registry or TESTS.md. Use for test inventory, test gap analysis, unit/integration/contract/E2E/smoke classification, bug-to-test regression protection, consumer/provider contract testing, test-necessity review, and pre-delivery evidence review."

**Location:** ECC\test-collaboration\SKILL.md

### [tinystruct-patterns]
**Description:** Expert guidance for developing with the tinystruct Java framework. Use when working on the tinystruct codebase or any project built on tinystruct — including generating the bin/dispatcher and bin/dispatcher.cmd launcher scripts when a project lacks them, creating Application classes, @Action-mapped routes, unit tests, ActionRegistry, HTTP/CLI dual-mode handling, the built-in HTTP server, the event system, JSON with Builder/Builders, database persistence with AbstractData, POJO generation, Server-Sent Events (SSE), file uploads, and outbound HTTP networking.

**Location:** ECC\tinystruct-patterns\SKILL.md

### [token-budget-advisor]
**Description:** Offer a choice of response depth (25%/50%/75%/100%) with token estimates before answering, then answer at that level. Use when the user asks to control response length or token budget, such as 'token budget', 'short version', 'brief answer', 'respuesta corta vs larga', 'cuántos tokens', 'ahorrar tokens', 'responde al 50%', 'dame la versión corta', 'quiero controlar cuánto usas'. Skip if depth is already set this session or 'token' means an auth/payment token.

**Location:** ECC\token-budget-advisor\SKILL.md

### [token-card]
**Description:** Render a token-usage stat card from local Claude Code, Codex, Gemini CLI, and OpenCode session logs and commit it into the repository as a file. Use when someone wants a current usage figure in a README, or asks for a shareable card of their coding-agent activity.

**Location:** ECC\token-card\SKILL.md

### [ui-demo]
**Description:** Record polished UI demo videos using Playwright. Use when the user asks to create a demo, walkthrough, screen recording, or tutorial video of a web application. Produces WebM videos with visible cursor, natural pacing, and professional feel.

**Location:** ECC\ui-demo\SKILL.md

### [ui-to-vue]
**Description:** Use when the user has UI screenshots or design exports that need batch conversion into Vue 3 components, especially with Vant, Element Plus, or Ant Design Vue.

**Location:** ECC\ui-to-vue\SKILL.md

### [uncloud]
**Description:** Use when managing an Uncloud cluster — deploying services, configuring Caddy ingress, adding static proxy routes for non-cluster devices, publishing ports, scaling, inspecting logs, or managing machines and volumes with the `uc` CLI.

**Location:** ECC\uncloud\SKILL.md

### [unified-memory]
**Description:** Share durable, inspectable context and handoffs between Claude, Codex, Hermes, Cursor, OpenCode, and other agents through the local ECC Memory Vault. Use when an agent must save work state, transfer context, resume another agent's task, or search shared project knowledge.

**Location:** ECC\unified-memory\SKILL.md

### [unified-notifications-ops]
**Description:** Operate notifications as one ECC-native workflow across GitHub, Linear, desktop alerts, hooks, and connected communication surfaces. Use when the real problem is alert routing, deduplication, escalation, or inbox collapse.

**Location:** ECC\unified-notifications-ops\SKILL.md

### [verification-loop]
**Description:** Run a six-phase verification of a Claude Code session's work — build, type check, lint, tests with coverage, security grep, and diff review — then produce a PASS/FAIL verification report. Use when verifying work after completing a feature or refactor, before creating a PR, or when quality gates must pass.

**Location:** ECC\verification-loop\SKILL.md

### [video-editing]
**Description:** AI-assisted video editing workflows for cutting, structuring, and augmenting real footage. Covers the full pipeline from raw capture through FFmpeg, Remotion, ElevenLabs, fal.ai, and final polish in Descript or CapCut. Use when the user wants to edit video, cut footage, create vlogs, or build video content.

**Location:** ECC\video-editing\SKILL.md

### [videodb]
**Description:** Ingest, index, search, edit, and monitor video and audio with the VideoDB Python SDK — upload from files, URLs, or RTSP feeds, build spoken and scene indexes with timestamped search and playable clips, transcode and reframe, do timeline edits (subtitles, overlays, dubbing), and run real-time alerts on live streams or desktop capture. Use when working with video search, transcription, clipping, transcoding, streaming, or live video alerts.

**Location:** ECC\videodb\SKILL.md

### [visa-doc-translate]
**Description:** Translate visa document images (bank deposit, employment, income, and retirement certificates; HEIC, PNG, or JPG) into English via OCR and produce a bilingual PDF pairing the original image with a formatted certified-style translation. Use when a visa application needs a document translated to English, an official certificate OCR'd and translated, or a bilingual translation PDF for immigration paperwork.

**Location:** ECC\visa-doc-translate\SKILL.md

### [vite-patterns]
**Description:** Vite build tool patterns including config, plugins, HMR, env variables, proxy setup, SSR, library mode, dependency pre-bundling, and build optimization. Activate when working with vite.config.ts, Vite plugins, or Vite-based projects.

**Location:** ECC\vite-patterns\SKILL.md

### [vue-patterns]
**Description:** Vue.js 3 Composition API patterns, component architecture, reactivity best practices, Pinia state management, Vue Router navigation, and Nuxt SSR patterns. Activates for Vue, Nuxt, Vite, or Pinia projects. Use when building or reviewing Vue 3, Nuxt, or Pinia code — Composition API, reactivity, or router navigation.

**Location:** ECC\vue-patterns\SKILL.md

### [windows-desktop-e2e]
**Description:** E2E testing for Windows native desktop apps (WPF, WinForms, Win32/MFC, Qt) using pywinauto and Windows UI Automation. Use when writing E2E tests for a Windows native desktop app with pywinauto or UI Automation.

**Location:** ECC\windows-desktop-e2e\SKILL.md

### [workspace-surface-audit]
**Description:** Audit the active repo, MCP servers, plugins, connectors, env surfaces, and harness setup, then recommend the highest-value ECC-native skills, hooks, agents, and operator workflows. Use when the user wants help setting up Claude Code or understanding what capabilities are actually available in their environment.

**Location:** ECC\workspace-surface-audit\SKILL.md

### [x-api]
**Description:** X/Twitter API integration for posting tweets, threads, reading timelines, search, and analytics. Covers OAuth auth patterns, rate limits, and platform-native content posting. Use when the user wants to interact with X programmatically.

**Location:** ECC\x-api\SKILL.md

## Category: firebase (13 skills)

### [extension_to_functions_codebase]
**Description:** Skill for converting an installed Firebase Extension (or extension source) into a standalone Cloud Functions for Firebase codebase or publishable npm package, including V1 to V2 trigger upgrades, lifecycle hooks, and declarative security

**Location:** firebase\extension_to_functions_codebase\SKILL.md

### [firebase_ai_logic_basics]
**Description:** Official skill for integrating Firebase AI Logic (Gemini API) into web applications. Covers setup, multimodal inference, structured output, and security.

**Location:** firebase\firebase_ai_logic_basics\SKILL.md

### [firebase_app_hosting_basics]
**Description:** >-

**Location:** firebase\firebase_app_hosting_basics\SKILL.md

### [firebase_auth_basics]
**Description:** Guide for setting up and using Firebase Authentication. Use this skill when the user's app requires user sign-in, user management, or secure data access using auth rules.

**Location:** firebase\firebase_auth_basics\SKILL.md

### [firebase_basics]
**Description:** >-

**Location:** firebase\firebase_basics\SKILL.md

### [firebase_crashlytics]
**Description:** Comprehensive guide for Firebase Crashlytics, including provisioning and SDK usage. Use this skill when the user needs help setting up Crashlytics, adding crash reporting, or using the Crashlytics SDK in their application.

**Location:** firebase\firebase_crashlytics\SKILL.md

### [firebase_data_connect_basics]
**Description:** Builds and deploys Firebase SQL Connect (aka Firebase Data Connect) backends with PostgreSQL securely. Use when designing schemas with tables and relations, writing authorized queries and mutations, configuring real-time data updates, or generating type-safe SDKs. Use when you need a relational database with Firebase, or when the user mentions SQL Connect or Data Connect.

**Location:** firebase\firebase_data_connect_basics\SKILL.md

### [firebase_firestore]
**Description:** >-

**Location:** firebase\firebase_firestore\SKILL.md

### [firebase_hosting_basics]
**Description:** >-

**Location:** firebase\firebase_hosting_basics\SKILL.md

### [firebase_remote_config_basics]
**Description:** >-

**Location:** firebase\firebase_remote_config_basics\SKILL.md

### [firebase_security_rules_auditor]
**Description:** >-

**Location:** firebase\firebase_security_rules_auditor\SKILL.md

### [firestore_rules_creation]
**Description:** >-

**Location:** firebase\firestore_rules_creation\SKILL.md

### [xcode_project_setup]
**Description:** Safely modifies Xcode projects (.pbxproj) to add Swift Packages and link files. Use this skill whenever an iOS project needs dependencies installed (e.g. Firebase, Alamofire).

**Location:** firebase\xcode_project_setup\SKILL.md

## Category: flutter (25 skills)

### [dart-add-unit-test]
**Description:** Write and organize unit tests for functions, methods, and classes using `package:test`. Use when creating new logic or fixing bugs to ensure code remains correct and regression-free.

**Location:** flutter\dart-add-unit-test\SKILL.md

### [dart-build-cli-app]
**Description:** >-

**Location:** flutter\dart-build-cli-app\SKILL.md

### [dart-collect-coverage]
**Description:** Collect coverage using the coverage packge and create an LCOV report

**Location:** flutter\dart-collect-coverage\SKILL.md

### [dart-fix-runtime-errors]
**Description:** Uses get_runtime_errors and lsp to fetch an active stack trace, locate the failing line, apply a fix, and verify resolution via hot_reload.

**Location:** flutter\dart-fix-runtime-errors\SKILL.md

### [dart-generate-test-mocks]
**Description:** Define and generate mock objects for external dependencies using `package:mockito` and `build_runner`. Use when unit testing classes that depend on complex external services like APIs or databases.

**Location:** flutter\dart-generate-test-mocks\SKILL.md

### [dart-migrate-to-checks-package]
**Description:** |-

**Location:** flutter\dart-migrate-to-checks-package\SKILL.md

### [dart-resolve-package-conflicts]
**Description:** Workflow for fixing package version conflicts. Use this when `pub get` fails due to incompatible package versions.

**Location:** flutter\dart-resolve-package-conflicts\SKILL.md

### [dart-run-static-analysis]
**Description:** Execute `dart analyze` to identify warnings and errors, and use `dart fix --apply` to automatically resolve mechanical lint issues. Use during development to ensure code quality and before committing changes.

**Location:** flutter\dart-run-static-analysis\SKILL.md

### [dart-setup-ffi-assets]
**Description:** "Guides agents in compiling and packaging C/C++ source code into dynamic or static libraries (Code Assets) using Dart's Native Assets hook system (via hook/build.dart and hook/link.dart utilizing package:hooks and package:native_toolchain_c). Use when a user asks to: 'setup native assets', 'compile C/C++ source code', 'bundle dynamic libraries', 'build native C code', 'link native assets', 'implement build.dart or link.dart hooks', or 'integrate C/C++ interop in Dart/Flutter'. Helps agents avoid manual toolchain orchestration and configures secure hash-validated binary downloads or advanced linker tree-shaking with package:record_use mapping."

**Location:** flutter\dart-setup-ffi-assets\SKILL.md

### [dart-use-doc-examples]
**Description:** "How to inject external code examples into Dartdoc using the {@example} directive, and how to filter those files using #hide, #region, and #endregion tags."

**Location:** flutter\dart-use-doc-examples\SKILL.md

### [dart-use-ffigen]
**Description:** Guide agents to use `package:ffigen` to automatically generate FFI bindings instead of writing them manually. Use this skill when a task involves writing new FFI bindings, extending C/Objective-C/Swift integrations, or replacing hand-crafted `dart:ffi` setups.

**Location:** flutter\dart-use-ffigen\SKILL.md

### [dart-use-path-package]
**Description:** >-

**Location:** flutter\dart-use-path-package\SKILL.md

### [dart-use-pattern-matching]
**Description:** >-

**Location:** flutter\dart-use-pattern-matching\SKILL.md

### [dart-use-primary-constructors]
**Description:** >

**Location:** flutter\dart-use-primary-constructors\SKILL.md

### [dart-write-documentation]
**Description:** "Rules and formatting guidelines for writing Dart /// API documentation and doc comments. Use when documenting Dart code, writing doc comments for any Dart declaration (libraries, classes, methods, variables, etc.), or when instructed to follow the Effective Dart documentation guidelines."

**Location:** flutter\dart-write-documentation\SKILL.md

### [flutter-add-integration-test]
**Description:** Configures Flutter Driver for app interaction and converts MCP actions into permanent integration tests. Use when adding integration testing to a project, exploring UI components via MCP, or automating user flows with the integration_test package.

**Location:** flutter\flutter-add-integration-test\SKILL.md

### [flutter-add-widget-preview]
**Description:** Adds interactive widget previews to the project using the previews.dart system. Use when creating new UI components or updating existing screens to ensure consistent design and interactive testing.

**Location:** flutter\flutter-add-widget-preview\SKILL.md

### [flutter-add-widget-test]
**Description:** Implement a component-level test using `WidgetTester` to verify UI rendering and user interactions (tapping, scrolling, entering text). Use when validating that a specific widget displays correct data and responds to events as expected.

**Location:** flutter\flutter-add-widget-test\SKILL.md

### [flutter-apply-architecture-best-practices]
**Description:** Architects a Flutter application using the recommended layered approach (UI, Logic, Data). Use when structuring a new project or refactoring for scalability.

**Location:** flutter\flutter-apply-architecture-best-practices\SKILL.md

### [flutter-build-responsive-layout]
**Description:** Use `LayoutBuilder`, `MediaQuery`, or `Expanded/Flexible` to create a layout that adapts to different screen sizes. Use when you need the UI to look good on both mobile and tablet/desktop form factors.

**Location:** flutter\flutter-build-responsive-layout\SKILL.md

### [flutter-fix-layout-issues]
**Description:** Fixes Flutter layout errors (overflows, unbounded constraints) using Dart and Flutter MCP tools. Use when addressing "RenderFlex overflowed", "Vertical viewport was given unbounded height", or similar layout issues.

**Location:** flutter\flutter-fix-layout-issues\SKILL.md

### [flutter-implement-json-serialization]
**Description:** Create model classes with `fromJson` and `toJson` methods using `dart:convert`. Use when manually mapping JSON keys to class properties for simple data structures.

**Location:** flutter\flutter-implement-json-serialization\SKILL.md

### [flutter-setup-declarative-routing]
**Description:** Configure `MaterialApp.router` using a package like `go_router` for advanced URL-based navigation. Use when developing web applications or mobile apps that require specific deep linking and browser history support.

**Location:** flutter\flutter-setup-declarative-routing\SKILL.md

### [flutter-setup-localization]
**Description:** Add `flutter_localizations` and `intl` dependencies, enable "generate true" in `pubspec.yaml`, and create an `l10n.yaml` configuration file. Use when initializing localization support for a new Flutter project.

**Location:** flutter\flutter-setup-localization\SKILL.md

### [flutter-use-http-package]
**Description:** Use the `http` package to execute GET, POST, PUT, or DELETE requests. Use when you need to fetch from or send data to a REST API.

**Location:** flutter\flutter-use-http-package\SKILL.md

## Category: gcalendar (1 skills)

### [gcalendar]
**Description:** Read, create, and manage Google Calendar events. Use when the user shares a calendar.google.com URL, asks what is on their schedule, wants an event found, created, updated, deleted, or moved, wants to RSVP, wants free/busy or scheduling conflicts checked before proposing a time, wants focus time or an out-of-office block created, wants an event quick-added from a phrase or imported from an ICS file, or wants to know where someone is working from and which timezone they are in. Don't use for Gmail, Chat, or Tasks.

**Location:** gcalendar\gcalendar\SKILL.md

## Category: gdocs (1 skills)

### [gdocs]
**Description:** Read, create, edit, and manage Google Docs. Use when the user shares a docs.google.com URL, asks to summarize or extract content from a doc, wants a doc drafted, edited, formatted, or commented on, wants tables, images, or smart chips inserted, wants markdown imported or synchronized with a doc, or wants a doc exported. Requires a known document ID — to find documents, use the gdrive skill from the Google Drive plugin; if it isn't installed, ask the user for the doc link. Don't use for Google Sheets, Slides, or Drive file management.

**Location:** gdocs\gdocs\SKILL.md

## Category: gdrive (1 skills)

### [gdrive]
**Description:** Browse, search, and manage Google Drive files and folders. Use when the user shares a drive.google.com URL, asks what is in a folder, wants a file found, downloaded, uploaded, updated in place, moved, copied, or renamed, wants a Google file exported to PDF, Markdown, or CSV, wants comments read or added, wants sharing and permissions checked or changed, or wants Drive activity watched. Don't use for editing the contents of a Doc, Sheet, or Slides deck.

**Location:** gdrive\gdrive\SKILL.md

## Category: gemini-api (3 skills)

### [gemini-api-dev]
**Description:** Use this skill when writing code that calls the Gemini API for text generation, multi-turn chat, multimodal understanding, image generation, video generation, speech generation (TTS), voice design, voice replication, streaming responses, background research tasks, function calling, structured output, or migrating from the old generateContent API. Covers SDK usage and best practices for Gemini models and agents in Python and TypeScript.

**Location:** gemini-api\gemini-api-dev\SKILL.md

### [gemini-live-api-dev]
**Description:** Use this skill when building real-time, bidirectional streaming applications with the Gemini Live API, or migrating legacy Live models (2.0/2.5/3.1) to Gemini 3.8 Live. Covers WebSocket-based audio/video/text streaming, voice activity detection (VAD), background reasoning (extended thinking), asynchronous function calling, session management, ephemeral tokens, live transcription, and live translation. SDKs covered - google-genai (Python), @google/genai (JavaScript/TypeScript).

**Location:** gemini-api\gemini-live-api-dev\SKILL.md

### [gemini-omni-flash-api]
**Description:** Use this skill for generative video editing, text-to-video, image-referenced video generation, first-frame-to-video, first-and-last-frame transitions, and video extensions using Gemini Omni 1.1 Flash (gemini-omni-1.1-flash) via the official google-genai SDK. Includes workflows for pre-processing/optimizing high-resolution or long source videos with ffmpeg, stripping audio for full sound regeneration, and handling turn-by-turn video editing and parallel execution.

**Location:** gemini-api\gemini-omni-flash-api\SKILL.md

## Category: google_maps_platform (1 skills)

### [skills]
**Description:** A collection of skills for architecting and implementing production-ready code using Google Maps Platform APIs and SDKs for any map, place, address, geocoding, routing/ETA (including eco-friendly routing), nearby search, 3D / Street View / static map, marker clustering, custom styling, drawing, geofencing, heatmap, or environmental (air-quality / pollen / solar / weather) feature — across Web, Android, iOS, and Web Services APIs. For prototyping, use the public Maps Demo Key — no billing setup and no Cloud project required, covering a growing set of the most popular Google Maps Platform APIs. For production, the skill prompts you to create and restrict your own key. All non-trivial code is grounded in freshly retrieved docs via the Google Maps Platform Code Assist service (no reliance on training-data memory).

**Location:** google_maps_platform\skills\SKILL.md

## Category: google-antigravity-sdk (1 skills)

### [google-antigravity-sdk]
**Description:** "Design, implement, and debug autonomous AI agents and multi-agent systems using the Google Antigravity (AGY) SDK. ACTIVATE this skill when the user wants to create, configure, or orchestrate Google Antigravity agents."

**Location:** google-antigravity-sdk\google-antigravity-sdk\SKILL.md

## Category: google-cloud-developer (5 skills)

### [finding-google-skills]
**Description:** >-

**Location:** google-cloud-developer\finding-google-skills\SKILL.md

### [gcloud]
**Description:** >-

**Location:** google-cloud-developer\gcloud\SKILL.md

### [google-cloud-recipe-auth]
**Description:** Provides expert guidance on Identity and Access Management (IAM) and authenticating and authorizing to Google Cloud services and APIs, covering human users, service identities, Application Default Credentials (ADC), and best practices for secure access.

**Location:** google-cloud-developer\google-cloud-recipe-auth\SKILL.md

### [google-cloud-recipe-onboarding]
**Description:** >-

**Location:** google-cloud-developer\google-cloud-recipe-onboarding\SKILL.md

### [retrieving-developer-knowledge]
**Description:** >-

**Location:** google-cloud-developer\retrieving-developer-knowledge\SKILL.md

## Category: google-developer-knowledge (1 skills)

### [retrieving-developer-knowledge]
**Description:** >-

**Location:** google-developer-knowledge\retrieving-developer-knowledge\SKILL.md

## Category: gsheets (1 skills)

### [gsheets]
**Description:** Read, write, format, and manage Google Sheets. Use when the user shares a sheets.google.com or docs.google.com/spreadsheets URL, asks to read or summarize spreadsheet data, wants cells written, formatted, sorted, merged, or validated, wants rows/columns inserted or deleted, wants charts, pivot tables, or tables added, wants CSV imported, or wants a spreadsheet created, copied, shared, or exported. Don't use for Google Docs, Slides, or Drive file management.

**Location:** gsheets\gsheets\SKILL.md

## Category: gslides (1 skills)

### [gslides]
**Description:** Read, create, and edit Google Slides presentations. Use when creating presentations, when the user shares a slides.google.com URL, asks to summarize or extract content from a deck, wants slides drafted or updated, or wants a presentation exported. Don't use for Google Docs, Sheets, or Drive file management.

**Location:** gslides\gslides\SKILL.md

## Category: science (41 skills)

### [alphafold_database_fetch_and_analyze]
**Description:** >

**Location:** science\alphafold_database_fetch_and_analyze\SKILL.md

### [alphagenome_atlas_website_links]
**Description:** >-

**Location:** science\alphagenome_atlas_website_links\SKILL.md

### [alphagenome_single_variant_analysis]
**Description:** >

**Location:** science\alphagenome_single_variant_analysis\SKILL.md

### [alphagenome_variant_impact_score]
**Description:** >-

**Location:** science\alphagenome_variant_impact_score\SKILL.md

### [biomolecular_structure_viewer]
**Description:** >

**Location:** science\biomolecular_structure_viewer\SKILL.md

### [chembl_database]
**Description:** >

**Location:** science\chembl_database\SKILL.md

### [clinical_trials_database]
**Description:** >

**Location:** science\clinical_trials_database\SKILL.md

### [clinvar_database]
**Description:** >

**Location:** science\clinvar_database\SKILL.md

### [credentials]
**Description:** >-

**Location:** science\credentials\SKILL.md

### [dbsnp_database]
**Description:** >

**Location:** science\dbsnp_database\SKILL.md

### [embl_ebi_ols]
**Description:** >

**Location:** science\embl_ebi_ols\SKILL.md

### [encode_ccres_database]
**Description:** >

**Location:** science\encode_ccres_database\SKILL.md

### [ensembl_database]
**Description:** >

**Location:** science\ensembl_database\SKILL.md

### [foldseek_structural_search]
**Description:** >

**Location:** science\foldseek_structural_search\SKILL.md

### [gnomad_database]
**Description:** >

**Location:** science\gnomad_database\SKILL.md

### [gtex_database]
**Description:** >

**Location:** science\gtex_database\SKILL.md

### [human_protein_atlas_database]
**Description:** >

**Location:** science\human_protein_atlas_database\SKILL.md

### [interpro_database]
**Description:** >

**Location:** science\interpro_database\SKILL.md

### [jaspar_database]
**Description:** >

**Location:** science\jaspar_database\SKILL.md

### [literature_search_arxiv]
**Description:** >

**Location:** science\literature_search_arxiv\SKILL.md

### [literature_search_biorxiv]
**Description:** >

**Location:** science\literature_search_biorxiv\SKILL.md

### [literature_search_europepmc]
**Description:** >

**Location:** science\literature_search_europepmc\SKILL.md

### [literature_search_openalex]
**Description:** >

**Location:** science\literature_search_openalex\SKILL.md

### [ncbi_sequence_fetch]
**Description:** >

**Location:** science\ncbi_sequence_fetch\SKILL.md

### [openfda_database]
**Description:** >

**Location:** science\openfda_database\SKILL.md

### [opentargets_database]
**Description:** >

**Location:** science\opentargets_database\SKILL.md

### [pdb_database]
**Description:** >

**Location:** science\pdb_database\SKILL.md

### [predictingthepast]
**Description:** >

**Location:** science\predictingthepast\SKILL.md

### [protein_sequence_msa]
**Description:** >

**Location:** science\protein_sequence_msa\SKILL.md

### [protein_sequence_similarity_search]
**Description:** >

**Location:** science\protein_sequence_similarity_search\SKILL.md

### [pubchem_database]
**Description:** >

**Location:** science\pubchem_database\SKILL.md

### [pubmed_database]
**Description:** >-

**Location:** science\pubmed_database\SKILL.md

### [pymol]
**Description:** >

**Location:** science\pymol\SKILL.md

### [quickgo_database]
**Description:** >

**Location:** science\quickgo_database\SKILL.md

### [reactome_database]
**Description:** >

**Location:** science\reactome_database\SKILL.md

### [string_database]
**Description:** >

**Location:** science\string_database\SKILL.md

### [ucsc_conservation_and_tfbs]
**Description:** >

**Location:** science\ucsc_conservation_and_tfbs\SKILL.md

### [unibind_database]
**Description:** >-

**Location:** science\unibind_database\SKILL.md

### [uniprot_database]
**Description:** >-

**Location:** science\uniprot_database\SKILL.md

### [uv]
**Description:** >-

**Location:** science\uv\SKILL.md

### [workflow_skill_creator]
**Description:** >

**Location:** science\workflow_skill_creator\SKILL.md

## Category: superpowers (15 skills)

### [brainstorming]
**Description:** "You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation)."

**Location:** superpowers\brainstorming\SKILL.md

### [diagnosing-superpowers]
**Description:** Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for the current session or a past one identified by id or path, on any harness.

**Location:** superpowers\diagnosing-superpowers\SKILL.md

### [dispatching-parallel-agents]
**Description:** Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies

**Location:** superpowers\dispatching-parallel-agents\SKILL.md

### [executing-plans]
**Description:** Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available

**Location:** superpowers\executing-plans\SKILL.md

### [finishing-a-development-branch]
**Description:** Use when implementation is complete, all tests pass, and you need to decide how to integrate the work

**Location:** superpowers\finishing-a-development-branch\SKILL.md

### [receiving-code-review]
**Description:** Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation

**Location:** superpowers\receiving-code-review\SKILL.md

### [requesting-code-review]
**Description:** Use when completing tasks, implementing major features, or before merging to verify work meets requirements

**Location:** superpowers\requesting-code-review\SKILL.md

### [subagent-driven-development]
**Description:** Use when executing implementation plans with independent tasks in the current session

**Location:** superpowers\subagent-driven-development\SKILL.md

### [systematic-debugging]
**Description:** Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes

**Location:** superpowers\systematic-debugging\SKILL.md

### [test-driven-development]
**Description:** Use when implementing any feature or bugfix, before writing implementation code

**Location:** superpowers\test-driven-development\SKILL.md

### [using-git-worktrees]
**Description:** Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback

**Location:** superpowers\using-git-worktrees\SKILL.md

### [using-superpowers]
**Description:** Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions

**Location:** superpowers\using-superpowers\SKILL.md

### [verification-before-completion]
**Description:** Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always

**Location:** superpowers\verification-before-completion\SKILL.md

### [writing-plans]
**Description:** Use when you have a spec or requirements for a multi-step task, before touching code

**Location:** superpowers\writing-plans\SKILL.md

### [writing-skills]
**Description:** Use when creating new skills, editing existing skills, or verifying skills work before deployment

**Location:** superpowers\writing-skills\SKILL.md

