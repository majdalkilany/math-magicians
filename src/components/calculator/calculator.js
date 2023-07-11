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
  const renderButtons = () => {
    return buttons.map((btn) => {
      return <button>{btn}</button>;
    });
  };
};

export default Calculator;
