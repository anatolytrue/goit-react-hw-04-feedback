import './App.css'
import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
// import classNames from "classnames";

class App extends Component {


  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const currentBtnValue = e.currentTarget.name;
    this.setState(prevState => ({
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback() && parseInt((good / this.countTotalFeedback()) * 100);
  }
  
  
  render() {
    const { good, neutral, bad } = this.state;
    const buttons = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    
  return (
    <div className="counter">
      <Section title="Please leave feedback">

        <FeedbackOptions
          options={buttons }
          onLeaveFeedback={ this.onLeaveFeedback}
        />
        
      </Section>
      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={positivePercent}
        />
        ) : (<Notification message="There is no feedback"/>)}  
        
      </Section>
        
      </div>
    );

  }
  
};

export default App;
