import { SET_MACHINE_STATE } from '../actions/'

const intialState = 'off'

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_MACHINE_STATE:
      return action.state
    default:
      return state
  }
}

export default reducer
