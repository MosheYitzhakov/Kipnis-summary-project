
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Info } from "./components/info";
import { Todos } from "./components/todos";
import { Posts } from "./components/posts";
import { Err } from "./components/error";
import "../../react/src/pico.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:name" element={<Home />?<Home />: <Err/>}>
          <Route path="info" element={<Info />?<Info />: <Err/>} />
          <Route path="todos" element={<Todos />?<Todos/>: <Err/>} />
          <Route path="posts" element={<Posts />?<Posts/>: <Err/>} />
        </Route>
        <Route path="*" element={<Err />} />
      </Routes>
    </div>
  );
}



export default App;
