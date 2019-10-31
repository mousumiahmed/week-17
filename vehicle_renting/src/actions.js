const ADD_ITEM = "ADD ITEM";

// create action creators and export
const addItem = item => {
  console.log("add item called");
  return {
    type: ADD_ITEM,
    item
  };
};

export { addItem };


// TODO define string constants for all the action types
// const ADD = "ADD";
// // const SUBTRACT = "SUBTRACT";
// // const MULTIPLY = "MULTIPLY";
// // const DIVIDE = "DIVIDE";

// //Do not modify this function!
// export const add = (item)=>{
// 	return{
// 		type : ADD,
// 		item
		
// 	}
// }

// TODO complete the subtract, multiply and divide functions
// The type of each should be the same as the function name but in UPPERCASE
// export const subtract = value =>{
// 	return{
// 		type : SUBTRACT,
// 		value
// 	}
// }
// export const multiply = value =>{
// 	return{
// 		type : MULTIPLY,
// 		value
// 	}
// }
// export const divide = value =>{
// 	return{
// 		type : DIVIDE,
// 		value
// 	}
// }