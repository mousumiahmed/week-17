import React, { Component } from 'react';
import axios from 'axios';

export default class Show extends Component {
    constructor(props){
        super(props);
        this.state ={
            persons:[]

        }
        console.log('props',this.props.match.params.id)
        //console.log(this.props);
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/users`)
          .then(res => {
            console.log(res.data);
            this.setState({
                 persons:res.data
                 });
          })
          console.log(this.state.persons);
      }
    
    
    
    render() {
       console.log(this.state.persons);
        return (
            <div>
            <div className="table-responsive">
             <table className="table table-dark">
             <thead>
             <tr>
                 <th scope="col">ID</th>
                 <th scope="col">Item_Name</th>
                 <th scope="col">Quantity</th>
                 <th scope="col">Description</th>
             </tr>
            </thead>
            <tbody>
                {this.state.persons.map((val,index)=>{
                    console.log(index)
                    if(index===parseInt(this.props.match.params.id)){
                        return(
                            <tr>
                            <th scope="row"key={index}>{index}</th>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.description}</td>
                            </tr>
                        )

                    }
                       
                })}             
                </tbody>
             </table>
             
            </div>
        </div>
        )
    }
}