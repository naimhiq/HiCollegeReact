import React, { useContext } from 'react'
import { CounterContext } from '../provider/CounterContext'

const CounterButtonWithContext = () => {
  const [numberOfClicks, increment, incrementBy, setIncrementBy] = useContext(
    CounterContext,
  )
  return (
    <>
      <p>You have clicked the button {numberOfClicks} times</p>
      <label htmlFor="number">Incremebt by:</label>
      <input
        name="number"
        value={incrementBy}
        type="number"
        onChange={(e) => setIncrementBy(parseInt(e.target.value))}
      />

      <button onClick={() => increment()}>Click me</button>
    </>
  )
}

export default CounterButtonWithContext
