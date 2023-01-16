import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = string => {
  return string.replace(/\B([A-Z])\B/g, " $1");
};

export const initalColor = 'MediumVioletRed';
export const changedColor = 'MidnightBlue';
export const disabledColor = 'Grey' 

function App() {
  const [ buttonColor, setButtonColor ] = useState(initalColor);
  const toggleColor = color => color === initalColor ? changedColor : initalColor;
  
  const newButtonColor = toggleColor(buttonColor);
  
  const changeColor = () => setButtonColor(newButtonColor);
  
  const [ disabled, setDisabled ] = useState(false);
  const handleChange = ({ target }) => {
    setDisabled(target.checked);
  }

  const textColor = replaceCamelWithSpaces(toggleColor(buttonColor));

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'column' }}
    > 
      <button 
        style={{ 
          width: '100px',
          backgroundColor: disabled? disabledColor : buttonColor
        }}
        disabled={disabled}
        onClick={changeColor}
      >
        Change to {textColor}
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
