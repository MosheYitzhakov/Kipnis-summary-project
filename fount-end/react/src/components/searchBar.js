import { Link } from "react-router-dom"
const logout = ()=>{
    localStorage.setItem("uesr", "")
}
export const SearchBar = () =>{
    return <>
    <nav>
    <Link to={"info"}>info</Link> {}
    <Link to={"posts"}>posts</Link> {}
    {/* <Link to={"albums"}>albums</Link> {} */}
    <Link to={"todos"}>todos</Link> {}
    <Link to={"/login"} onClick={()=>logout()}>logout</Link>
</nav></>
}