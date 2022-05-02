// var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];

// let flavoroftheday = flavors;

// flavoroftheday[3];
// console.log(flavoroftheday[3]);


//2

// function makePhrases() {
//     var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//     var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//     var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
//     var rand1 = Math.floor(Math.random() * words1.length);
//     var rand2 = Math.floor(Math.random() * words2.length);
//     var rand3 = Math.floor(Math.random() * words3.length);
//     var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     alert(phrase);
//     }
//     makePhrases();

//3

// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


// let highscore = 0;
// for(let i = 0; i < scores.length; i++){
//     output = "Bubble solution #" + i + " score: " + scores[i];
    
//     if (scores[i] > highscore){
//         highscore = scores[i]
//     }
// }
// console.log(highscore);

// var bestSolutions = [];
// for (var i = 0; i < scores.length; i++) {
// if (scores[i] == highscore) {
// bestSolutions.push(i);
// }
// }
// console.log("Solutions with the highest score: " + bestSolutions);

// var costs = [.25, .27, .25, .25, .25, .25,
//     .33, .31, .25, .29, .27, .22,
//     .31, .25, .25, .33, .21, .25,
//     .25, .25, .28, .25, .24, .22,
//     .20, .25, .30, .25, .24, .25,
//     .25, .25, .27, .25, .26, .29];

//     var cost = 100;
//     var index;

//     for (var i = 0; i < scores.length; i++) {
//         if (scores[i] == highscore) {
//             if (cost > costs[i]) {
//             index = i;
//             cost = costs[i];

//             }
//         }
       
//     }
//     console.log(cost);

// //4
// var products = ["Choo Choo Chocolate",
// "Icy Mint", "Cake Batter",
// "Bubblegum"];

// var hasBubbleGum = [false, false,false,true];

//     var i = 0;
// while (i < hasBubbleGum.length) {

// if (hasBubbleGum[i]) {
// console.log(products[i] + " contains bubble gum");
    
//     }
//         i = i + 1;
// }


