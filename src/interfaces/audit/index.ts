import { GetQueryInterface } from 'interfaces';

export interface AuditInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  audit_date?: any;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AuditGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
}
