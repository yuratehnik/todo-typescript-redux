import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import {Provider} from "react-redux";
import {todoStore} from "./store/store";

const App: React.FC = () => {

  return (
    <div className="App">
      <Provider store={todoStore}>
          <TodoInput/>
          <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
