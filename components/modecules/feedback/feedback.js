import Button from '@/components/atoms/button/button';
import styles from './feedback.module.css'
import { useState } from "react";
import { notifyGoogleChat } from '@/apis';

export default function FeedbackForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {

    if (!message.trim()) {
      setMessage("")
      import('react-toastify').then((module) => {
        const toast = module.toast;
        toast.error("Message can not be empty");
      }); return;
    }
    try {
      await notifyGoogleChat(message)
      setMessage("")
      import('react-toastify').then((module) => {
        const toast = module.toast;
        toast.success("Feedback submitted");
      });
    } catch (err) {
      console.log("ERROR ::: sending feedback", err)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Send us your Feedback</h1>
      <textarea
        className={styles.textarea}
        rows="5"
        placeholder="Write your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        btnText="Submit"
        style={styles.button}
        onClick={handleSubmit}
      />
    </div>
  );
}
