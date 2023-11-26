import { useEffect, useState } from "react";
import  instance  from '../API';
let localStor;
if(localStorage.uesr){
 localStor = JSON.parse(localStorage.uesr)
} 
 export const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function name() {
            try {
                const { data } = await instance.get(`/todos/${localStor.id_user}`);
                const newPrev = data.map((v) => {
                    if(v.completed === 1){
                        return { ...v, completed: true }
                    }else{
                        return { ...v, completed: false }
                    }
                })
                setTodos(newPrev)
            } catch (error) {
                return error.message
            }
        }
        name()
        // fetch(`https://jsonplaceholder.typicode.com/todos?userId=${localStor.id}`)
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((myTodos) => {
        //         setTodos(myTodos)
        //     })

    }, [])
    console.log(todos);
    const handleClick = ({ target }) => {
        setTodos((prev) => {
            const newPrev = prev.map((v) => {
                if (v.id_todo === Number(target.name)) {
                    return { ...v, completed: !v.completed }
                } else {
                    return v
                }
            })
            return [...newPrev]
        })
    }
    // const sort = todos.sort(function (a, b) {
    //     if (a.completed < b.completed) {
    //         return 1;
    //     }
    //     if (a.completed > b.completed) {
    //         return -1;
    //     }
    //     return 0;
    // })
    return (<>
        <ol>
            <p>this is todos</p>
            {todos && todos.map((v, i) => {
                return <li style={{ textDecorationLine: v.completed ? "none" : "line-through", margin: "5px" }} key={i}>{v.title}
                    <button style={{ marginLeft: "5px" }} onClick={handleClick} name={v.id_todo}>{v.completed ? "\u2713" : "\u03A7"}</button>
                </li>
            })}
        </ol>
    </>)
}