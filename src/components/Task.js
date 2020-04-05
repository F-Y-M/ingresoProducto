import React,{ Component } from "react";
import propTypes from 'prop-types';
//import TaskForm from "./TaskForm";

// export default class Producto extends Component{

//     cardStyle(){  // estilo css para hacer una tarjera para los productos
//         return {
//                     heigth : "70px",
//                     width : "10rem",
//                     background : "#088A68",
//                     border : "solid red",
//                     borderRadius : "50px 0",
//                     display :"flex",
//                     flexDirection : "column",

//         }
//     }
//     render(){
//         const {task} = this.props;

//         return (
//                 <div style={this.cardStyle()} key={task.id}> 
//                     <div style={header}>
//                         <h1>
//                             {task.id}
//                         </h1>
//                         <p>
//                             {task.title}
//                         </p>
//                         <button style={btnDelete}>
//                             x
//                         </button>
//                     </div>
//                     <div style={description}>
//                         <img src={task.img} alt="no hay imagen"style={img}/>
//                         <article>
//                             <h3>
//                                 Description: 
//                             </h3>
//                             {task.description}
//                         </article>
//                     </div>
//                 </div>
//         );
//     }
// }
// const btnDelete = {
//     flexBasis : "2rem",
//     height : "2rem",
//     barckground : "red",
//     borderRadius : "50px",
//     fontSize : "15px",
//     cursor : "pointer",
// }
// const header = {
//     background : "#BDBDBD",
//     borderRadius : "50px 0",
//     display : "flex",
//     flexDirection : "row",
//     flexWrap : "nowrap",
//     justifyContent : "space-between",
// }
// const img = {
//     heigth : "70%",
//     width : "70%",
// }
// const description = {
//     display : "flex",
//     flexDirection : "column",
//     justifyContent : "center",
//     alignItems : "center",
// }
// Producto.propTypes = {
//     task : propTypes.object.isRequired
// }
export default class Task extends Component{
     state = {
        done : this.props.task.done
    }
    styleCompleted(){
       return {
            fontSize : '20px',
            color : this.props.task.done ? 'grey' : 'black',
            textDecoration : this.props.task.done ? 'line-through' : 'none'
        }
    }
    render(){
        const {task} = this.props; // con esta linea extraemos el arreglo que nos stan devolviendo y lo guardamos en otro llamado task        
            return(
                <div style={this.styleCompleted()}>
                    {task.title} -  
                    {task.id} - 
                    {task.description}  
                    <input 
                        type="checkbox" 
                        onChange={this.props.checkDone.bind(this, task.id)}
                    />
                    <button 
                        style={btnDelete} 
                        onClick={this.props.deleteTask.bind(this, task.id)}
                    >
                      x
                    </button>
                </div>     
            );
    }
}

Task.propTypes = {
    task : propTypes.object.isRequired
}


const btnDelete = {
    fontSize : '18px',
    background : 'red',
    color : '#fff',
    border : 'none',
    padding : '10px 15px',
    borderRadius : '50%',
    cursor : 'pointer'

}