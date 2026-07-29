// src/hooks/useSubmitFeedback.tsx
import { useState } from 'react';

const useSubmitFeedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitFeedback = async (feedback: any) => {
    try {
      setIsSubmitting(true);
      // Simulate API call to submit feedback
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Feedback submitted:', feedback);
      setIsSubmitting(false);
    } catch (err) {
      setError('Failed to submit feedback. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, submitFeedback };
};

export default useSubmitFeedback;
