import css from "./Options.module.css";

function Options({
  btnGood,
  btnNeutral,
  btnBad,
  btnReset,
  handle,
  feedbackTotalValue,
}) {
  return (
    <div className={css.top}>
      <button
        className={css.border}
        onClick={() => handle(btnGood)}
        type="button"
      >
        {btnGood}
      </button>

      <button
        className={css.border}
        onClick={() => handle(btnNeutral)}
        type="button"
      >
        {btnNeutral}
      </button>

      <button
        className={css.border}
        onClick={() => handle(btnBad)}
        type="button"
      >
        {btnBad}
      </button>

      {feedbackTotalValue ? (
        <button
          className={css.border}
          onClick={() => handle(btnReset)}
          type="button"
        >
          {btnReset}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Options;
