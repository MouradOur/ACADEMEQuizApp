import {useNavigate} from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
    return ( <>
        <h1>welcome to our persona quiz app</h1>
        <h2>Click on the button to start </h2>
        <button onClick={() => navigate("/Quiz")}>Start</button>
    </>)
}

export default Home;