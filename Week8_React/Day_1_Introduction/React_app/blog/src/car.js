import React from 'react';


//Create class componet

// class Car extends React.Component{
//     render(){
//         return <h1>Hello I am good</h1>
//     }
// }
// const brand = 'Ford'

const Car = (props) => {
    // return <h2>Hi, I am also a Car!</h2>;
    return <h1>Hi i am a {props.carBrand} my name is {props.name} </h1>;
  }



export default Car;

