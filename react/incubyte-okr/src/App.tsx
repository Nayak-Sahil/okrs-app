import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const showDecrement = counter > 0;

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function decrementCounter() {
        setCounter(counter - 1);
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
