import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import SearchTodo from "./components/SearchTodo";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <div className="flex w-full h-full">
      <Sidebar>
        <Home />
      </Sidebar>
      <Main>
        <SearchTodo />
        <List />
      </Main>
    </div>
  );
}

export default App;
