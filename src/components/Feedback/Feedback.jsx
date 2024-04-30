export const Feedback = ({ marks, total, totalPositive }) => {
  if (total !== 0) {
    return (
      <>
        {marks.map((mark) => {
          return (
            <p key={mark[0]}>
              {mark[0]}: {mark[1]}
            </p>
          );
        })}
        <p>Total: {total}</p>
        <p>Positive: {Math.round((totalPositive / total) * 100)}%</p>
      </>
    );
  }

  return;
};
