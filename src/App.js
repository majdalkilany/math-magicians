import { useState, useEffect } from 'react';
import axios from 'axios';
import Calculator from './components/calculator/calculator';
import Quote from './components/quote/Quote';
import './App.css';

// https://api.api-ninjas.com/v1/quotes?category
function App() {
  const [quote, setQuote] = useState('');
  const [err, setErr] = useState(undefined);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'Pv22IAZ+1DA60IAISrFLsg==d7EICAbn0JwtbNjK' },
        contentType: 'application/json',
      });
      setQuote(response.data[0]);
    } catch (error) {
      setErr(error.response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderQuote = () => {
    if (quote) {
      return <Quote myQuote={quote} />;
    } if (err) {
      return (
        <h6>
          Error:
          {err}
        </h6>
      );
    }
    return <h6>Loading...</h6>;
  };
  return (
    <div>
      <Calculator />
      {renderQuote()}
    </div>
  );
}

export default App;
