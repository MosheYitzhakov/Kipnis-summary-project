import { Link } from "react-router-dom"
import './searchBar.css'
const logout = ()=>{
    localStorage.setItem("uesr", "")
}
export const SearchBar = () =>{
    return <div className="container">
    <nav >
    <Link to={"info"}>info</Link> {}
    <Link to={"posts"}>posts</Link> {}
    <Link to={"todos"}>todos</Link> {}
    <Link to={"/login"} onClick={()=>logout()}>logout</Link>
</nav>
</div> 
}