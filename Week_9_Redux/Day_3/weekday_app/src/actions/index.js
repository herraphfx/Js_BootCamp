//to move on to the next day
const forward = weekday => {
    console.log("IN ACTION - forward")
    return {
        type: "FORWARD_DAY",
        day: weekday
    }
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
    forward,
    backward,
}