const express = require('express');
const { getPosts } =require('../../databases/dbPosts')
const auth =require('../auth')
const router = express.Router();
module.exports = router;

router.get('/:id_user',auth, async (req, res) => {
    try {
        if(Number(req.params.id_user) !== req.user.id_user){
            res.status(401).send();
            return;
         }
        let userId = req.params.id_user;
        const user = await getPosts(userId)
        if (!user.length) {
            res.status(401).json('No found posts')
        } else {
            console.log(user.length);
            res.send(user)
        }
    } catch (error) {
        res.send(error.message)
    }
})              