import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"

export default class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            location:""

        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: `http://localhost:5000/users/${this.props.match.params.id}`,
            
        })
        .then((response) =>{
            console.log(response)
            this.setState({
                "name": response.data[0].name,
                "location":  response.data[0].location
                
            })
           
        })
       
    }

    edit = ()=>{
        //console.log(this.state.name,this.state.location)
         axios({
             method: 'POST',
             url: `http://localhost:5000/users/update/${this.props.match.params.id}`,
             data:{
                 
              "name": this.state.name,
              "location": this.state.location
                 
             }
         })
         .then((response) =>{
             console.log(response.data)
         })
        
    }

    render(){
        console.log(this.state.name,this.state.location)
        return(
            <div className = "container">
                <br/>
                <br/>
                <form >
                <div className="form-group col-sm">
                    <label for="code">Enter Name of Vehicle</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>this.setState({name:e.target.value})}   value ={this.state.name}  />
                </div>
                <div className="form-group col-sm">
                    <label for="name">Enter the location</label>
                    <input type="text" className="form-control" id="location" onChange={(e)=>this.setState({location:e.target.value})} value={this.state.location} ></input>
                </div>
                
                
                <div className = "form-group">
                    <button type="button" className="btn btn-primary text" onClick ={()=> {this.edit();this.props.history.push('/home') }}>Submit</button>
                </div>
                </form>
                </div>
        )
    }
}