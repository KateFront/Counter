import React, {useState} from 'react';
import './App.css';
import Settings from "./components/settings/Settings";
import Counter from "./components/counter/Counter";


function App() {

    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState(7);
    const [startValue, setStartValue] = useState(4);
    const [workState, setWorkState] = useState<'work'|'start'|'error'>('start');

    const increment = () => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }

    const reset = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setCount(newValue)
        }
    }

    const set = () => {
        if (maxValue > startValue) {
            return
        }
        setStartValue(0)
    }

    return (
        <div className="App">
            <Settings count={count}
                      startValue={startValue}
                      maxValue={maxValue}
                      setMaxValue={(newValue)=>setMaxValue(newValue)}
                      setStartValue={(newStartValue)=>{setStartValue(newStartValue)}}
                      isRestrict={false}
            />
            <Counter count={count}
                     increment={increment}
                     reset={reset}
                     maxValue={maxValue}
                     isRestrict={false}
            />
        </div>
    )
}

export default App;
