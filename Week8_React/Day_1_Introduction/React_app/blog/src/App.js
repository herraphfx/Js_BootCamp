// import logo from './logo.svg';
import './App.css';
import Car from './car';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
//       </header>
     
//     </div>
//   );
// }


function App() {
  const carName = "Lightning McQueen"
  const carBrand = "Ford"
  return (
    <div>
      <h1>In the App.js</h1>
      <Car carBrand={carBrand} name={carName}/>
    </div>
  );
}

export default App;
