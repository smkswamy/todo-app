import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoModal from '../components/AddTodoModal'

const mapDispatchToProps = dispatch => ({
  addTodo: id => dispatch(addTodo(id))
})

export default connect(null, mapDispatchToProps)(AddTodoModal)