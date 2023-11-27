import { Fragment, useEffect, useState } from "react";
import { Comments } from "./comments";
import  instance  from '../API';
// import { NewComments } from "./newComment";
let localStor;
if(localStorage.uesr)
 localStor = JSON.parse(localStorage.uesr)

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    // const [newComment, setNewComment] = useState(false);
    useEffect(() => {
        async function name() {
            try {
                const { data } = await instance.get(`/posts/${localStor.id_user}`);
                 const newData = data.map((v) => {return { ...v, size: 20 }})
                setPosts(newData)
            } catch (error) {
                return error.message
            }
        }
        name()
    }, [])
    const resize = ({ target }) => {
        setPosts((prev) => {
            const newPrev = prev.map((v) => {
                if (v.id === Number(target.className)) {
                    return { ...v, size: v.size === 35 ? 20 : 35 }
                } else {
                    return { ...v, size: 20 }
                }
            })
            return [...newPrev]
        })
    }
    const comments = ({ target }) => {
        setPosts((prev) => {
            const newPrev = prev.map((v) => {
                if (v.id === Number(target.className)) {
                    return { ...v, comments: !v.comments }
                } else {
                    return { ...v, size: 20 }
                }
            })
            return [...newPrev]
        })
    }
    return (<>
        <p>this is posts</p>
        <ol>
            {posts && posts.map((v, i) => {
                return <Fragment key={i * Date.now()}><li style={{ fontSize: v.size, margin: v.size === 35 ? "5%" : "" }}
                     className={`${v.id}`} onClick={resize}>
                    title: {v.title}
                    <br />
                    body: {v.body}
                </li>
                    <button type="text" className={`${v.id}`} onClick={comments}>comments</button>
                    {v.comments ? <Comments post={v.id} /> : ""}
                </Fragment>
            })}
        </ol>
    </>)
}