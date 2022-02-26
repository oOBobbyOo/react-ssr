import { GET_USERS } from './constants'

const defaultState = {
  users: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.playload }
    default:
      return state
  }
}
