import css from './Statistic.module.css';

export const Statistic = ({
  state,
  countTotalFeedback,
  countPositiveFeedback,
}) => {
  console.log(state);
  console.log(countTotalFeedback());

  return (
    <div className={css.containerStatist}>
      <p className={css.statText}>
        Good:
        <span className={css.valueOfStat}>{state.good}</span>
      </p>
      <p className={css.statText}>
        Neutral: <span className={css.valueOfStat}>{state.neutral}</span>
      </p>
      <p className={css.statText}>
        Bad: <span className={css.valueOfStat}>{state.bad}</span>
      </p>
      <p className={css.statText}>
        Total: <span className={css.valueOfStat}>{countTotalFeedback()}</span>
      </p>
      <p className={css.statText}>
        Positive feedback:{' '}
        <span className={css.valueOfStat}>{countPositiveFeedback()}</span>
      </p>
    </div>
  );
};
