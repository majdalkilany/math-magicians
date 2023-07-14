import PropTypes from 'prop-types';

const Quote = ({ myQuote: { quote, author } }) => (

  <h3>

    {quote}
    ...
    <span>
      {author}
    </span>
  </h3>
);

Quote.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myQuote: PropTypes.object.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
