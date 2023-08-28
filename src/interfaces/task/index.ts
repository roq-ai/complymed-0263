import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  due_date?: any;
  created_at?: any;
  updated_at?: any;
  client?: ClientInterface[];

  _count?: {
    client?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
}
