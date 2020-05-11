import React from 'react'
import Link from 'next/link'
import * as MU from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'
import { sidebarSlice } from '@/store/sidebar'

type Props = {
  toggle: () => void
}

const Header: React.FC<Props> = props => (
  <MU.AppBar position="static">
    <MU.Toolbar>
      <MU.IconButton edge="start" color="inherit" aria-label="menu" onClick={props.toggle}>
        <MenuIcon />
      </MU.IconButton>
      <Link href="/">
        <MU.Typography variant="h6" style={{ flexGrow: 1 }} className="clickable">
          Dormio管理者
        </MU.Typography>
      </Link>
      <MU.Button color="inherit">Login</MU.Button>
    </MU.Toolbar>
  </MU.AppBar>
)

export default connect(null, dispatch => ({
  toggle: () => dispatch(sidebarSlice.actions.toggle())
}))(Header)
