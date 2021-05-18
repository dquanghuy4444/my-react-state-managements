import './App.css';
import { useState } from 'react';
import App2 from './App2.js'

function App() {
  const [isPressed , setIsPressed] = useState(false);

  return (
    <div className="App">

      <button onClick={ () => { setIsPressed(prev => !prev)} }>
        Nhấn nút (useState)
      </button>

      {
        isPressed && (
          <App2></App2>
        )
      }
    </div>
  );
}

export default App;
