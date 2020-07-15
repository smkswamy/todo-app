import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, title, priority, createdOn, dueDate }) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {console.log(completed, title, priority, createdOn, dueDate)}
    <td>{title}</td>
    <td>{priority}</td>
    <td>{createdOn}</td>
    <td>{dueDate}</td>
    <td></td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
}

export default Todo