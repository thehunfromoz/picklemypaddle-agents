# picklemypaddle-agents

Claude-based helpers for running Pickle My Paddle. Jira epic: SCRUM-12 (stories SCRUM-22 to 28).

Principles:

- Built only when a task Attila does by hand starts to lag.
- Agents draft; Attila approves every message, record or payment in a small private dashboard.
- Cheapest capable model per task, prompt caching, batch processing, and a hard monthly spend limit.
- Agents use the adapters in picklemypaddle-integrations, never vendor APIs directly.

**Status:** skeleton (SCRUM-13). It lists the planned agents, all parked; no agent is built yet.

## Run it on your Mac

```bash
corepack enable
pnpm install
pnpm start      # prints the agent list and which are enabled
pnpm test
```

Stack: TypeScript on Node 22, Vitest, pnpm, the same as the site and the integrations service.
CI uses the shared workflows in `picklemypaddle-infra`. Secrets such as the future Claude API
key come only from a git-ignored `.env` (see `.env.example`), never from the repo.
