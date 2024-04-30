import css from "./Options.module.css";
export const Options = ({ marks, updateFeedback, resetFeedback }) => {
  return (
    <>
      {marks.map((mark) => {
        return (
          <button
            className={css.btn}
            key={mark}
            onClick={() => updateFeedback(mark)}
          >
            {mark}
          </button>
        );
      })}
      <button
        onClick={() => {
          resetFeedback(marks);
        }}
      >
        Reset
      </button>
    </>
  );
};
