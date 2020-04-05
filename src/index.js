import React, { Component }from 'react';  //con {elemento} se exportan todos los componentes para evitar escribirlo cuando una clase herede de React
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Components
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import tasks from './samples/tasks.json';
import Tasks from './components/tasks';

class App extends Component{ // evitamos escribir React.Component gracias a como importamos en la linea  1

  state ={
  tasks : tasks
}

addTask = (title, description) =>{
  const newTask = {
    id : this.state.tasks.length,
    title : title,
    description : description,
    done : false
  }
  this.setState((state) => ({
    tasks : [...state.tasks, newTask]
}));
  console.log(this.state)
}

deleteTask = id =>{
const newtasks = this.state.tasks.filter(task => task.id !== id);
this.setState((state) => ({
tasks : newtasks
}));
}

checkDone = id =>{
const newTasks = this.state.tasks.map((task) => {
  return{
    ...task,
    done: task.id === id ? !task.done : task.done
  }  
}
);
this.setState({tasks :  newTasks});
}

render(){
    return(
    <div>
      <Router>
        <Link to="/">
          <button>
            tareas
          </button>
        </Link>
        <br/>
        <Link to="/posts">
          posts
        </Link>
        <br/>
        <Route exact path="/" render={ () => {
          return (
            <div>
              <TaskForm addTask={this.addTask}/>
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask} 
                checkDone={this.checkDone}
              /> 
            </div>
          );     
              }
          }
          >
        </Route>
      </Router>
      <Router>
        <Route exact path="/posts" component={Posts}
        />
      </Router>
      
    </div>
    )
  }
// state = {
//   tasks : tasks
// }
// addTask = (title,img,description) =>{
//   const newTask = {
//     id : this.state.tasks.lenght,
//     title : title,
//     img : img,
//     description : description
//   }
//   this.setState({
//     tasks : [...this.state.tasks, newTask]
//   })
//   console.log(this.state)
// }
// render(){
//   return (
    
//     <div>
//       <TaskForm addTask={this.addTask}/>
//       <Tasks tasks={tasks}/>
//     </div>
//   );
// }
}
ReactDOM.render(<App/>, document.getElementById('root'));