import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './redux_config/actions/actions.js';

function App() {  
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment &amp; Decrement using Redux</h1>
      <div>
        <a href="#" className="button" onClick={() => dispatch(decNumber())}>-</a>
        <input type="text" className="textbox" value={myState}/>
        <a href="#" className="button" onClick={() => dispatch(incNumber())}>+</a>
      </div>
    </div>
  ) 
}

export default App;