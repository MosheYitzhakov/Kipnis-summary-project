import { useEffect, useState } from "react"
import instance from '../API';
import { NewComments } from "./newComment";

export const Comments = ({ post }) => {
    const [isComments, setIsComments] = useState([])
    const [newComment, setNewComment] = useState(false);
    const [send, setSend] = useState(false);
    const handleDelete =async ( commentId) => {
        console.log("post id: "+ post + " comm id: " + commentId);
        try {
            const { data } = await instance.delete(`/comments/${post}/${commentId}`);
            setIsComments(data)
        setSend(true)
        const timer = setTimeout(() => {
            setSend(false)
        }, 2000);
        return () => clearTimeout(timer);
         } catch (error) {
            return error.message
        }
    }
    useEffect(() => {
        async function name() {
            try {
                const { data } = await instance.get(`/comments/${post}`);
                setIsComments(data)
            } catch (error) {
                return error.message
            }
        }
        name()
    }, [post])
    return <div>

        {<ol>{isComments.map((c, i) => {
            return <li key={i}>
                name: {c.name} <br />
                email: {c.email} <br />
                body: {c.body} <br />
                <button type="button" onClick={() => handleDelete( c.id_comment)} style={{ margin: "5px" }}>delete</button>


            </li>

        })}</ol>}
        <button onClick={() => setNewComment(!newComment)}>new comment</button>
        <br />
        {newComment && <NewComments post={post} setIsComments={setIsComments}/>}
        {send && `The comment was deleted`}
    </div>
}