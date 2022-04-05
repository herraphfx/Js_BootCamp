//Normal Object in JS

let obj = {
    student1: 'Oliver',
    student2: 'Dheeksha',
    student3: 'Henry',
    student4: 'Wayne'
}

//COnvert Object to JSON

let json_string = JSON.stringify(obj);
console.log(json_string);

//Convert to JSON (pretty version)
let json_pretty = JSON.stringify(obj, null, 4)
console.log(json_pretty);


//JSON
let str = '{ "student1": "Oliver", "student2": "Dheeksha", "student3": "Henry","student4": "Wayne"}'

//Convert JSON to Object
let object_from_json = JSON.parse(str);
console.log(object_from_json);


//Nested object for JSON

let cart = '{"product_001": {"qty":1, "unit_price": 100}}'

console.log(JSON.parse(cart));

//JSON METHOD 

let current_date = new Date();

console.log(current_date);
console.log(current_date.toJSON());
console.log(JSON.stringify(current_date));