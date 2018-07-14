import express from 'express'
import path from 'path'

var app = express()

let PATH_DIST
if (process.env.NODE_ENV === 'production') {
  PATH_DIST = path.resolve(__dirname, '../prod_build')
} else {
  PATH_DIST = path.resolve(__dirname, '../dev_build')
}

app.use('/static', express.static(PATH_DIST))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

console.log('Listening at port 3000!')

app.listen(3000)
