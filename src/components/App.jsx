import { useEffect, useState } from "react";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";
import { Notification } from "./Notification/Notification";

function App() {
  const [marks, setMarks] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("data")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  const updateFeedback = (mark) => {
    setMarks((prev) => ({ ...prev, [mark]: prev[mark] + 1 }));
  };

  const resetFeedback = (marks) => {
    marks.map((mark) => setMarks((prev) => ({ ...prev, [mark]: 0 })));
  };

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(marks));
  }, [marks]);

  const marksArray = Object.entries(marks);

  const total = marksArray.reduce((acc, mark) => {
    return acc + Number(mark[1]);
  }, 0);

  const totalPositive = marksArray.reduce((acc, mark) => {
    if (mark[0] !== "Bad") {
      return acc + mark[1];
    }
    return acc;
  }, 0);

  return (
    <>
      <Description />
      <Options
        marks={Object.keys(marks)}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      <Feedback
        marks={marksArray}
        total={total}
        totalPositive={totalPositive}
      />
      <Notification total={total} />
    </>
  );
}

export default App;
