const express = require('express');
const { getPosts } =require('../../databases/dbPosts')
const router = express.Router();
module.exports = router;

router.get('/:user_id', async (req, res) => {
    try {
        let userId = req.params.user_id;
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