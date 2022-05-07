const express = require('express')
//const req = require('express/lib/request')
//const res = require('express/lib/response')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User List')
})
router.get('/new', (req, res) => {
    res.send('User New Form')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(res.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id)=> {
    console.log(id)
    req.user = users[id]
    next()
})


/*
router.get('/:id', (req, res) => {
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})
*/

module.exports = router