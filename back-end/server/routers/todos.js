const express = require('express');
const auth =require('../auth')
const router = express.Router();
const { getTodos, updateCompleted } = require('../../databases/dbTodos');
module.exports = router;

router.get('/:id_user',auth, async (req, res) => {
    // console.log("this is user "+req.user.id_user);
    try {
        if(Number(req.params.id_user) !== req.user.id_user){
            res.status(401).send();
            return;
         }
        let userId = req.params.id_user;
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
    .get('/:id_user/:id', async(req, res) => {
        try {
            let userId = req.params.id_user;
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

    .put('/:id_user', async (req, res) => {
        console.log(123);
        try {
            
            let userId = req.params.id_user;
            const data = req.body
            console.log(data);
            const user = await updateCompleted(userId,data)
            // if(!user){

            // res.send(user)
            res.send(user)
        } catch (error) {

        }


    })
 