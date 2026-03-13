import QuestionCards from "../components/QuestionCards";
import { useState } from "react";
import { questions } from "../data/questions";
import PersonaCalculator from "../utils/PersonaCalculator.jsx";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentQuestion = questions[currentIndex];

    const handleAnswer = (persona) => {
        const newAnswers = [...answers, persona];

        if (currentIndex + 1 === questions.length) {
            // Last question → calculate and navigate
            const result = PersonaCalculator(newAnswers);
            navigate("/results", {
                state: { persona: result },
            });
        } else {
            // Not last question → go to next
            setAnswers(newAnswers);
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <p>Question {currentIndex + 1} of {questions.length}</p>
            <QuestionCards
                question={currentQuestion}
                onAnswer={handleAnswer}
            />
        </>
    );
};

export default Quiz;