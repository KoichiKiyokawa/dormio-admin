import React from 'react'
import MUIDataTable from 'mui-datatables'

type Props = {
  residents: Resident[]
}

const Residents: React.FC<Props> = props => (
  <MUIDataTable
    title="住人一覧"
    data={props.residents}
    columns={[
      { name: 'roomNumber', label: '部屋番号' },
      { name: 'name', label: '氏名' }
    ]}
    options={{ viewColumns: false }}
  />
)

export default Residents
