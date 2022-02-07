import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(_ => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async _ => {
    const response = await fetch("feedback?_sort=id&_order=desc");

    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Delete feedback
  const deleteFeedback = async id => {
    if (window.confirm("Are you sure you want to delete this !?")) {
      await fetch(`feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = async newFeedback => {
    const response = await fetch("feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Set feedback to edit
  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  // Update feedback
  const updateFeedback = async (id, updatedItem) => {
    await fetch(`feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    // const data = response.json();

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
        isLoading,
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
