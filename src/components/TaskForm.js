// import React, { Component } from 'react';

// export default class TaskForm extends Component{
    
//     state = {
//         title : "",
//         description : "",
//         img : ""
//     }

//     onSubmit = e =>{
//         e.preventDefault();
//         this.props.addTask(this.state.title, this.state.img, this.state.description)
//         console.log("esta funcionando ")
//     }

//     onChange = e =>{
//     this.setState({
//         [e.target.name] : e.target.value})
//     }

//     render(){
//         return(
//             <div>
//                 <form>
//                     <input 
//                     type="text" 
//                     name="title" 
//                     placeholder="write a title" 
//                     onChange={this.onChange}
//                     value={this.state.title}/>
//                     <br/>
//                     <br/>
//                     <input 
//                     type="text" 
//                     name="img" 
//                     placeholder="write the img source"
//                     onChange={this.onChange}
//                     value={this.state.img}
//                     />
//                     <br/>
//                     <br/>
//                     <textarea 
//                     name="description" 
//                     placeholder="Product description" 
//                     onChange={this.onChange}
//                     value={this.state.description}/>
//                     <br/>
//                     <button onClick={this.onSubmit}>
//                         agregar
//                     </button>
//                     <br/>
//                     <br/>
//                 </form>
//             </div>
//         );
//     }
// }



 import React, { Component} from 'react';

export default class TaskForm extends Component{ 
    state = {
        title : '',
        description : ''
    }
onSubmit = e =>{
    e.preventDefault();
    this.props.addTask(this.state.title, this.state.description);
}
onChange = e =>{
    console.log(e.target.name, e.target.value);
    this.setState({
        [e.target.name] : e.target.value});
}
render(){
    return(
        <form onSubmit={this.onSubmit}>
            
            <input 
            name="title"
            type="text" 
            placeholder="write a task" 
            onChange={this.onChange}
            value={this.state.title}/>
            <br/>
            <br/>
            <textarea 
            name="description"
            placeholder="write a description" 
            onChange={this.onChange}
            value={this.state.descirption}/>
            <br/>
            <input type="submit"/>
          </form>
    );
}

  }
