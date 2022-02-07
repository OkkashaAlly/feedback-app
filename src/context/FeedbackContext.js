import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(async _ => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );

    const data = await response.json();

    setFeedback(data);
  }, []);

  // Delete feedback
  const deleteFeedback = id => {
    if (window.confirm("Are you sure you want to delete this !?")) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedback]);
  };

  // Set feedback to edit
  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  // Update feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map(item => {
        if (item.id === id) {
          return { ...item, ...updatedItem };
        } else return item;
      })
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
