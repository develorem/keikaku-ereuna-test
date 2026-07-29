// src/components/FeedbackForm.tsx
import React, { useState } from 'react';

interface Feedback {
  rating: number;
  comment: string;
}

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback>({ rating: 0, comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission logic here
    console.log('Feedback submitted:', feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        value={feedback.rating}
        onChange={(e) => setFeedback({ ...feedback, rating: parseInt(e.target.value) })}
      />
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={feedback.comment}
        onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
