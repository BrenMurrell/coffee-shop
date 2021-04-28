// import { SET_MACHINE_STATE } from '../actions/'
import { ADD_COFFEE, SET_COFFEES, RESET_COFFEES } from '../actions'

const initialState = [
  // { id: 1, name: 'Latte', cupState: 'ready', price: 3.5 },
  // { id: 2, name: 'Mocha', cupState: 'new', price: 3.5 },
  // { id: 3, name: 'Flatty', cupState: 'new', price: 3.5 },
  // { id: 4, name: 'Cappa', cupState: 'new', price: 3.5 }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COFFEES:
      return action.state
    case ADD_COFFEE:
      return [...state, action.newCoffee]
    case RESET_COFFEES:
      return []
    default:
      return state
  }
}

export default reducer
