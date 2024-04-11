import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import css from "./RichTextEditor.module.css";

const RichTextEditor = () => {
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("qandaStudentEmail");
  const name = localStorage.getItem("qandaStudentName");

  const handleSubmitClick = async () => {
    try {
      setSubmitting(true);
      const response = await Axios.post(`http://localhost:4500/RTEContent`, {
        question: value,
        studentId: email,
        askedBy: name,
        askedOn: new Date(),
      });

      const questionId = response.data._id;

      await Axios.post("http://localhost:4500/askedQuestionId", {
        questionId: questionId,
        askedQuestionsId: questionId,
        studentId: email,
      });

      console.log("Expert content saved successfully:", response.data);
      alert("Your question is submitted successfully");

      navigate("/home"); // Redirect to home after successful submission
    } catch (error) {
      console.error("Error saving content:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ font: [] }],
      [{ size: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["image"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  return (
    <div className={css.window}>
      <div className={css.editor}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className={css.editorInput}
          modules={modules}
        />
      </div>
      <div className={css.submitBtnContainer}>
        <button
          onClick={handleSubmitClick}
          className={`${css.SubmitBtn} ${submitting ? css.Submitting : ""}`}
        >
          {submitting ? "Submitting..." : "Submit my Question"}
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;

{
  /* <div className={css.submitBtnContainer} style={{ textAlign: "center" }}>
          <button
            onClick={handleSubmitClick}
            className={css.SubmitBtn}
            style={{ width: "150px", cursor: "pointer" }}
          >
            Submit my Question
          </button>
        </div> */
}
