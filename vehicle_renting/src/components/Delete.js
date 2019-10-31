import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"

export default class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            

        }
    }

    // componentDidMount(){
    //     axios({
    //         method: 'get',
    //         url: `http://localhost:5000/users/show/${this.props.match.params.id}`,
            
    //     })
    //     .then((response) =>{
    //         console.log(response)
    //         this.setState({
    //             "name": response.data[0].name
                
    //         })
           
    //     })
       
    // }

    // edit = ()=>{
    //     //console.log(code,name,id)
    //      axios({
    //          method: 'POST',
    //          url: `http://localhost:5000/users/update/${this.props.match.params.id}`,
    //          data:{
                 
    //           "name": this.state.name,
    //           "quantity": this.state.quantity,
    //           "description":this.state.description
                 
    //          }
    //      })
    //      .then((response) =>{
    //          console.log(response.data)
    //      })
        
    // }
    delete =(id)=>{
        console.log(id)
     axios({
         method: 'GET',
         url: `http://localhost:5000/users/delete/${this.props.match.params.id}`,
        
     })
     
         .then((response) =>{
             console.log( "delele "+response.data)
         
         })
  
    }

    render(){
        return(
            <div className = "container">
                <br/>
                <br/>
                <form >
                
                <div className = "form-group">
                    <button type="button" className="btn btn-primary text" onClick ={()=> {this.delete()}}>Delete</button>
                </div>
                </form>
                </div>
        )
    }
}

