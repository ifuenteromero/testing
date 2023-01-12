import { useState } from 'react';
import './App.css';

function App() {
  const [ disabled, setDisabled ] = useState(false);

  const handleChange = ({ target }) => {
    setDisabled(target.checked);
  }

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'column' }}
    > 
      <button 
        style={{ width: '100px '}}
        disabled={disabled}
      >
        Button
      </button>
      <input 
        id='disable-button-checkbox'
        type='checkbox' 
        style={{ width: '100px '}}
        onChange={ handleChange }
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
