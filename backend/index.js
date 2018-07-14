import express from 'express'
import path from 'path'

var app = express()

const PATH_DIST = path.resolve(__dirname, '../frontend-dist')

app.use('/static', express.static(PATH_DIST))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

console.log('Listening at port 3000!')

app.listen(3000)
