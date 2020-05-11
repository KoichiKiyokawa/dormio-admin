import React from 'react'
import Link from 'next/link'
import * as MU from '@material-ui/core'
import * as MUI from '@material-ui/icons'
import { connect } from 'react-redux'

import { sidebarSlice } from '../../store/sidebar'

type Props = {
  open: boolean
  toggle: () => void
}

const Sidebar: React.FC<Props> = props => (
  <MU.SwipeableDrawer open={props.open} onClose={props.toggle} onOpen={() => {}}>
    <div style={{ width: 250 }} role="presentation">
      <MU.List>
        <MU.ListItem button>
          <MU.ListItemText primary="hoge" />
        </MU.ListItem>
        <MU.Divider />
        <Link href="/setting">
          <MU.ListItem button onClick={props.toggle}>
            <MU.ListItemIcon>
              <MUI.Settings />
            </MU.ListItemIcon>
            <MU.ListItemText primary="設定" />
          </MU.ListItem>
        </Link>
      </MU.List>
    </div>
  </MU.SwipeableDrawer>
)

export default connect(
  state => ({ open: state.sidebar.open }),
  dispatch => ({ toggle: () => dispatch(sidebarSlice.actions.toggle()) })
)(Sidebar)
