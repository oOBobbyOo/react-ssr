import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTodos } from './store/actions'

function Home({ getTodosDispath, todos }) {
  useEffect(() => {
    getTodosDispath()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <hr />
      {todos && todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.home.todos
})

const mapDispatchToProps = (dispatch) => ({
  getTodosDispath: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
