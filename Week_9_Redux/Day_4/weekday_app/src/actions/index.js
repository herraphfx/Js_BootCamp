//to move on to the next day
const forward = weekday => {
    console.log("IN ACTION - forward")
    return {
        type: "FORWARD_DAY",
        day: weekday
    }
}

//async code
//dispatch the action once after 3 seconds
const forwardAsync = (day) =>{
    return dispatch => {
        setTimeout(()=>{
            console.log('seTimeOut');
            //dispatch the forward action creator
            dispatch(forward(day))
        }, 3000)
    };
}

//to go back to the previous day
const backward = weekday => {
    console.log("IN ACTION - backward")
    return {
        type: "BACKWARD_DAY",
        day: weekday
    }
}

//we export the two functions
export {
    forwardAsync,
    backward,
}