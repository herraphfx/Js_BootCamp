const reducer = (state, action) => {
    //list of days
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    

   
    //action.day is the payload from the actions folder
  

    switch (action.type) {

        //if we want to get the next day
        case "FORWARD_DAY":
            console.log("IN THE REDUCER - case FORWARD_DAY")
            return state;

        //if we want to get the previous day
        case "BACKWARD_DAY":
            console.log("IN THE REDUCER - case BACKWARD_DAY")
            return state;
        default:
            return state; //Otherwise, return the existing state unchanged
    }
}

export { reducer };