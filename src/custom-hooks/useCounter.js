import { useState } from "react"

export const useCounter = (initState) => {
    const [count, setCount] = useState(initState || 0)

    const incrementHandler = () => {
        setCount((prevState) => prevState + initState)
    }
    const decrementHandler = () => {
        setCount((prevState) => prevState - initState)
    }
    const resetHandler = () => {
        setCount((prevState) => prevState = 0)
    }
    return{
        count,
        incrementHandler,
        decrementHandler,
        resetHandler
    }
}