import logo from './logo.svg';
import './App.css';
import Car from './Components/Car'

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div className="box">
    <h1>In the App.js</h1>
    <Car carName={carinfo.name} carModel={carinfo.model}/>
  </div>
  );
}

export default App;
