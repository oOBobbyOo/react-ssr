import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsersList } from './store/actions'

function User({ getUsersList, users }) {
  useEffect(() => {
    getUsersList()
  }, [])

  return (
    <div>
      <h1>User</h1>
      <hr />
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.user.users
})

export default connect(mapStateToProps, { getUsersList })(User)
