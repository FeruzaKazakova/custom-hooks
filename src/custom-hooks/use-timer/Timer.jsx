import styled from "styled-components";
import { useTimer } from "./useTimer"

export const Timer = () => {
    const{    
        min,
        sec,
        toggleCount,
        formatDisplayTime,
        lengthChangeHandler,
        resetHandler,
        length,
        starts
    } = useTimer()
    return(
    <>
    <div style={{backgroundColor:"#d0e8fc", width:"30rem",height:"13rem"}}>
        <div style={{marginTop:"1rem"}}>
            <div>
              <Title>Timer</Title>
              <IncremDecremContainer>
                <IncremDecremButtons id="decrement" onClick={(e) => lengthChangeHandler(e)}>-</IncremDecremButtons>
                <div>{length / 60}</div>
                <IncremDecremButtons id="increment" onClick={(e) => lengthChangeHandler(e)}>+</IncremDecremButtons>
              </IncremDecremContainer>
            </div>

          <div>
            <h2 style={{textAlign:"center"}} id="time-left">{formatDisplayTime(min)}:{formatDisplayTime(sec)}</h2>
          </div>

          <div style={{textAlign:"center"}}>
            <StartButton id="start_stop"onClick={(e) => toggleCount()}>{starts ? 'Stop' : 'Start'}</StartButton>
            <ResetButton id="reset"onClick={resetHandler}>Reset</ResetButton>
          </div>
        </div>
        </div>
    </>
)};

const IncremDecremContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Title = styled.h2`
    text-align: center;
    color: #00bfff;
`
const IncremDecremButtons = styled.button`
  background-color: #28ab87;
  border: 0;
  border-radius: 3px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`
const StartButton = styled.button`
  background-color: #88b8d2;
  color: white;
  padding: 5px 10px;
  border: 0 !important;
  border-radius: 5px;
  margin-right: 1rem;
`
const ResetButton = styled.button`
  background-color: #e75480;
  color: white;
  padding: 5px 10px;
  border: 0 !important ;
  border-radius: 5px;
`