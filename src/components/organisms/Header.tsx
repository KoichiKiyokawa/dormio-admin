import React from 'react'
import * as MU from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header:React.FC = () => (
  <MU.AppBar position="static">
    <MU.Toolbar>
      <MU.IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </MU.IconButton>
      <MU.Typography variant="h6" style={{flexGrow: 1}}>
        Dormio管理者
      </MU.Typography>
      <MU.Button color="inherit">Login</MU.Button>
    </MU.Toolbar>
  </MU.AppBar>
)

export default Header
