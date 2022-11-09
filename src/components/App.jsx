import { useState } from 'react';
import { AppEl } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [good, neutral, bad];
  console.log(options);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const TotalFeedback = Object.values(this.state);
    return TotalFeedback.reduce((acc, item) => acc + item, 0);
  };

  return (
    <AppEl>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={(good, neutral, bad)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          // total={total}
          // positivePercentage={positivePercentage}
        />
      </Section>
    </AppEl>
  );
}

// class App extends Component {

//   countPositiveFeedbackPercentage = (good, total) => {
//     const positive = Math.round((good / total) * 100) || 0;
//     return Number.isNaN(positive) ? 0 : positive;
//   };

//   render() {
//     const {
//       onLeaveFeedback,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//     } = this;
//     const { good, neutral, bad } = this.state;
//
//     const total = countTotalFeedback();
//     const positivePercentage = countPositiveFeedbackPercentage(good, total);
//   }
// }
