const reducer = (state, action) => {
  

    switch (action.type) {

        //if we want to get the next day
        case "ADD":
        new_value = Number(action.number + 1)
            return {
                ...state, //copying the original state
                value: new_value, //update the weekday key from the state
            }

        //if we want to get the previous day
        case "SUBTRACT":
            new_value = Number(action.number - 1)
            return {
                ...state, //copying the original state
                value: new_value, //update weekday key from the state
            }
        default:
            return state; //Otherwise, return the existing state unchanged
    }
}

export { reducer };