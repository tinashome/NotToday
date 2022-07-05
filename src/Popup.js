import React, { useState } from "react";
import InputBox from "./InputBox";
import uuid from "react-uuid";

const localTodo = JSON.parse(localStorage.getItem("NotToday"));
const localIndex = JSON.parse(localStorage.getItem("Index"));
const Popup = () => {
	const [todo, setTodo] = useState(localTodo === null ? [] : localTodo);
	const [index, setIndex] = useState(localIndex === null ? 0 : localIndex + 0);

	const addTodo = (value) => {
		const newTodo = [...todo];
		setIndex((i) => i + 1);
		newTodo.push({
			index: index,
			todo: value,
			isDone: false,
		});
		setTodo(newTodo);
		localStorage.setItem("NotToday", JSON.stringify(newTodo));
		localStorage.setItem("Index ", JSON.stringify(index));
	};

	const deleteTodo = (idx) => {
		const newTodo = [...todo];
		const filteredTodo = newTodo.filter((e) => {
			return !((e.isDone === true) & (e.index === idx));
		});
		filteredTodo.map((e) => {
			if ((e.index === idx) & (e.isDone === false)) {
				return (e.isDone = true);
			}
		});
		setTodo(filteredTodo);
		localStorage.setItem("NotToday", JSON.stringify(filteredTodo));
	};
	const setMemo = (value) => {
		const memoContainer = document.querySelector(".memoContainer");
	};
	// const colors = ["#ffb3c6","#ffd9b3","#ffffb3","#c6ffb3","#b3ecff","#c6b3ff"]
	const colors = ["#f4baea", "#fca2bb", "#fdb6e0", "#f68dd0", "#faa1b7", "#faa1b7"];
	return (
		<div>
			<div className="memoContainer">
				{/* { todo.map( (e) => { return ()=>{setMemo(e)} })} */}
				{todo.map((e, i) => {
					return (
						<div
							key={uuid()}
							index={e.index}
							className={e.isDone === true ? "doneMemo" : "memo"}
							style={{ backgroundColor: `${colors[Math.floor(Math.random() * 6)]}`, color: "#ea4e41" }}
							onClick={() => {
								deleteTodo(e.index);
							}}
						>
							{e.todo}
						</div>
					);
				})}
			</div>
			<InputBox setMemo={setMemo} addTodo={addTodo}></InputBox>
		</div>
	);
};

export default Popup;
