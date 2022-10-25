const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('gitignore file deleted and git file updated')
})

app.listen(port, () => {
  console.log(`Example app listening on port in the port of  ${port}`)
})