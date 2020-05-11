import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false
  },
  reducers: {
    toggle(state) {
      state.open = !state.open
    }
  }
})
