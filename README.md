<div align="center">

<img src="docs/images/banner.svg" alt="Agent Skills Vault Banner" width="100%" />

<br /><br />

# ⚡ AGENT SKILLS VAULT (713+ Skills)

**The Definitive Autonomous AI Agent Execution & Instruction Library**

[![Total Skills](https://img.shields.io/badge/Total%20Skills-713%2B-DFBA73.svg?style=for-the-badge&logo=codestream&logoColor=black)](#-skills-taxonomy)
[![Supported Platforms](https://img.shields.io/badge/Platforms-Antigravity%20%7C%20Claude%20Code%20%7C%20Cline%20%7C%20OpenCode-blue.svg?style=for-the-badge)](https://gokaushik.com)
[![Author](https://img.shields.io/badge/Curator-Kitub%20(Kaushik%20Boruah)-C5A880.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kituontop69-cell)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  A production-grade, rigorously curated compendium of <b>713+ specialized agent skills</b>, system prompts, automated workflows, and MCP tool routers designed to give LLMs deterministic execution power across systems engineering, security auditing, mobile development, cloud architecture, and autonomous loops.
</p>

</div>

---

## 🌟 Executive Overview

Modern agentic engineering demands more than generic prompt instructions. Autonomous coding agents require **isolated domain contexts**, **executable verification scripts**, and **strict guardrails** to achieve high completion rates without hallucination.

The **Agent Skills Vault** aggregates, categorizes, and indexes the entire corpus of agent behaviors from **Google Antigravity (AGY)**, **Everything Claude Code (ECC)**, **Google Cloud Developer Platform**, **Android Engineering Plugins**, and **Scientific Bio-computational Toolkits**.

Every skill inside this repository includes:
- **`SKILL.md` Specification:** Strict YAML frontmatter with activation triggers, input contracts, and stepwise execution directives.
- **Automated Workflows & Guardrails:** Evidence-first verification patterns that force agents to prove compilation and test passing before claiming completion.
- **Dynamic Skill Routing:** Pre-bundled Python and JavaScript routers (`astra_skills_router.py` & `astra-skills-router.js`) that dynamically retrieve only the necessary skill into context, eliminating token bloating.

---

## 🗂️ Repository Architecture

```
Agent-Skills-Vault/
├── docs/
│   └── images/
│       └── banner.svg                  # High-resolution architectural banner
├── .agents/skills/                     # Global Antigravity / Astra execution skills
├── .opencode/                          # OpenCode runtime-ready skill bundles
├── ECC/                                # Everything Claude Code engineering framework
│   ├── autonomous-loops/               # RFC-driven multi-agent DAG architectures
│   ├── codehealth-mcp/                 # Real-time CodeScene structural health gates
│   ├── continuous-agent-loop/          # Continuous self-checking autonomous harness
│   └── test-driven-development/        # Strict TDD red-green-refactor cycles
├── Antigravity-Builtin/                # Native Google Antigravity custom runtime skills
│   ├── agy-customizations/             # Antigravity customization engine reference
│   ├── automation/                     # Scheduled background autonomous workflows
│   └── generative_ui/                  # Inline chat interactive HTML widgets
├── android-cli-plugin/                 # Native Android CLI & AVD automation
├── google-cloud-developer/             # Cloud Run, BigQuery, GKE, and GCP Solutions
├── firebase/                           # Firebase Auth, Security Rules, & Crashlytics
├── flutter/                            # Flutter architecture, widget testing & FFI
├── science/                            # AlphaFold, ChEMBL, PubChem, & BLAST
├── MASTER_SKILLS_GUIDE.md              # Complete 260KB+ categorized index
├── ALL_SKILLS.md                       # Comprehensive 3.7MB single-file instruction handbook
├── ALL_SKILLS_PROMPTS.json.zip         # Compressed JSON schema database with full prompts
├── astra_skills_router.py              # Zero-dependency Python dynamic skill router
└── astra-skills-router.js              # High-speed Node.js dynamic skill router
```

---

## 🏛️ Skills Taxonomy & Core Domains

The 713+ skills are organized into 6 master pillars:

### 1. 🧠 Autonomous Agent Infrastructure & Loops (120+ Skills)
* **`autonomous-loops`:** RFC-driven multi-agent pipelines and directed acyclic graph execution.
* **`agent-harness-construction`:** Design and optimization of agent action spaces and observation formats.
* **`continuous-agent-loop`:** Autonomous agent harnesses with quality gates, evals, and recovery loops.
* **`agent-introspection-debugging`:** Structured self-debugging, error capture, and containment reports.
* **`dynamic-workflow-mode`:** Task-local harness extraction and eval gates.

### 2. ⚡ Full-Stack, Systems & Native Engineering (190+ Skills)
* **Systems Core:** Modern C++ (C++20 Core Guidelines), Rust (safe concurrency & tokio), C# / .NET 8 (WPF & Win32 WorkerW architectures).
* **Desktop Runtimes:** Tauri v2 native desktop builds, frameless glass subsystems, and WebAudio engines.
* **Web Architecture:** Next.js 15+ Turbopack, React 19 Server Components, Vite optimization, Tailwind CSS design systems.
* **Backend Patterns:** NestJS, Django, Ktor, Express, and microservice RPC architectures.

### 3. 🛡️ Security, Auditing & Tradecraft (85+ Skills)
* **`security-bounty-hunter`:** Deep repository vulnerability hunting focused on remotely reachable zero-days.
* **`security-review`:** Production checklist for authentication, nonce CSP, secret handling, and CSRF protection.
* **`django-security` & `perl-security`:** Framework-specific security hardening and taint-mode auditing.
* **`mcp-dependency-review`:** Static review of MCP configuration against supply chain tampering.

### 4. ☁️ Cloud, Databases & Enterprise Pipelines (150+ Skills)
* **Google Cloud:** GKE clusters, Cloud Run, BigQuery Graph, Cloud SQL, and GCP pipeline orchestration.
* **Databases:** PostgreSQL query optimization, ClickHouse analytics, Redis distributed locks, and SQLite.
* **Deployment & Ops:** Docker containerization, health checks, zero-downtime rollbacks, and CI/CD pipelines.

### 5. 📱 Mobile & Cross-Platform (70+ Skills)
* **Android:** Android CLI automation, Clean Architecture, Jetpack Compose, Kotlin Coroutines/Flows.
* **Flutter:** Layered architecture best practices, FFI bindings (`package:ffigen`), and responsive layout testing.

### 6. 🔬 Scientific & Bio-computational Tools (90+ Skills)
* **Bioinformatics:** AlphaFold protein structure analysis, ChEMBL drug target querying, PubChem property retrieval, NCBI sequence fetching, and Europe PMC literature parsing.

---

## 🚀 Quick Start: Using Skills in Your Agent

### 1. In Google Antigravity (AGY)
Copy any skill folder into your project's `.agents/skills/` directory or global `~/.gemini/config/skills/`:
```bash
cp -r ECC/test-driven-development/ /path/to/your/project/.agents/skills/
```

### 2. In Claude Code
Place the skill into your project's `.claude/skills/` directory:
```bash
cp -r ECC/autonomous-loops/ /path/to/your/project/.claude/skills/
```

### 3. In OpenCode / Cline
Point your configuration in `opencode.jsonc` to the skill directory, or load via the bundled router:
```bash
node astra-skills-router.js --find "security-review"
```

---

## 🔍 Dynamic Routing (Zero Token Overhead)

Instead of dumping 700+ skill prompts into an LLM's system prompt and blowing your context budget, use the bundled dynamic routers to retrieve skills on-demand:

### Python Router
```bash
python astra_skills_router.py --query "docker containerization"
```

### Node.js Router
```bash
node astra-skills-router.js --query "react state management"
```

---

## 📚 Complete Documentation References

* **[MASTER_SKILLS_GUIDE.md](MASTER_SKILLS_GUIDE.md):** The comprehensive index detailing the description, location, and triggers for every single skill in this repository.
* **[ALL_SKILLS.md](ALL_SKILLS.md):** 3.7 MB consolidated single-file reference containing full instructional texts and workflows.
* **[ALL_SKILLS_PROMPTS.json.zip](ALL_SKILLS_PROMPTS.json.zip):** Machine-readable JSON database for programmatic agent ingestion.

---

## 👨‍💻 Author & Curator

Curated and engineered with extreme dedication by:

- **Kitub (Kaushik Boruah)**
- **Website:** [https://gokaushik.com](https://gokaushik.com)
- **GitHub:** [@kituontop69-cell](https://github.com/kituontop69-cell)
- **Email:** [itskaushik@gokaushik.com](mailto:itskaushik@gokaushik.com)

---

## 📄 License

This repository is licensed under the **MIT License** — feel free to fork, expand, and power your autonomous agents.
