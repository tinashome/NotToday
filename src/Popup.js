import React,{useState} from 'react';
import InputBox from './InputBox';

const localTodo=JSON.parse(localStorage.getItem("NotToday"));
const Popup  = () => {
  const [todo,setTodo] = useState(localTodo===null ? [] : localTodo)
  const addTodo = (value) =>{
    const newTodo = [...todo];
    newTodo.push({todo:value,isDone:false});
    setTodo(newTodo);
    localStorage.setItem("NotToday",JSON.stringify(newTodo))
  }
  const deleteTodo = (value)=>{
    const newTodo = [...todo];
    console.log(todo);
    const filteredTodo = newTodo.filter( (e) => {return !(e.isDone===true & e.todo === value) });
    filteredTodo.map((e)=>{ if(e.todo===value & e.isDone===false){return e.isDone = true}} );    
    setTodo(filteredTodo);
    // setTodo(newTodo);
    localStorage.setItem("NotToday",JSON.stringify(filteredTodo))
  }
  // const memoTemplate = (value) => { return <div className='memo' onClick={(event)=>{deleteTodo()}}>{value}</div> }
  const setMemo = (value) => {
    const memoContainer = document.querySelector(".memoContainer");
    // memoContainer.innerHTML+= memoTemplate(value);
  }
  // const colors = ["#ffb3c6","#ffd9b3","#ffffb3","#c6ffb3","#b3ecff","#c6b3ff"]
  const colors = ["#f4baea","#fca2bb","#fdb6e0","#f68dd0","#faa1b7","#faa1b7"]
  return <div>
    <div className='memoContainer'>
      {/* { todo.map( (e) => { return ()=>{setMemo(e)} })} */}
      { todo.map( (e,i) => { return <div key={i} className={e.isDone===true ?'doneMemo' : 'memo'} style={
        {backgroundColor:`${colors[Math.floor(Math.random()*6)]}`,color:"#ea4e41"}
        }  onClick={()=>{deleteTodo(e.todo)}} >{e.todo}</div> })}
      {/* { todo.map( (e,i) => { return <div key={i} className='memo'>{e}</div> })} */}

    </div>
      <InputBox setMemo = {setMemo} addTodo = {addTodo} ></InputBox>
  </div>
}

export default Popup;