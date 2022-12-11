// import { useState } from "react"

// function TodoByUseStateHook(){

//     const [todo,setTodo]=useState({
       
//         title: "",
//         discription: ""
//     });

//     const [title,discription]=todo;

//     const handlers = (e)=>{
//         const des= title.includes(".js")?"first you have to learn JavaScript":null

//         setTodo({
//             ...todo,
//             title:e.target.value,

//         });
//         setTodo({
//             ...todo,
//             discription:des,

//         });
     
//     };

//     return <div>
//         <h1>UseState Hook Practices</h1>
//         <h2>{title} </h2>
//         <textarea name="todo" value={title} onChange={handlers} />
//         <h2>{discription || "Good Choise"} </h2>
//     </div>


// }
// export default TodoByUseStateHook;