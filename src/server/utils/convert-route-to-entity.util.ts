const mapping: Record<string, string> = {
  audits: 'audit',
  businesses: 'business',
  clients: 'client',
  reports: 'report',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
