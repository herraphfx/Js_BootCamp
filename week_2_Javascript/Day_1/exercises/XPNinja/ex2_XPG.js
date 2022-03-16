// let num = '1,2,3,4';
num = prompt('numbers');

nuum2= num.split(',');
console.log(nuum2);

sum1 = Number(nuum2[0].trim());
sum2 = Number(nuum2[1].trim());
sum3 = Number(nuum2[2].trim());
sum4 = Number(nuum2[3].trim());

finalresult = sum1 + sum2 + sum3 + sum4;

console.log(finalresult);