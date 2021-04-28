// import { SET_MACHINE_STATE } from '../actions/'

const initialState = [
  { id: 1, name: 'Americano', price: 3 },
  { id: 2, name: 'Cappuccino', price: 4.5 },
  { id: 3, name: 'Flat white', price: 4.5 },
  { id: 4, name: 'Latte', price: 4.5 },
  { id: 5, name: 'Long black', price: 3 },
  { id: 6, name: 'Macchiato', price: 4 },
  { id: 7, name: 'Mocha', price: 4.5 },
  { id: 8, name: 'Short black', price: 2.5 },
  { id: 9, name: 'Vienna', price: 4 }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COFFEES':
      return action.state
    default:
      return state
  }
}

export default reducer
