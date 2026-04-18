export const navLinks = [
  { label: 'Why it matters', href: '#why' },
  { label: 'How it works', href: '#flow' },
  { label: 'Controls', href: '#controls' },
  { label: 'Signals', href: '#signals' },
  { label: 'Proof', href: '#proof' },
  { label: 'Waitlist', href: '#waitlist' }
]

export const permissions = [
  {
    title: 'Read email',
    risk: 'Low',
    description: 'Let an agent scan what matters without turning your inbox into the wild west.',
    detail: 'Filter by sender, label, and time window.'
  },
  {
    title: 'Book meetings',
    risk: 'Medium',
    description: 'Useful, but only when it respects your rules, your hours, and your calendar sanity.',
    detail: 'Set working hours, attendee limits, and approval rules.'
  },
  {
    title: 'Spend money',
    risk: 'High',
    description: 'Where trust becomes real. Budget limits and human approvals stay front and center.',
    detail: 'Use spend caps, vendor allowlists, and manual review.'
  },
  {
    title: 'Share files',
    risk: 'High',
    description: 'Sharing should feel intentional, not accidental.',
    detail: 'Restrict by workspace, file type, and external domain.'
  },
  {
    title: 'Contact people',
    risk: 'Medium',
    description: 'Give outreach a warm handrail instead of letting it run unsupervised.',
    detail: 'Define audience scope, tone rules, and approval thresholds.'
  }
]

export const featureCards = [
  {
    title: 'Clear permissions',
    body: 'Grant capabilities one by one, with plain-language guardrails that real humans can understand.'
  },
  {
    title: 'Risk-aware design',
    body: 'Low-stakes actions move smoothly. High-stakes actions slow down and ask for a grown-up in the room.'
  },
  {
    title: 'Live audit trail',
    body: 'See what the agent did, why it did it, and whether it asked first.'
  },
  {
    title: 'Approval moments',
    body: 'When something feels sensitive, the app makes that moment obvious instead of burying it.'
  }
]

export const proofPoints = [
  'Built for founders, operators, and teams adopting autonomous workflows.',
  'Designed like software people trust with money, files, and customer relationships.',
  'Humanized language to reduce ambiguity without sounding robotic or childish.'
]

export const flowSteps = [
  {
    title: 'Define the action',
    body: 'Describe what the agent is allowed to do in human language, not policy soup.',
    meta: 'Capability, scope, and boundaries'
  },
  {
    title: 'Set the friction',
    body: 'Low-risk tasks stay smooth. Sensitive actions require review, timing rules, or both.',
    meta: 'Risk-aware approvals'
  },
  {
    title: 'Watch the receipts',
    body: 'Every action leaves a trail with context, timing, and a plain-English explanation.',
    meta: 'Audit built in'
  }
]

export const signalCards = [
  {
    label: 'Approvals',
    value: '93%',
    note: 'of risky actions routed to human review before execution'
  },
  {
    label: 'Coverage',
    value: '11',
    note: 'workflow surfaces protected by capability rules and scoped access'
  },
  {
    label: 'Time to explain',
    value: '<30s',
    note: 'for a teammate to understand why an agent action was allowed'
  }
]
