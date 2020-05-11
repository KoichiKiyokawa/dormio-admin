import React from 'react'
import * as MU from '@material-ui/core'
import { connect } from 'react-redux'

import { sidebarSlice } from '../../store/sidebar'

type Props = {
  open: boolean
  toggle: () => void
}

const Sidebar: React.FC<Props> = props => (
  <MU.SwipeableDrawer open={props.open} onClose={props.toggle} onOpen={() => {}}>
    <div style={{ width: 250 }}>
      <MU.List>
        <MU.ListItemText primary="hoge" />
      </MU.List>
    </div>
  </MU.SwipeableDrawer>
)

export default connect(
  state => ({ open: state.sidebar.open }),
  dispatch => ({ toggle: () => dispatch(sidebarSlice.actions.toggle()) })
)(Sidebar)
