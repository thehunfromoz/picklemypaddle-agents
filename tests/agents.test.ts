import { describe, expect, it } from 'vitest';
import { AGENTS, summary } from '../src/agents.js';

describe('agent registry', () => {
  it('lists every agent story once', () => {
    const ids = AGENTS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(AGENTS.map((a) => a.jira)).toEqual(['SCRUM-22', 'SCRUM-23', 'SCRUM-24', 'SCRUM-25', 'SCRUM-26', 'SCRUM-27', 'SCRUM-28']);
  });

  it('starts with every agent parked', () => {
    expect(AGENTS.every((a) => a.status === 'parked')).toBe(true);
    expect(summary()).toMatch(/^0 of 7 agents enabled\./);
  });

  it('marks enabled agents in the summary', () => {
    const one = [{ ...AGENTS[0]!, status: 'enabled' as const }];
    expect(summary(one)).toContain('1 of 1 agents enabled.');
    expect(summary(one)).toContain('● order-status-emails');
  });
});
