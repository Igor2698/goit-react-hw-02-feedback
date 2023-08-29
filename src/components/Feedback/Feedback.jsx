import css from './Feedback.module.css';

export const Feedback = ({ values, countFeedbacks }) => {
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
