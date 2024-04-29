export const Options = ({ marks }) => {
  return (
    <>
      {marks.map((mark) => {
        <button key={mark}>{mark}</button>;
      })}
      <button>Reset</button>
    </>
  );
};
