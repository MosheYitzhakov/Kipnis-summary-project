
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Info } from "./components/info";
import { Todos } from "./components/todos";
import { Posts } from "./components/posts";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="/login" element={<Login />} />
        <Route path="/users/:name" element={<Home />?<Home />: <Not/>}>
          <Route path="info" element={<Info />?<Info />: <Not/>} />
          <Route path="todos" element={<Todos />?<Todos/>: <Not/>} />
          <Route path="posts" element={<Posts />?<Posts/>: <Not/>} />
        </Route>
        <Route path="*" element={<Not />} />
      </Routes>
    </div>
  );
}

const Not = () => {
  return (<>
    <h2>404</h2>
    <p>page not found</p>
    <Link to={"/login"}> Login </Link>
  </>);
}

export default App;
