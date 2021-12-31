import useCounter from './stores/Counter'
import { batch } from 'react-sweet-state';
import React, { useEffect, useState } from "react"

let numRender = 0

const CounterApp = () => {
  const [state, actions] = useCounter();
  const [changing, setChanging] = useState(false);
  
  const { increment } = actions;

  numRender++
  console.log("render " + numRender)


  useEffect(() => {
    batch(() => {
      setChanging(true);
      actions.increment();
      setChanging(false);
    });
  }, [])

  return (
    <div>
      {state.count}
      <br></br>
      <button onClick={() => increment()}>Add +1</button>
      <button onClick={() => increment(2)}>Add +2</button>
    </div>
  );
};

export default CounterApp