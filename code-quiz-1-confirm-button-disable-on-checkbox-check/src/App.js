import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = string => {
  return string.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const toggleColor = color => color === 'red' ? 'blue' : 'red';
  
  const newButtonColor = toggleColor(buttonColor);
  
  const changeColor = () => setButtonColor(newButtonColor);
  
  const [ disabled, setDisabled ] = useState(false);
  const handleChange = ({ target }) => {
    setDisabled(target.checked);
  }

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'column' }}
    > 
      <button 
        style={{ 
          width: '100px',
          backgroundColor: disabled? 'grey' : buttonColor
        }}
        disabled={disabled}
        onClick={changeColor}
      >
        Change to blue
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
