import { GET_USERS } from './constants'

export const changeUserList = (data) => ({ type: GET_USERS, playload: data })

export const getUsersList = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        dispatch(changeUserList(json))
      })
  }
}
