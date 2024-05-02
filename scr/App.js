import './App.css';
import React, { useState } from 'react';


function App() {
  const [contador, setContador] = useState(0);

  function buttonNext(){
    setContador(contador + 1);
 }
 function buttonBack(){
  setContador(contador - 1)
 }
 function  buttonClear(){
  setContador(0)
 }

  return (
    <div className="App">
      <header className="App-header">
        <table>Este es el cuadro donde ira el contador de numeros
          <tr id='Num'>{contador}</tr>
        </table>
        <div>
        <button  onClick={buttonBack}>Back</button>
        <button  onClick={buttonClear}>Clear</button>
        <button onClick={buttonNext}>Next num</button>
        
        
        </div>
      </header>
      <footer><p>My first proyect in react</p></footer>
    </div>
  );


  }

export default App;
