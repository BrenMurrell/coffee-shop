export const SET_MACHINE_STATE = 'SET_MACHINE_STATE'

export const ADD_COFFEE = 'ADD_COFFEE'
export const SET_COFFEES = 'SET_COFFEES'
export const UPDATE_COFFEE_STATE = 'UPDATE_COFFEE_STATE'
export const RESET_COFFEES = 'RESET_COFFEES'

export const SET_ORDER = 'SET_ORDER'

export const setMachineState = (state) => {
  return {
    type: SET_MACHINE_STATE,
    state
  }
}

export const addCoffee = (newCoffee) => {
  return {
    type: ADD_COFFEE,
    newCoffee
  }
}

const setOrder = (order) => {
  return {
    type: SET_ORDER,
    order
  }
}

const resetCoffees = () => {
  return {
    type: RESET_COFFEES
  }
}

export const processOrder = (order) => {
  return (dispatch) => {
    dispatch(setOrder(order))
    dispatch(resetCoffees())
  }
}

export const updateCoffeesState = (id, newState) => {
  // console.log('dispatching action')
  // console.log('update type:', UPDATE_COFFEE_STATE, id, newState)
  return {
    type: UPDATE_COFFEE_STATE,
    id,
    newState
  }
}

export const setCoffeeStatus = (id, newState) => {
  console.log('initial action', id, newState)
  return (dispatch) => {
    dispatch(updateCoffeesState(id, newState))
  }
}
