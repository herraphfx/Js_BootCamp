// const flip = () => {
//     x= (Math.floor(Math.random() * 2) == 0);
//     if(x){
//         return 'Heads';
//     }
//     else{
//         return 'tails';
//     }
// }

// const flipACoin = new Promise((resolve, reject) => {
//     const flipResult = flip();
//     if(flipResult){
//         console.log(`The result is ${flipResult}`);
//         resolve(flipResult);
//     }
//     else{
//         reject();
//     }
// }).then((flipResult) =>{
//     console.log(`I have flipped a ${flipResult}`);
// })

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve();
    },2000);
}).then((result)=>{
    console.log('Done 1');
}).then((result)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Done 2");
            resolve();
        }, 3000);
    });
}).then((result) => {
    console.log('Done 3');
})
