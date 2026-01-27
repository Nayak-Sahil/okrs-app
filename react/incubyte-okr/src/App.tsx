import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [showDecrement, setShowDecrement] = useState(counter > 0);

    function incrementCounter() {
        setCounter((prev) => {
            prev += 1;
            setShowDecrement(prev > 0);
            return prev;
        });
    }

    function decrementCounter() {
        setCounter(counter - 1);
        console.log("Counter: ", counter);
        setShowDecrement(counter > 1);
        console.log("Should Show: ", showDecrement);
    }

    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={incrementCounter}>Increment Counter</button>
            {showDecrement ? <button onClick={decrementCounter}>Decrement Counter</button> : null}
        </div>
    );
}

export default App
