let people = ["Greg", "Mary", "Devon", "James"]

//Part 1
people.shift();
console.log(people);

people.splice(2,1, 'Jason');
console.log(people);

people.push('Henry');
console.log(people);

console.log(people.indexOf('Mary'));

console.log(people.slice(1));


console.log(people.indexOf('Foo')); //Element is not present


//Part 2

for (i = 0; i < people.length; i++){
    console.log(people[i]);

    if(people[i] == 'Jason'){
        break;
    }
}

