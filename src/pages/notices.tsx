import React from 'react'
import * as MU from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import { syncNotices } from '@/utils/api/notices'

const Notices: React.FC = () => {
  const [loading, setLoading] = React.useState(true)
  const [notices, setNotices] = React.useState<Notice[]>([])

  // React.useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/notices')
  //     .then(response => response.json())
  //     .then(setNotices)
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [])

  React.useEffect(() => {
    const unsubscribe = syncNotices(setNotices)
    setLoading(false)
    return unsubscribe
  }, [])

  if (loading) return <MU.CircularProgress />

  return (
    <MUIDataTable
      title="お知らせ一覧"
      data={notices}
      columns={[
        { name: 'title', label: 'タイトル', options: { sort: false } },
        { name: 'body', label: '本文', options: { sort: false } },
        { name: 'date', label: '更新日時' }
      ]}
      options={{ viewColumns: false, selectableRows: 'none' }}
    />
  )
}

export default Notices