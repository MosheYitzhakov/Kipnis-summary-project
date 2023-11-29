import { useState } from "react"
import instance from '../API';
export const NewComments = ({ post, setIsComments }) => {
  const localStor = JSON.parse(localStorage.uesr)
  const [body, setBody] = useState("")
  const [email, setEmail] = useState("")
  const [send, setSend] = useState(false)

  const handleSend = async () => {
    try {

      if (body.length < 3) {
        setSend("The body is too small")
      } else {
        const { data } = await instance.post(`/comments/${post}`, { name:localStor.name, email:email? email:localStor.email, body: body },{headers: { auth: `${localStor.name}:${localStor.username}` }});
        if (data) {
          const [ newData ] = data
          setIsComments((v)=>[...v,newData])
          setBody('')
          setEmail('')
          setSend("The comment was received successfully")
        } else {
          console.log('error data');
        }
      }

      const timer = setTimeout(() => {
        setSend("")
      }, 2000);
      return () => clearTimeout(timer);




    } catch (error) {
      return error.message
    }


  }


return (
  <>
    <label>
      email:
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label> <br/>
    <label>
      body:
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
    </label>
    <button type="button" onClick={handleSend}>
      Send
    </button>

    <br />
    {send && send}
  </>
)
}