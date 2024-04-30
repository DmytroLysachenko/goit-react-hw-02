export const Feedback = ({
  marks,
  total,
  positivePercentage,
  capFirstLetter,
}) => {
  return (
    <>
      {marks.map((mark) => {
        return (
          <p key={mark[0]}>
            {capFirstLetter(mark[0])}: {mark[1]}
          </p>
        );
      })}
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage()}%</p>
    </>
  );
};
