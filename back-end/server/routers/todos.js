const express = require('express');

const router = express.Router();
const { getTodos, updateCompleted } = require('../../databases/dbTodos');
module.exports = router;

router.get('/:user_id', async (req, res) => {
    try {
        let userId = req.params.user_id;
        // let password = req.params.password;
        const user = await getTodos(userId)
        if (!user.length) {
            res.status(401).json('No found todos')
        } else {
            console.log(user.length);
            res.send(user)
        }
    } catch (error) {
        res.send(error.message)
    }
})
    .get('/:user_id/:id', async(req, res) => {
        try {
            let userId = req.params.user_id;
            let id = req.params.id;
            const user = await getTodos(userId,id)
            if (!user.length) {
                res.status(401).json('No found todos')
            } else {
                console.log(user.length);
                res.send(user)
            }
        } catch (error) {
            res.send(error.message)
        }
    })
    .get('*', (req, res) => {
        res.send('You did not enter a correct request')
    })

    .put('/:user_id', async (req, res) => {
        console.log(123);
        try {
            
            let userId = req.params.user_id;
            const data = req.body
            console.log(data);
            const user = await updateCompleted(userId,data)
            // if(!user){

            // res.send(user)
            res.send(user)
        } catch (error) {

        }


    })
 