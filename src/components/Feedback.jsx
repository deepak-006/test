import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import css from "./Feedback.module.css";
import axios from "axios";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState(""); // State to store the comment text

  const handleLikeClick = async () => {
    setComment(""); // Reset comment
    setShowComment(false); // Hide comment box
    if (!likeClicked) {
      setLikes(likes + 1);
      setLikeClicked(true);
      if (dislikeClicked) {
        setDislikes(dislikes - 1);
        setDislikeClicked(false);
      }
      await sendFeedback();
    } else {
      setLikes(likes - 1);
      setLikeClicked(false);
    }
  };

  const handleDislikeClick = async () => {
    setComment(""); // Reset comment
    setShowComment(false); // Hide comment box
    if (!dislikeClicked) {
      setDislikes(dislikes + 1);
      setDislikeClicked(true);
      if (likeClicked) {
        setLikes(likes - 1);
        setLikeClicked(false);
      }
      await sendFeedback();
    } else {
      setDislikes(dislikes - 1);
      setDislikeClicked(false);
    }
  };

  const handleCommentClick = () => {
    setShowComment(true);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSend = async () => {
    try {
      // Assuming sendFeedback returns a promise
      await sendFeedback();
      // Assuming "sentMessageElement" is a reference to the message element
      // and "textareaElement" is a reference to the textarea element
      sentMessageElement.innerText = "Feedback sent successfully!";
      textareaElement.style.display = "none";
    } catch (error) {
      // Handle error if needed
      console.error("Error sending feedback:", error);
      sentMessageElement.innerText =
        "Failed to send feedback. Please try again.";
    }
  };

  const handleCancelClick = () => {
    setComment("");
    setShowComment(false);
  };

  const sendFeedback = async () => {
    try {
      await axios.post("http://localhost:4500/feedback", {
        likes: likes,
        dislikes: dislikes,
        comment: comment,
      });
      console.log("Feedback sent successfully");
      setComment(""); // Clear the comment after sending
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <>
      <div className={css.feedbackContainer}>
        <div className={css.likeContainer}>
          <button
            className={
              likeClicked ? `${css.thumbsUp} ${css.blue}` : css.thumbsUp
            }
            onClick={handleLikeClick}
          >
            <i className={"fa fa-thumbs-up"} style={{ marginLeft: "5px" }}></i>
            {likes}
          </button>{" "}
        </div>

        <div className={css.dislikeContainer}>
          <button
            className={
              dislikeClicked ? `${css.thumbsDown} ${css.blue}` : css.thumbsDown
            }
            onClick={handleDislikeClick}
          >
            <i
              className={"fa fa-thumbs-down"}
              style={{ marginLeft: "5px" }}
            ></i>
            {dislikes}
          </button>{" "}
        </div>

        <div className={css.commentContainer}>
          <button className={css.comment} onClick={handleCommentClick}>
            <i className={"fa fa-comment"}></i>
          </button>
        </div>
      </div>

      {showComment && (
        <>
          <button onClick={handleCancelClick}>Cancel Comment</button>
          <textarea
            name="comment"
            placeholder="Enter your comment..."
            rows="4"
            cols="50"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button onClick={handleCommentSend}>Send</button>
        </>
      )}
    </>
  );
};

export default Feedback;
