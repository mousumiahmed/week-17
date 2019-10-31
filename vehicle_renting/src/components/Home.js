import React from 'react';
import axios from 'axios';
import {Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addItem} from '../actions';
import {connect} from 'react-redux'; 


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            persons: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/users`)
      .then(res => {
       console.log(res.data);
       this.props.add(res.data)
       this.setState({
        persons:res.data
        });
      })
      .catch(err=>alert(err))
  }
  
  delete =(e)=>{
    console.log(e.target.id)
 axios({
     method: 'GET',
     url: `http://localhost:5000/users/delete/${e.target.id}`,
    
 })
 
     .then((response) =>{
         console.log( "delele "+response.data)
         axios.get(`http://localhost:5000/users`)
         .then(res => {
          console.log(res.data);
           this.setState({
                persons:res.data
                });
         })
         console.log(this.state.persons);
     })

}

  render() {
      console.log(this.props.persons[0]);
      console.log(this.state.persons)
    return (
        <div className = "container">
        <div className = "row">    
        {this.state.persons.map((value,index) => {
           return (
               <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                   <div className="card card h-100" style= {{width: "13rem",height:"15rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                         <div className="card-body">
                           <h6 className="card-title text-primary text-center">{value.name}</h6>
                           <p>{value.location}</p> 
                           <p><img src="data:image/jpeg;base64,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" style={{width:"85%"}}/></p>
                           <p><Link to={`/edit${index}`} >Edit</Link><span className="m-2"></span><button type="button" onClick = {this.delete} id={value._id.$oid}>Delete</button></p>                  
                       </div>
                   </div>
               </div>
           );
       })}
   </div>
   </div>
        )
  }
}
// mapping state to props of TodoRedux
const mapStateToProps = state => {
    console.log("map State called TODO app");
    return {
      persons: state.persons
    };
  };
  // mapping dispatcher to props of TodoRedux
  const mapDispatchToProps = dispatch => {
    console.log("map Dispatcher called TODO app");
    return {
      add: item => dispatch(addItem(item))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
// const mapDispatchToProps = (dispatch) => {
//     return{
//     add: () => {console.log('hey you called add dispatch')}
//     }
//   }
// export default  connect(null, mapDispatchToProps)(Home)