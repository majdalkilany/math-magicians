import './calculator.css';
import { useState } from 'react';
import calculate from '../../logic/calculate';

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

const initialObject = { total: 0, next: null, operation: null };
const Calculator = () => {
  const [obj, setObj] = useState(initialObject);

  const handleClick = (e) => {
    const { value } = e.target;

    const result = calculate(obj, value);
    setObj(result);
  };
  const renderButtons = buttons.map((btn, index) => (
    <Button key={`${btn}-${index}`} btnValue={btn} handleClick={handleClick} />
  ));
  const displayResult = () => {
    if (obj.next) {
      return obj.next;
    }
    return obj.total;
  };

  return (
    <div className="calculator">
      <input type="text" className="display" readOnly value={displayResult()} />
      {renderButtons}
    </div>
  );
};

export default Calculator;
