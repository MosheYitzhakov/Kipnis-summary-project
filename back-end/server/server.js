const express = require('express')
const app = express()
const { checkDBConnection } = require('../databases/dbConnection')
const cors =require('cors')
const path = require('path')
const usersR = require('./routers/users')
const todosR = require('./routers/todos')
const postsR = require('./routers/posts')
const commentsR = require('./routers/comments')
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(path.dirname(__dirname),'../',"fount-end",'react','build')));
// app.param()

app.use('/api/users/',usersR)
app.use('/api/posts/',postsR)
app.use('/api/todos/',todosR)
app.use('/api/comments/',commentsR)

app.use(['/users/',"/posts/","/todos/","/comments/","/login/"] ,(req, res) => {
    const htmlPath = path.join(path.dirname(__dirname),'../',"fount-end",'react', "build", "index.html")
    res.sendFile(htmlPath);
})
app.use('/*', (req, res) => res.send('not found'))







const connection = checkDBConnection()
if(connection){
 const port = process.env.PORT || 3335;
    app.listen(port, () => console.log(`Server is running on port ${port}`))
} else{
    console.log('Error al conectar a la base de datos')
}
