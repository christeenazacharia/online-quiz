import React, { useState, useEffect } from "react";
import {useLocation, useParams } from "react-router-dom";

const NewQuiz = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username= params.get('username');
 
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [totalMarks, setTotalMarks] = useState(null);

  // Fetch questions from the backend
  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost/online_quiz/get_question.php");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // Handle answer selection
  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  // Compare answers and calculate total marks
  const calculateMarks = () => {
    let total = 0;
    // Loop through the answers and compare them with correct answers
    questions.forEach((question) => {
      const selectedAnswer = answers[question.id];
      if (selectedAnswer === question.answers) {
        total +=1; // Add marks for correct answers
      }
    });
    setTotalMarks(total); // Set total marks after comparison
  };

  // Handle submit and save marks to the backend
  const submitAnswers = async () => {
    calculateMarks(); // Calculate marks on submit

    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];

    try {
      // Send the calculated total marks, username, and current date to save_mark.php
      const response = await fetch("http://localhost/online_quiz/save_mark.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,        // Pass username
          totalMarks,      // Pass the total marks calculated
          date: currentDate, // Pass the current date
        }),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Marks saved successfully!");
      } else {
        alert("Failed to save marks.");
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  useEffect(() => {
    fetchQuestions(); // Fetch questions when the component mounts
  }, []);

  return (
    <div>
      <h1>Quiz for {username}</h1>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          <div>
            {[q.option1, q.option2, q.option3, q.option4].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  onChange={() => handleAnswerChange(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={submitAnswers}>Submit</button>
    <h2>Your Total Marks: {totalMarks}</h2>
    </div>
  );
};

export default NewQuiz;
