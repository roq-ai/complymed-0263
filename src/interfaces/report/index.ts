import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  publish_date?: any;
  created_at?: any;
  updated_at?: any;
  client?: ClientInterface[];

  _count?: {
    client?: number;
  };
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
}
