const express = require('express')
const app = express()
const { checkDBConnection } = require('../databases/dbConnection')
const cors =require('cors')
const usersR = require('./routers/users')
const todosR = require('./routers/todos')
const postsR = require('./routers/posts')
const commentsR = require('./routers/comments')
app.use(cors())
app.use(express.json())
// app.param()
app.use('/users/',usersR)
app.use('/posts/',postsR)
app.use('/todos/',todosR)
app.use('/comments/',commentsR)

app.get('/', (req, res) => res.send('Hello World!'))







const connection = checkDBConnection()
if(connection){
 const port = process.env.PORT || 3335;
    app.listen(port, () => console.log(`Server is running on port ${port}`))
} else{
    console.log('Error al conectar a la base de datos')
}
