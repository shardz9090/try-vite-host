import styles from './App.module.css'
import './main.css'
import Display from './components/Display'
import ButtonsAll from './components/ButtonsAll'
import { useState } from 'react'


function App() {
  const [calVal, setcalVal] = useState("")
  const onButtonsClick = (buttonName) => {
    if (buttonName == 'C') {
      setcalVal("")
    } else if (buttonName == '=') {
      try {
        const sanitizedCalVal = calVal.replace(/^0+(?=\d)/, '');
        const result = eval(sanitizedCalVal);
        setcalVal(result.toString());
      } catch (error) {
        setcalVal("Error");
      }
    } else if (buttonName == 'BS') {
      const newInputDisplay = calVal.slice(0, -1)
      setcalVal(newInputDisplay)
    }
    else {
      const newInputDisplay = calVal + buttonName.replace(/^0+(?=\d)/, '');
      setcalVal(newInputDisplay)
    }
  }
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsAll onButtonsClick={onButtonsClick} />
    </div>
  )
}

export default App
