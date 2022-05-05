//to move on to the next day
const add = value => {
    return {
        type: "ADD",
        number: value,
        
    }
}

//to go back to the previous day
const substract = value => {
    return {
        type: "SUBSTRACT",
        number: value
    }
}

//we export the two functions
export default {
    add,
    substract,
}