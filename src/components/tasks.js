import React, { Component } from 'react';
import Task from './Task';
import propTypes from 'prop-types';

export default class Tasks extends Component{
    
    render (){
        return(
            this.props.tasks.map(task => 
            <Task 
                task={task} 
                key={task.id} 
                deleteTask={this.props.deleteTask}
                checkDone={this.props.checkDone}
            /> )
        );
    }
}

// export default function Tasks(props){
//         return (
//         props.tasks.map(task => 
//         <div style={table} key={task.id}>
//             <Task 
//                 task={task} 
//             />
//         </div>)
//         );
//     }
// const table = {
//     height : "100vh",
//     width : "100vh",
//     background : "red",
//     display : "flex",
//     flexDirection : "column",
//     flexWrap : "wrap",
//     justifyItems : "center",
// }
Tasks.propTypes = {
    tasks : propTypes.array.isRequired
}

