import './Button.css';
import PropTypes from 'prop-types';
// '÷',
// 'x',
// '-',
// '+',
// '=',
const Button = ({ btnValue, handleClick }) => {
  let newClassName = '';
  if (btnValue === '0') {
    newClassName = 'zero';
  } else if (btnValue === '÷' || btnValue === 'x' || btnValue === '-' || btnValue === '+' || btnValue === '=') {
    newClassName = 'operator';
  }
  return (
    <button type="button" className={`button ${newClassName}`} onClick={handleClick} value={btnValue}>

      {btnValue}
    </button>
  );
};

Button.propTypes = {
  btnValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
