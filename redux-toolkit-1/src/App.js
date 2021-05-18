import logo from './logo.svg';
import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement , test } from './redux/slice/counter';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>
        The count is:
        { counter }
        </h1>

      <button onClick={ () => { dispatch(increment())} }>Increment</button>
      <button onClick={ () => { dispatch(decrement())} }>Decrement</button>
      <button onClick={ () => { dispatch(test({ value : 1}))} }>TEst value</button>
    </div>
  );
}

export default App;
