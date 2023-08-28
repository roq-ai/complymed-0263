import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  publish_date: yup.date().nullable(),
});
