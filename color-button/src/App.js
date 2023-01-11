import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');

  const toggleColor = color => color === 'red' ? 'blue' : 'red';

  const newButtonColor = toggleColor(buttonColor);

  const changeButton = () => setButtonColor(newButtonColor);

  return (
    <div >
     <button 
        style={{ backgroundColor: buttonColor}} 
        onClick={changeButton}
     >
      Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
