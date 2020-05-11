import 'react-redux'
import { RootState } from './src/store'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
