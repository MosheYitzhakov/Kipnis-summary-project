import { useEffect, useState } from "react";
import  instance  from '../API';
let localStor;

 export const Todos = () => {
if(localStorage.uesr){
 localStor = JSON.parse(localStorage.uesr)
}     
    const [todos, setTodos] = useState([]);
    useEffect(() => {
                instance.get(`/todos/${localStor.id_user}`
                ,{headers: { auth: `${localStor.name}:${localStor.username}` }}).then(({data})=>{
                   const newPrev = data.map((v) => {
                    if(v.completed === 1){
                        return { ...v, completed: true }
                    }else{
                        return { ...v, completed: false }
                    }
                })
                setTodos(newPrev)  
                }).catch(e=> e.message)
    }, [])
    const handleClick =async ({ target },completed) => {
        const { data } = await instance.put(`/todos/${localStor.id_user}`,{id_todo:`${Number(target.name)}`,completed:completed?0:1},{headers: { auth: `${localStor.name}:${localStor.username}` }});
        setTodos(data)
    }
    return (<>
        <ol>
            <p>this is todos</p>
            {todos && todos.map((v, i) => {
                return <li style={{ textDecorationLine: v.completed ? "none" : "line-through", margin: "5px" }} key={i}>{v.title}
                    <button style={{ marginLeft: "5px" }} onClick={(e)=> handleClick(e,v.completed)}  name={v.id_todo}>{v.completed ? "\u2713" : "\u03A7"}</button>
                </li>
            })}
        </ol>
    </>)
}