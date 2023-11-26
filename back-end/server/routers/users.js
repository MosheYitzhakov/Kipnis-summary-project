const express = require('express');

const router = express.Router();
const { getUser} = require('../../databases/dbUsers')
module.exports = router;

router.get('/:name/:password', async (req, res) => {
    try {
        let name = req.params.name;
        let password = req.params.password;
        const user = await getUser(name, password)
        if (!user) {
            res.status(401).json('The name or password is incorrect')
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
    