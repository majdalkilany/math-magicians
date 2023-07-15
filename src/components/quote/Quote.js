import { useState, useEffect } from 'react';
import axios from 'axios';

import './quote.css';

const Quote = () => {
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
      setErr(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderQuote = () => {
    if (quote) {
      return (
        <h4>
          {quote.quote}
          ...
          <span>{quote.author}</span>
        </h4>
      );
    } if (err) {
      return (
        <h4>
          Error:
          {err}
        </h4>
      );
    }
    return <h4>Loading...</h4>;
  };
  return (<div>{renderQuote()}</div>);
};

export default Quote;
