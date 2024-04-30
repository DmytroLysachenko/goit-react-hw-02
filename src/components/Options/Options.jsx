import css from "./Options.module.css";
export const Options = ({
  marks,
  updateFeedback,
  resetFeedback,
  total,
  capFirstLetter,
}) => {
  return (
    <>
      {marks.map((mark) => {
        return (
          <button
            className={css.btn}
            key={mark}
            onClick={() => updateFeedback(mark)}
          >
            {capFirstLetter(mark)}
          </button>
        );
      })}
      {total > 0 && <button onClick={() => resetFeedback()}>Reset</button>}
    </>
  );
};
