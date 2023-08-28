import { BusinessInterface } from 'interfaces/business';
import { TaskInterface } from 'interfaces/task';
import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClientInterface {
  id?: string;
  description?: string;
  task_id?: string;
  report_id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  business?: BusinessInterface[];
  task?: TaskInterface;
  report?: ReportInterface;
  user?: UserInterface;
  _count?: {
    business?: number;
  };
}

export interface ClientGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  task_id?: string;
  report_id?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
