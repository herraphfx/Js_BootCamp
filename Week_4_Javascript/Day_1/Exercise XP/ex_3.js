let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ['st', 'nd', 'rd', 'th', 'th','th','th'];



colors.forEach((value, index)=>{
    // let newest = Number(index)+1;
    // console.log( newest + ordinal[index]+ " is "+ colors[index]);
   

    console.log(`${index+1}${ordinal[index]} is ${colors[index]}`);


});


        