import React, { useContext } from 'react'
import { CounterContext } from '../provider/CounterContext'
const CartUpdates = () => {
  const [increment] = useContext(CounterContext)
  return <div>This is my card that will update based on input: {increment}</div>
}

export default CartUpdates
