const express = require('express');
const { getComments,newComment,deleteComm } =require('../../databases/dbComments')
const router = express.Router();
module.exports = router;

router.get('/:id_post', async (req, res) => {
    try {
        let postId = req.params.id_post;
        const user = await getComments(postId)
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
.post('/:id_post',async (req,res)=>{
    try {
        let postId = req.params.id_post;
        let name=req.body.name;
        let email=req.body.email;
        let body=req.body.body;
        if(!body){
            throw new Error("Body is required")
        }
        const user = await newComment(postId,name,email,body)
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
.delete('/:id_post',async (req,res)=>{
    try {
        let postId = req.params.id_post;
        const user = await deleteComm(postId,req.body.id_comment)
        if (!user) {
            res.status(401).json('No found posts')
            } else {
                res.send(user)
                }
    } catch (error) {
        
    }
})