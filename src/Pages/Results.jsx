import {useLocation} from "react-router-dom";
import {personas} from "../data/personas.js";
const Results = () => {
const {state} = useLocation();
const FinalPersona = personas[state.persona]
    return (
        <>
    <h1>Results page</h1>
            <h2>Your persona is {FinalPersona.name}</h2>

    </>
    )


}

export default Results;