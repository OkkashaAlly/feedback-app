import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  /* WITHOUT ANIMATION
  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <FeedBackItem key={item.id} item={item} handleDelete={deleteFeedback} />
      ))}
    </div>
  );
  */
}

export default FeedBackList;