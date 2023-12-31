import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  name: yup.string().required(),
  task_id: yup.string().nullable(),
  report_id: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
