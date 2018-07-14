import express from 'express'
import path from 'path'

var app = express()

const PATH_DIST = path.resolve(__dirname, '../frontend-dist')

app.use('/static', express.static(PATH_DIST))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

if (process.env.NODE_ENV === 'production') {
  console.log('Listening at port 80!')
  app.listen(80)
} else {
  console.log('Listening at port 8888!')
  app.listen(8888)
}
