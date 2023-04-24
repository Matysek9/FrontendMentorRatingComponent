import "./Rating.css";
import "../assets/globalStyles.css";
import RatingPoints from "./RatingPoints";
import Card from "./Card";
const text =
  "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";

function Rating() {
  return (
    <Card>
      <main>
        <img className="circle" src="./images/icon-star.svg" alt="starIcon" />
        <h1>How did we do?</h1>
        <p className="simpleText">{text}</p>
        <RatingPoints />
      </main>
    </Card>
  );
}

export default Rating;
