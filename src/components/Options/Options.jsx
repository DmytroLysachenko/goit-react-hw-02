import css from "./Options.module.css";
export const Options = ({ marks, setMarks }) => {
  return (
    <>
      {marks.map((mark) => {
        return (
          <button
            className={css.btn}
            key={mark}
            onClick={() =>
              setMarks((prev) => ({ ...prev, [mark]: prev[mark] + 1 }))
            }
          >
            {mark}
          </button>
        );
      })}
      <button
        onClick={() => {
          marks.map((mark) => {
            setMarks((prev) => ({ ...prev, [mark]: 0 }));
          });
        }}
      >
        Reset
      </button>
    </>
  );
};
