function hotelCost(){
    let num_nights = null;
    do{
        num_nights = prompt("Please enter a number of nights");
        num_nights = Number(num_nights);

        
    }while(isNaN(num_nights) || num_nights ===0)

    return num_nights * 140;
}

// let hotelCost1 = hotelCost();
// console.log(hotelCost);

//Part 2

function planeRideCost(){
    let destination = "";

    do{
        destination = prompt("Please enter your destination").trim();
        
    }
    while(destination === "" || typeof destination !== 'string');

    let ticket = 300;
    if(destination === "London"){
        ticket = 183;
    }
    else if(destination === "Paris"){
        ticket == 220;
    }
    return ticket;
  
}

// planeTicket =  planeRideCost()
// console.log(planeTicket);

//Part 3

function rentalCarCost(){
    let num_days = null;
    do{
        num_days = prompt("Please enter rental cost ");
        num_days = Number(num_days);''
    }
    while(isNaN(num_days) || num_days <=0)

    let total_amount = num_days *40;

    if(num_days > 10){
        total_amount *= 0.95;
    }
    return total_amount;
}

// console.log(rentalCarCost());

//Part 4

function totalVacationCost(){
    let carCost = rentalCarCost();
    let ticket = planeRideCost();
    let hotel = hotelCost();

    console.log("The car cost: $ " + carCost + ", the hotel cost " + hotel + " plane ticket " + ticket);

    return (carCost + ticket + hotel);
}

console.log(totVacationCost());


