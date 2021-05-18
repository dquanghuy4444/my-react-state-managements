import { useRef , useState } from 'react';
import App3 from './App3.js'

function App2() {
  const [isPressed , setIsPressed] = useState(false);
  const isPressedRef = useRef({
    name: "Huy",
    scrored:1
  });

  const setIsPressedRef = () =>{
    console.log("----------------------------------")
    console.log(isPressedRef)
    isPressedRef.current = {
      ...isPressedRef.current,
      scrored:isPressedRef.current.scrored + 1
    }
    console.log(isPressedRef)
  }


  return (
    <div className="App">
      <button onClick={ setIsPressedRef }>
        Nhấn nút
      </button>

      <button onClick={ () => { setIsPressed(prev => !prev)} }>
        Nhấn nút (useState)
      </button>

      <App3 isPressed={ isPressedRef.current }></App3>
    </div>
  );
}

export default App2;
