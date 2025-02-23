import { useState, useEffect } from "react";

import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Descriction from "../Descriction/Descriction";
import Notification from "../Notification/Notification";

function App() {
  const [feedBackValue, setFeedBackValue] = useState(() => {
    const savedFeedBackValue = window.localStorage.getItem(
      "saved-feedBackValue"
    );

    if (savedFeedBackValue !== null) {
      console.log(JSON.parse(savedFeedBackValue));
      return JSON.parse(savedFeedBackValue);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "Good") {
      setFeedBackValue({
        ...feedBackValue,
        good: feedBackValue.good + 1,
      });
    }

    if (feedbackType === "Neutral") {
      setFeedBackValue({
        ...feedBackValue,
        neutral: feedBackValue.neutral + 1,
      });
    }

    if (feedbackType === "Bad") {
      setFeedBackValue({
        ...feedBackValue,
        bad: feedBackValue.bad + 1,
      });
    }

    if (feedbackType === "Reset") {
      setFeedBackValue({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      window.localStorage.removeItem("saved-feedBackValue", feedBackValue);
    }
  };

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedBackValue",
      JSON.stringify(feedBackValue)
    );
  }, [feedBackValue]);

  const totalFeedback =
    feedBackValue.good + feedBackValue.neutral + feedBackValue.bad;

  const positiveFeedback = Math.round(
    (feedBackValue.good / totalFeedback) * 100
  );

  console.log(feedBackValue);
  return (
    <>
      <Descriction
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        handle={updateFeedback}
        btnGood="Good"
        btnNeutral="Neutral"
        btnBad="Bad"
        btnReset="Reset"
        feedbackTotalValue={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          feedbackGood="Good"
          feedbackNeutral="Neutral"
          feedbackBad="Bad"
          feedbackTotal="Total"
          feedbackPositive="Positive"
          feedbackTotalValue={totalFeedback}
          feedBackValue={feedBackValue}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification textNotification="No feedback yet" />
      )}
    </>
  );
}

export default App;
