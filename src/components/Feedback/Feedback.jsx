export const Feedback = ({ marks, values }) => {
  return (
    <>
      {marks.map((mark, index) => {
        return (
          <p key={mark}>
            {mark}: {values[index]}
          </p>
        );
      })}
      <p>
        Total:{" "}
        {values.reduce((acc, val) => {
          return acc + val;
        }, 0)}
      </p>
      <p>Positive: {values.filter()}%</p>
    </>
  );
};
