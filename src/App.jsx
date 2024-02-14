import ReactConfetti from "react-confetti";
import {useState} from "react";
import Form from "./components/Form.jsx";
import { GiTurtle } from "react-icons/gi";

function App() {

    const [showConfetti, setShowConfetti] = useState(false);
    const [isYes, setIsYes] = useState(false);


    const handleYesClick = () => {
        setShowConfetti(true);
        setIsYes(true);
    }


    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-red-100">
            {showConfetti && <ReactConfetti className="w-full h-full"/>}
            {isYes ? (
                <Form/>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen">
                    <div className="relative flex flex-col justify-center items-center">
                        <img src="src/images/dino-love.gif" alt="dino"/>
                        <h1 className="absolute top-[90%] font-bold text-3xl bg-white p-1">Will you be my
                            Valentine?</h1>
                    </div>
                    <div className="flex gap-10 p-10 pl-0">
                        <div
                            className={`bg-green-400 rounded-lg h-16 w-20 flex justify-center items-center font-bold cursor-pointer`}
                            onClick={handleYesClick}>Yes <GiTurtle/></div>
                        <div className="relative">
                            <div
                                className={`absolute hover:top-20 hover:left-20 bg-red-400 rounded-lg h-16 w-20 flex justify-center items-center font-bold`}>No
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
