import React from 'react'
import * as MU from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Space from '@/components/atoms/Space'
import { useHasError } from '@/utils/error'

type FormProps = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('メールアドレスの形式が無効です').required('入力してください'),
      password: Yup.string().min(6, 'パスワードは6文字以上です').required('入力してください')
    }),
    onSubmit: console.log
  })

  const hasError = useHasError<FormProps>(formik)

  return (
    <MU.Paper style={{ padding: '1em' }}>
      <MU.Toolbar>
        <MU.Typography variant="h6">Dormio管理者ログイン</MU.Typography>
      </MU.Toolbar>
      <form onSubmit={formik.handleSubmit}>
        <MU.TextField
          fullWidth
          label="メールアドレス"
          variant="outlined"
          {...formik.getFieldProps('email')}
          error={hasError('email')}
        />
        {hasError('email') && formik.errors.email}
        <Space size={1} />
        <MU.TextField
          fullWidth
          label="パスワード"
          variant="outlined"
          {...formik.getFieldProps('password')}
          error={hasError('password')}
        />
        {hasError('password') && formik.errors.password}
        <Space size={1} />
        <MU.Grid container justify="center">
          <MU.Button type="submit" variant="contained" color="primary">
            ログイン
          </MU.Button>
        </MU.Grid>
      </form>
    </MU.Paper>
  )
}

export default Login
