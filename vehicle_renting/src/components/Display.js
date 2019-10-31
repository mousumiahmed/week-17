import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Display extends React.Component{
	render(){
        console.log(this.props.persons)
		return(
			<div className = "container">
			<div className = "row">    
			{this.props.persons.map((value,index) => {
				console.log(value)
			   return (
				   <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
					   <div className="card card h-100" style= {{width: "13rem",height:"15rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
							 <div className="card-body">
							   <h6 className="card-title text-primary text-center">{value.name}</h6>
							   <p>{value.location}</p> 
							   
						   </div>
					   </div>
				   </div>
			   );
		   })}
	   </div>
	   </div>
		);
	}
}

const mapStateToProps = state =>{
	return {
        
        persons: state.persons[0]
	}
}


export default connect(mapStateToProps)(Display);