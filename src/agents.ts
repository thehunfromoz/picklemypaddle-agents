/**
 * Registry of helper agents (Jira epic SCRUM-12). Each one drafts routine work for
 * Attila to approve in a private dashboard; nothing is sent or paid automatically.
 * All are parked until the matching manual task starts to lag.
 */
export interface AgentInfo {
  id: string;
  jira: string;
  drafts: string;
  status: 'parked' | 'enabled';
}

export const AGENTS: readonly AgentInfo[] = [
  { id: 'order-status-emails', jira: 'SCRUM-22', drafts: 'customer order-status emails', status: 'parked' },
  { id: 'enquiry-replies', jira: 'SCRUM-23', drafts: 'replies to website enquiries', status: 'parked' },
  { id: 'invoice-reminders', jira: 'SCRUM-24', drafts: 'reminders for overdue club invoices', status: 'parked' },
  { id: 'bookkeeping', jira: 'SCRUM-25', drafts: 'ledger entries from payments and expenses', status: 'parked' },
  { id: 'outreach', jira: 'SCRUM-26', drafts: 'outreach emails to clubs and retailers', status: 'parked' },
  { id: 'content', jira: 'SCRUM-27', drafts: 'monthly blog posts and flyer copy', status: 'parked' },
  { id: 'weekly-summary', jira: 'SCRUM-28', drafts: 'a weekly business summary', status: 'parked' },
];

export function summary(agents: readonly AgentInfo[] = AGENTS): string {
  const enabled = agents.filter((a) => a.status === 'enabled');
  const lines = agents.map((a) => `  ${a.status === 'enabled' ? '●' : '○'} ${a.id} (${a.jira}): drafts ${a.drafts}`);
  return [`${enabled.length} of ${agents.length} agents enabled.`, ...lines].join('\n');
}
