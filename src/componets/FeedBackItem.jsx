import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

function FeedBackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <span className="num-display">{item.rating}</span>
      <button onClick={_ => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={_ => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <p className="text-display">{item.text}</p>
    </Card>
  );
}

export default FeedBackItem;

// const handleClick = _ => {
//   setRating(prev => {
//     return prev + 1;
//   });
// };
