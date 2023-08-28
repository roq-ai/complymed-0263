import * as yup from 'yup';

export const auditValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  audit_date: yup.date().nullable(),
});
