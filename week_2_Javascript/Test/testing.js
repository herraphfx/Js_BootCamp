var passengers = [ 
{ name: "Jane Doloop", paid: true, ticket: 'coach'},
{ name: "Dr. Evel", paid: true , ticket: 'firstclass'},
{ name: "Sue Property", paid: true, ticket: 'firstclass'},
{ name: "John Funcall", paid: true , ticket: 'coach'} ];

function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
    if (!passengers[i].paid) {
    return false;
    
    }
    }
    return true;
}

function checkNoFly(passengers) {
    for (var i = 0; i < passengers.length; i++) {
    if (checkNoFlyList(passengers[i].name)) {
    return false;
    }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}


function checkNotPaid(passenger) {
    return (!passenger.paid);
}
  

function processPassengers(passengers, testFunction) {
        for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
        return false;
        }
        }
        return true;
    }

var allCanFly = processPassengers(passengers, checkNoFly);
    if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
    }

    var allPaid = processPassengers(passengers, checkNotPaid);
    if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
    }



function createDrinkOrder(passengers){
    let orderFunction;
    if(passengers.ticket === 'firstclass'){
        orderFunction = function(){
            alert('Would you like a cocktail or wine ?')
        }

       
    }else{
        orderFunction = function(){
            alert('Your choice is cola and water ')
        }
        
    }
    return orderFunction
}

function serveCustomer(passengers){
    let getOrderFunction = createDrinkOrder(passengers);
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
        }
    getOrderFunction();
}

serveCustomer(passengers)
