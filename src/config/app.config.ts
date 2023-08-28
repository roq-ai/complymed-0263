interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organisation Admin'],
  customerRoles: [],
  tenantRoles: ['Organisation Admin', 'Business'],
  tenantName: 'Client',
  applicationName: 'ComplyMed',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
