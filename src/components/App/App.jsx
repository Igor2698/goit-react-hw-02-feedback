import React, { Component } from 'react';
import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistic } from 'components/Statistic/Statistic';
export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countFeedbacks = button =>
    this.setState(prevState => {
      console.log([prevState]);
      return { [button]: prevState[button] + 1 };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback !== 0
      ? Math.ceil((good / totalFeedback) * 100) + '%'
      : 0;
  };

  render() {
    const values = Object.keys(this.state);
    const isfeedBack = Object.values(this.state).every(value => value === 0);
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback values={values} countFeedbacks={this.countFeedbacks} />
        </Section>

        {!isfeedBack ? (
          <Section title="Statictic">
            <Statistic
              state={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedback={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </>
    );
  }
}
