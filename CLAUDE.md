# picklemypaddle-agents

TypeScript / Node 22 helper agents, **all parked** (SCRUM-12): don't build here unless a story asks.
How we work: `../picklemypaddle-infra/docs/working-with-claude.md`.

## Checks (the same as CI)

```bash
pnpm install --frozen-lockfile
pnpm typecheck && pnpm test
```

Agents draft and Attila approves: nothing is sent or paid automatically.
