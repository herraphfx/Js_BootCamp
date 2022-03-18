colors = ['blue', 'red', 'green', 'orange', 'pink'];
suffix = ['st', 'nd', 'rd', 'th', 'th'];

for(element in colors){
    let newelement = Number(element)+1;
    console.log('My ' + newelement + " is " + colors[element]);

    for(element in suffix){
        let newest = Number(element)+1;
        console.log('My '+ newest + suffix[element]+ " is "+ colors[element]);
    }
    // for(i=0; i < suffix.length; i++){
    //     console.log('My ' + i + suffix[i] + " is "+ colors[i]);
    // }
}

// for(i=0; i < colors.length; i++){
//     console.log('My ' + i + " is "+ colors[i]);
// }