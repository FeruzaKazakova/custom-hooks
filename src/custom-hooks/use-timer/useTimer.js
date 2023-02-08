import { useEffect, useState } from "react";

export const useTimer = () => {
  const [length, setLength] = useState(600)

  const [timer, setTimer] = useState(1500)
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')
  const [intervalId, setIntervalId] = useState(null)

  let starts = intervalId !== null

  useEffect(() => {
    setTimer(length)
  }, [length])

  useEffect(() => {
    let time = secondsToTime(timer)
    setMin(time[0])
    setSec(time[1])
  }, [timer])


  const toggleCount = () => {
    if (starts) {
      if (intervalId) {
        clearInterval(intervalId)
      }
      setIntervalId(null)
    } else {
      const newIntervalId = setInterval(() => {
        setTimer(prevTime => {
          let newTime = prevTime - 1
          let time = secondsToTime(newTime)
          setMin(time[0])
          setSec(time[1])
          return newTime
        })
      }, 1000)
      setIntervalId(newIntervalId)
    }
  }

  const secondsToTime = (seconds) => {
    return [Math.floor(seconds / 60), seconds % 60]
  }

  const formatDisplayTime = (time) => {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

  const lengthChangeHandler = (e) => {
    if (starts) return;

    if (e.target.id === 'decrement' && length > 60) {
      setLength((prevVal) => prevVal - 60)
    } else if (e.target.id === 'increment' && length < 3600) {
      setLength(prevVal => prevVal + 60)
    }
  }

  const resetHandler = () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    setIntervalId(null)
    setLength(600)
    setTimer(600)
  }

  return{
    min,
    sec,
    toggleCount,
    formatDisplayTime,
    lengthChangeHandler,
    resetHandler,
    length,
    starts
  }

};