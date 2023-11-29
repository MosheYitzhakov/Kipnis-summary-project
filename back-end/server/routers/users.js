const express = require('express');

const router = express.Router();
const { getUser } = require('../../databases/dbUsers')
// const auth =require('../auth')
module.exports = router;

// async function auth(req, res, next) {
//     try {
//         if (req.headers.auth) {
//             const [username, password ] = req.headers.auth.split(":")
//             const user = await getUser(username, password);
//             if (!user) {
//                 res.status(404).send("user not found")
//                 return;
//             }
//             req.user = user;
//             next()
//         } else {
//             res.status(401).send();

//         }
//     } catch (error) {
//         res.status(500).send();
//     }
// }

router.get('/:name/:password', async (req, res) => {
    try {
        // if(req.params.name !== req.user.name){
        //    res.status(401).send();
        //    return;
        // }
        let name = req.params.name;
        let password = req.params.password;
        const user = await getUser(name, password)
        if (!user) {
            res.json('The name or password is incorrect')
        } else {
            res.send(user)
        }
    } catch (error) {
        res.send(error.message)
    }
})
    .get('*', (req, res) => {
        res.send('You did not enter a name or password')
    })
