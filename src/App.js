import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Timer } from './custom-hooks/use-timer/Timer';
import { useCounter } from './custom-hooks/useCounter';
import useInput from './custom-hooks/useInput';

function App() {
  const {count, incrementHandler, decrementHandler, resetHandler} = useCounter(100)
  const {reset,type, ...userInfo} = useInput('password')

  const submitHandler = (event) => {
    event.preventDefault()
    reset()
   }
  return (
    <Container>
    <CountContainer>
      <div><h2 style={{color:"violet"}}>Counter</h2></div>
      <div style={{display:"flex", alignItems:"center"}}>
      <CountButton onClick={decrementHandler}>-</CountButton>
      <h2 style={{color:"#9370db"}}>{count}</h2>
      <CountButton onClick={incrementHandler}>+</CountButton>
      <CountButton onClick={resetHandler}>reset</CountButton>
      </div>
    </CountContainer>

    <div style={{marginTop:"1rem"}}>
      <Timer />
    </div>

    <InputContainer>
      <h2 style={{textAlign:"center", color:"green"}}>Input</h2>
    <form style={{textAlign:"center"}} onSubmit={submitHandler}>
      <StyledInput {...userInfo} type={type} id='username'/>
      <SubmitButton type='submit'>Submit</SubmitButton>
    </form>
    </InputContainer>

    </Container>
  );
}

export default App;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
`
const CountContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #d1edf2;
width: 30rem;
`

const SubmitButton = styled.button`
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  touch-action: manipulation;
  margin-left: 1rem;

&:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
}`

const StyledInput = styled.input`
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  border: 1px solid green;
  padding: 3px;
  width: 12rem;
`

const CountButton = styled.button`
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 7px 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  touch-action: manipulation;
  margin-right: 1rem;
  margin-left: 1rem;

&:hover,
&:focus {
  background-color: #F082AC;
}
`
const InputContainer = styled.div`
background-color: #d1edf2;
width: 30rem;
height: 10rem;
margin-top: 2rem;
`