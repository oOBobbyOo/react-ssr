import { GET_TODOS } from './constants'

const defaultState = {
  todos: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data }
    default:
      return state
  }
}
