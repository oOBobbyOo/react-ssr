import { combineReducers } from 'redux'
import { reducer as homeReducer } from '../pages/Home/store'
import { reducer as userReducer } from '../pages/User/store'
import { reducer as countReducer } from '../pages/User/store'

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  count: countReducer
})

export default reducer
