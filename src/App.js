import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
    const [counter, setCounter] = useState(0)

    const handlePlus = () => setCounter(prev => prev + 1)
    const handleMinus = () => setCounter(prev => prev - 1)
    const handleClear = () => setCounter(0)

    return (
        <div className='container'>
            <h1>Counter: {counter}</h1>
            <Counter handlePlus={handlePlus} handleMinus={handleMinus} handleClear={handleClear} />
        </div>
    )
}

export default App