    function addOperator(x,y){
   console.log('Add ' +  (x + y) )
}

// let add = addOperator;



function divideOperator(x, y){
    return x / y
}

module.exports = {
add : addOperator,
    divide : divideOperator
}