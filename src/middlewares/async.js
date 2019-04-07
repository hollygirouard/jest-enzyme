// boilerplate example 
// function that returns a function that returns a function
export default ({ dispatch }) => (next) =>(action) => {
  // Check to see if action has promise on payload property
  // if it does wait for it to resolve
  // if it does't , send the action to the next middleware
  // debugger
  if (!action.payload || !action.payload.then) {
    return next(action)
  }
    // We want to wait for the promise to resolve
    // get its data and then create a new actions
    // with the data and dispatch it
    action.payload.then(function(response){
      const newAction = { ...action, payload: response }
      dispatch(newAction)
    })
}

// same as
// function() {
//   return function() {
//     return function() {
//
//     }
//   }
// }
