import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ values, countFeedbacks }) => {
  return (
    <div className={css.buttonsContainer}>
      {values.map(value => (
        <button
          key={value}
          className={css.button}
          onClick={() => countFeedbacks(value)}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  countFeedbacks: PropTypes.func.isRequired,
};
