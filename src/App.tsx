import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";


function App() {

    const maxValue = 5;

    const [count, setCount] = useState(0);

    const increment = () => {
        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }

    const reset = () => setCount(0)

    return (
        <Counter count={count}
                 increment={increment}
                 reset={reset}
                 maxValue={maxValue}
        />
    );
}

export default App;
