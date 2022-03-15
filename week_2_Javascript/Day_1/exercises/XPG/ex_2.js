

//Exercise 2A
let str1 = "mix" 
let str2 = "pod"

let newwo = str1 + str2;
//mixpod

newsplit = newwo.split('');
console.log(newsplit);
//pox
p = newsplit.splice(3,1);
console.log(p);
o = newsplit.splice(3,1);
console.log(o);
x = newsplit.splice(2,1);

//mid
m = newsplit.splice(0,1);
console.log(p);
i = newsplit.splice(0,1);
console.log(o);
d = newsplit.splice(0,1);
console.log(d);


new1 = [p,o,x];
console.log(new1);

new2 = [m,i,d];
console.log(new2);



let newword = new1.concat(new2);



console.log(newword.join(' '));


//Exercise 2B
let firstWord = "Hello";
let secondWord = "World";

let thirdWo = firstWord + secondWord;
//HelloWorld

//split
thirdSplit = thirdWo.split('');
console.log(thirdSplit);

//Wollo
w = thirdSplit.splice(5,1);
console.log(w);
o = thirdSplit.splice(5,1);
console.log(o);
l = thirdSplit.splice(2,1);
console.log(l);
l = thirdSplit.splice(2,1);
console.log(l);
o = thirdSplit.splice(2,1);
console.log(o);

//Herld
h = thirdSplit.splice(0,1);
console.log(h);
e = thirdSplit.splice(0,1)
console.log(e);
r= thirdSplit.splice(0,1);
console.log(r);
l = thirdSplit.splice(0,1);
console.log(l);
d = thirdSplit.splice(0,1);
console.log(d);


new1 = [w,o,l,l,o];
console.log(new1);

new2 = [h,e,r,l,d];
console.log(new2);

let thirdWord = new1.concat(new2);

console.log(thirdWord.join(' '));





