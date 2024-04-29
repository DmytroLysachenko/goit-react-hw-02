import { useState } from "react";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";

function App() {
  const [marks, setMarks] = useState(() => ({
    good: 0,
    neutral: 0,
    bad: 0,
  }));

  return (
    <>
      <Description />
      <Options marks={Object.keys(marks)} />
      <Feedback marks={Object.keys(marks)} values={Object.values(marks)} />
    </>
  );
}

export default App;
