// use same variable and content for actions.
// These can be imported from actions also
const ADD_ITEM = "ADD ITEM";

// initialise store
const initState = {
	persons: []
};

// Create the reducer, pass initial store values as default value
// to state so that when we create Store the inital value is returned
const reducer = (state = initState, action) => {
  console.log("entered reducer");
  switch (action.type) {
    case ADD_ITEM:
      console.log("ADD ITEM Called");
      // let temp = {
      //   name: action.name,
      //   location: action.location
      // };
      return {
        persons: [action.item]
      };

    default:
      console.log("default called", state);
      return state;
  }
};

export default reducer;



// const ADD = "ADD";
// const SUBTRACT = "SUBTRACT";
// const MULTIPLY = "MULTIPLY";
// const DIVIDE = "DIVIDE";

// const initialState = {
// 	result : 0,
// 	resultArray : []
// }


// const reduce = (state = initialState, action) =>{
// 	switch(action.type){
// 		case ADD:
// 			return {
// 				result : state.result  + action.value+action.value1,
// 				resultArray:[...state.resultArray, action.value,action.value1]
				
// 			}
// 		// case SUBTRACT:
// 		// 	return {
// 		// 		result : state.result - action.value,
// 		// 		resultArray:[...state.resultArray,state.result - action.value]
// 		// 	}
// 		// case MULTIPLY:
// 		// 	return{
// 		// 		result : state.result * action.value,
// 		// 		resultArray:[...state.resultArray,state.result * action.value]
// 		// 	}
// 		// case DIVIDE:
// 		// 	return{
// 		// 		result:state.result / action.value,
// 		// 		resultArray:[...state.resultArray,state.result / action.value]


// 		// 	} 
// 		default : 
// 			return state
// 	}
// }


// export default reduce;