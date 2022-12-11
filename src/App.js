// import Counter from "./Components/Counter";
// import TodoByUseStateHook from "./TodoByUseStateHook";
// import Timer from "./Components/Timer";
import {useEffect, useRef, useState} from "react";
import Button from "./Components/Button"
import Title from "./Components/Title";
import ShowCount from "./Components/ShowCount";
import InputCompo from "./Components/InputCompo";

function App() {
  const [count1,setCount1]= useState(0);
  const [count2,setCount2]= useState(0);
  const inputField= useRef();

  const incrementByOne=()=>{

    setCount1((prevState)=>(prevState+1));
  };
  const incrementByFive=()=>{

    setCount2((prevState)=>(prevState+5));
  };

  useEffect(()=>{
    console.log(inputField.current);
    inputField.current.focus();
  },[]);
 

  return (
    <div className="App">
      <Title/>
      <ShowCount count={count1} title="counter 1"/>
      <Button handler={incrementByOne}>Increment By One</Button>
      <hr/>
      <ShowCount count={count2} title="counter 2"/>
      <Button handler={incrementByFive}>Increment By One</Button>
      <hr/>
      <InputCompo ref={inputField}/>
      <InputCompo />




      {/* <Counter/> */}
      {/* <TodoByUseStateHook/> */}
      {/* <Timer/> */}
    </div>
  );
}

export default App;
