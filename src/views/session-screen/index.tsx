import { useEffect, useMemo, useState } from "react";
import "./index.css";
import { CommonQuestions, LoretteQuestions } from "@/assets/questions";
import { useRecorder } from "@/hooks/recorder";
import { useNavigate } from "react-router-dom";

export default function SessionScreen() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(
    LoretteQuestions.concat(CommonQuestions)
  );
  const { questionsManifest, setQuestionsManifest } = useRecorder();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    //@ts-ignore
    questions[Math.floor(Math.random() * questions.length)]
  );

  const audio = useMemo(() => {
    return new Audio("./Ow.mp3");
  }, []);

  const loadNextQuestion = () => {
    if (currentQuestionIndex === 5) {
      setCurrentQuestion("");
      navigate("/end-screen");
      return; // Exit early to prevent further execution
    }

    const newQuestions = questions.filter(
      (question, index) => index !== currentQuestionIndex
    );

    setQuestions(newQuestions);
    setQuestionsManifest([...questionsManifest, currentQuestion]);

    const newQuestionIndex = Math.floor(Math.random() * newQuestions.length);
    setCurrentQuestion(newQuestions[newQuestionIndex]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const playSound = () => {
    audio.currentTime = 0; // Reset audio to start
    audio.play();
  };

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 32) {
      // Check if the key pressed is space bar
      loadNextQuestion();
    }
    if (event.keyCode === 65) {
      // Check if the key pressed is space bar
      playSound();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className="Session">
        <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
          {currentQuestion}
        </div>
      </div>
    </>
  );
}
