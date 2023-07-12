import './calculator.css';

import { useState } from 'react';
import Button from '../Button/Button';

const buttons = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const Calculator = () => {
  const [calculatorInputs, setCalculatorInputs] = useState('0');
  const handleClick = (e) => {
    const { value } = e.target;
    let newCalculatorInputs = calculatorInputs;
    if (calculatorInputs[0] === '0') {
      newCalculatorInputs = calculatorInputs.slice(1);
      setCalculatorInputs(newCalculatorInputs);
    }
    if (value === 'AC') {
      setCalculatorInputs('0');
    } else {
      setCalculatorInputs(newCalculatorInputs + value);
    }
  };
  const renderButtons = buttons.map((btn, index) => (
    <Button key={`${btn}-${index}`} btnValue={btn} handleClick={handleClick} />
  ));

  return (
    <div className="calculator">
      <input type="text" className="display" readOnly value={calculatorInputs} />
      {renderButtons}
    </div>
  );
};

export default Calculator;
