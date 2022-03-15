//Exercise XP Gold

let me = ["my","favorite","color","is","blue"]


console.log(me.join(' '));

//Exercise 2
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



console.log(newword.join(''));

