import React from 'react';
import logo from './logo.svg';
import './App.css';
import tododata from "./tododata.js"
import Todoitem from "./Todoitem.js"
class App extends React.Component {

  constructor()
  {
    super()
    this.state={
      todos:tododata
    }

    //inside constructor
    //lets call this function outside
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(id)
  {
    //changes the checkbox state
    //here this.state is todos so we have to change that so we use this.setState
    //here we are not directly instead returning a map so we use a map

    this.setState=(prevState =>{
      const updatedtodos=prevState.todos.map(todo=>{
        if(todo.id==id)
        {
          return{
            ...todo,
            completed: !todo.completed
          }
          todo.completed=!todo.completed
        }
        return todo
      })

      return {
        todos: updatedtodos
      }
    })
  }


  render()
  {
    //const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    const todoitems=this.state.todos.map(item=><Todoitem item={item} handleChange={this.handleChange}/> )
    return (
      <div className="todolist">
      {todoitems}
      </div>
    
  );
  }
  
}

export default App;
