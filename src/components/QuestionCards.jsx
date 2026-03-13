
const QuestionCards = ( {question, onAnswer} ) => {

    return (

        <div>
            <h2>{question.question}</h2>
            {question.options.map((option, i) => (
                <button key={i} onClick={() => onAnswer(option.persona)}>
                    {option.text}
                </button>
            ))}
        </div>

    )
}

export default QuestionCards;