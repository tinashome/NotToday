import React,{useState} from 'react';

const InputBox  = ({setMemo, addTodo}) => {
  const [value,setValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value) return;

    addTodo(value);
    setValue("");
  }
  const clearInput = (event) => {
    event.target.placeholder = "";
  }
  const setPlaceholder = (event) => {
    event.target.value = "";
    event.target.placeholder = "할일을 입력해주세요.";
  }
  return <>
    <div className='inputContainer'>
      <form onSubmit={handleSubmit}>
        <input className='InputBox' type="text" placeholder='할일을 입력해주세요.' value = {value}
          onChange={(e)=>{setValue(e.target.value)}} onFocus={clearInput} ></input>
        <button className='submitBtn'type='submit'>❣</button>
      </form>
    </div>
  </>
}

export default InputBox;