const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var today = new Date();
      var createdOn = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return [
        ...state,
        {
          id: action.id,
          title: action.todo.title,
          description: action.todo.description,
          priority: action.todo.priority,
          dueDate: action.todo.date,
          createdOn: createdOn,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos;