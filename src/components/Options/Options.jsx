import css from "./Options.module.css";

function Options({ handle, feedbackTotalValue }) {
  return (
    <div className={css.top}>
      <button
        className={css.border}
        onClick={() => handle("good")}
        type="button"
      >
        good
      </button>

      <button
        className={css.border}
        onClick={() => handle("neutral")}
        type="button"
      >
        neutral
      </button>

      <button
        className={css.border}
        onClick={() => handle("bad")}
        type="button"
      >
        bad
      </button>

      {feedbackTotalValue ? (
        <button
          className={css.border}
          onClick={() => handle("reset")}
          type="button"
        >
          reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Options;
