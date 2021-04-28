import { SET_ORDER, UPDATE_COFFEE_STATE } from '../actions/'

const intialState = [
  // { id: 1, name: 'Latte', cupState: 'ready', price: 3.5 },
  // { id: 2, name: 'Mocha', cupState: 'new', price: 3.5 },
  // { id: 3, name: 'Flatty', cupState: 'new', price: 3.5 },
  // { id: 4, name: 'Cappa', cupState: 'new', price: 3.5 }
]

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return action.order
    case UPDATE_COFFEE_STATE:
      console.log('reducer', action.id, action.newState)
      var updateCoffees = state.map((coffee, i) => {
        if (i === action.id) {
          coffee.cupState = action.newState
        }
        return coffee
      })
      return updateCoffees
    default:
      return state
  }
}

export default reducer
