import { useEffect, useState } from "react"
import  instance  from '../API';
export const Comments = ({ comments }) => {
    const [isComments, setIsComments] = useState([])
    useEffect(() => {
        async function name() {
            try {
                const { data } = await instance.get(`/comments/${comments}`);
                setIsComments(data)
            } catch (error) {
                return error.message
            }
        }
        name()


        // fetch(`https://jsonplaceholder.typicode.com/comments?postId=${comments}`)
        //     .then(res => res.json())
        //     .then(date => setIsComments(date))
    }, [comments])
    return <div>
        { <ol>{isComments.map((c, i) => {
        return <li key={i}>
            name: {c.name} <br/>
            email: {c.email} <br />
            body: {c.body}
        </li>


    })}</ol> }
    </div>
}