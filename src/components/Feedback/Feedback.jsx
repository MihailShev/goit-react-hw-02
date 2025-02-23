import css from "./Feedback.module.css";

function Feedback({
  feedbackGood,
  feedbackNeutral,
  feedbackBad,
  feedbackTotal,
  feedbackPositive,
  feedbackTotalValue,
  feedBackValue,
  positiveFeedback,
}) {
  return (
    <ul className={css.top}>
      <li>
        {feedbackGood}:{feedBackValue.good}
      </li>

      <li>
        {feedbackNeutral}:{feedBackValue.neutral}
      </li>

      <li>
        {feedbackBad}:{feedBackValue.bad}
      </li>

      <li>
        {feedbackTotal}:{feedbackTotalValue}
      </li>

      <li>
        {feedbackPositive}:{positiveFeedback}%
      </li>
    </ul>
  );
}
export default Feedback;
