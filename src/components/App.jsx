import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";
import { Notification } from "./Notification/Notification";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialState = { good: 0, neutral: 0, bad: 0 };

export const App = () => {
  const [marks, setMarks] = useLocalStorage("data", initialState);

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateFeedback = (mark) => {
    setMarks((prev) => ({ ...prev, [mark]: prev[mark] + 1 }));
  };

  const resetFeedback = () => {
    setMarks(initialState);
  };

  const marksArray = Object.entries(marks);

  const total = marksArray.reduce((acc, mark) => {
    return acc + Number(mark[1]);
  }, 0);

  const totalPositive = marksArray.reduce((acc, mark) => {
    if (mark[0] !== "bad") {
      return acc + mark[1];
    }
    return acc;
  }, 0);

  const positivePercentage = () => {
    return Math.round((totalPositive / total) * 100);
  };

  return (
    <>
      <Description />
      <Options
        total={total}
        marks={Object.keys(marks)}
        capFirstLetter={capFirstLetter}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {total > 0 && (
        <Feedback
          marks={marksArray}
          total={total}
          totalPositive={totalPositive}
          positivePercentage={positivePercentage}
          capFirstLetter={capFirstLetter}
        />
      )}
      {total === 0 && <Notification />}
    </>
  );
};
