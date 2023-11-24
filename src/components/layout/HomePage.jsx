/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todo) {
      setTodoList((prev) => [
        { data: todo, status: false, id: uuidv4() },
        ...prev,
      ]);
      setTodo("");
    }
  };

  const handleRemoveTodo = (todoId) => {
    setTodoList(todoList.filter((item) => item.id !== todoId));
  };

  const handleCheckTodo = (todoId) => {
    let todos = [];
    todoList.forEach((item) => {
      if (item.id == todoId) {
        todos.push({ ...item, status: !item.status });
      } else {
        todos.push(item);
      }
    });
    setTodoList(todos);
  };

  return (
    <div className="w-25 mx-auto ">
      <p>To Do</p>

      <div>
        <input
          type="text"
          placeholder="Enter a todo"
          value={todo}
          className="w-75"
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="button" className="w-25" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <div>
        {todoList.map((item, idx) => (
          <TodoComp
            key={idx}
            item={item}
            handleCheckTodo={handleCheckTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

const TodoComp = ({ item, handleCheckTodo, handleRemoveTodo }) => {
  return (
    <div className="row bg-light">
      <input
        type="checkbox"
        className="col-1"
        checked={item.status}
        onChange={() => handleCheckTodo(item.id)}
      />
      <p
        className={item.status ? "text-decoration-line-through col-8" : "col-8"}
      >
        {item.data}
      </p>
      <p
        className="text-danger col-1"
        onClick={() => handleRemoveTodo(item.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </p>
    </div>
  );
};
