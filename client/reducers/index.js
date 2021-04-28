import { combineReducers } from 'redux'

import machineState from './machineState'
import coffees from './coffees'
import menu from './menu'
import order from './order'

export default combineReducers({
  coffees,
  machineState,
  menu,
  order
})
