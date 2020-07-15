import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const App = () => (
  <div className="container">
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App