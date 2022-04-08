const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=> {
            if(request.readyState ===4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('error getting resources');
            }
        })
    })
}





let getSomething = () =>{
    return new Promise((resolve, reject) =>{
        //fetch something
        resolve('some data')
        reject('some error')
    });
};

getSomething().then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})

//Example 1
let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades) {
        resolve("I will get a gift");
    } else {
        reject("I won't get the gift");
    }
});

endSemester.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('I gave my best');
})