const express = require('express')
const app = express()

app.get('/api/fruits', (req, res, next) => {
    res.send(['apples', 'oranges', 'cherries'])
})

app.listen(8080, console.log('listening on port 8080'))