import React,{useState} from 'react';
import InputBox from './InputBox';

const localTodo=JSON.parse(localStorage.getItem("NotToday"));
console.log(localTodo)
const Popup  = () => {
  const [todo,setTodo] = useState(localTodo===null ? [] : localTodo)
  console.log(todo);
  const addTodo = (value) =>{
    const newTodo = [...todo];
    newTodo.push({todo:value,isDone:false});
    setTodo(newTodo);
    localStorage.setItem("NotToday",JSON.stringify(newTodo))
  }
  const memoTemplate = (value) => { return <div className='memo'>{value}</div> }
  const setMemo = (value) => {
    const memoContainer = document.querySelector(".memoContainer");
    memoContainer.innerHTML+= memoTemplate(value);
  }
  // const colors = ["#ffb3c6","#ffd9b3","#ffffb3","#c6ffb3","#b3ecff","#c6b3ff"]
  const colors = ["#f4baea","#fca2bb","#fdb6e0","#f68dd0","#faa1b7","#faa1b7"]
  return <div>
    <div className='memoContainer'>
      {/* { todo.map( (e) => { return ()=>{setMemo(e)} })} */}
      { todo.map( (e,i) => { return <div key={i} className='memo' style={
        {backgroundColor:`${colors[Math.floor(Math.random()*6)]}`,color:"#ea4e41"}
        }>{e.todo}</div> })}
      {/* { todo.map( (e,i) => { return <div key={i} className='memo'>{e}</div> })} */}

    </div>
      <InputBox setMemo = {setMemo} addTodo = {addTodo} ></InputBox>
  </div>
}

export default Popup;