import axios from 'axios';
import queryString from 'query-string';
import { AuditInterface, AuditGetQueryInterface } from 'interfaces/audit';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAudits = async (query?: AuditGetQueryInterface): Promise<PaginatedInterface<AuditInterface>> => {
  const response = await axios.get('/api/audits', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAudit = async (audit: AuditInterface) => {
  const response = await axios.post('/api/audits', audit);
  return response.data;
};

export const updateAuditById = async (id: string, audit: AuditInterface) => {
  const response = await axios.put(`/api/audits/${id}`, audit);
  return response.data;
};

export const getAuditById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/audits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAuditById = async (id: string) => {
  const response = await axios.delete(`/api/audits/${id}`);
  return response.data;
};
