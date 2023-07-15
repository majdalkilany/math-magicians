import Calculator from './components/calculator/calculator';
import Quote from './components/quote/Quote';
import './App.css';

// https://api.api-ninjas.com/v1/quotes?category
function App() {
  return (
    <div>
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
