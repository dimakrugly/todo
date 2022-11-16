import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";



const App = () => {

    const todoData = [
        {label: "Drink coffee", important: false},
        {label: "Mare awesome app", important: true},
        {label: "Have a lunch", important: false},
    ];
   return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));