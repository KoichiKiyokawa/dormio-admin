import { FormikProps } from 'formik'

export function useHasError<T>(formik: FormikProps<T>): (arg: keyof T) => boolean {
  return propName => formik.touched[propName] && Boolean(formik.errors[propName])
}
