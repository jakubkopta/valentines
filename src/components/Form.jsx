import {useState} from "react";

function Form() {
    const [selectedFood, setSelectedFood] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const foodOptions = ["Pizza", "Burger", "Sushi"];
    const movieOptions = ["Love, Rosie", "Puppy Love (again)", "Anyone But You"];

    const handleFoodChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedFood([...selectedFood, value]);
        } else {
            setSelectedFood(selectedFood.filter(item => item !== value));
        }
    };

    const handleMovieChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedMovies([...selectedMovies, value]);
        } else {
            setSelectedMovies(selectedMovies.filter(item => item !== value));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowResults(true);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <form className="flex flex-col justify-center items-center gap-20" onSubmit={handleSubmit}>
                <div className="flex gap-10">
                    <div className="bg-red-100 shadow-2xl p-20">
                        <label>
                            Choose food:
                            {foodOptions.map(option => (
                                <div key={option}>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        onChange={handleFoodChange}
                                    />
                                    <span className="ml-2">{option}</span>
                                </div>
                            ))}
                        </label>
                    </div>
                    <div className="bg-red-100 shadow-2xl p-20 ">
                        <label>
                            Choose movie:
                            {movieOptions.map(option => (
                                <div key={option}>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        onChange={handleMovieChange}
                                    />
                                    <span className="ml-2">{option}</span>
                                </div>
                            ))}
                        </label>
                    </div>
                </div>
                <button type="submit" className="p-4 bg-red-300 rounded-full">Submit</button>
            </form>
            {showResults && (
                <div className="p-20 text-center text-3xl font-bold">
                    <p>{selectedFood.join(', ')} night!</p>
                    <p>With {selectedMovies.join(', ')}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
