import { AppDispatch, AppThunk } from '.'

export const fetchNotices = (): AppThunk => async (dispatch: AppDispatch) => {
  const response = await fetch('/api/notices')
  const notices = response.json()
  // dispatch()
  console.log(notices, dispatch)
}
