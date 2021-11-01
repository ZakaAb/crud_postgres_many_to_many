const express = require('express')
// const cors = require('cors')
const db = require('./models')

const app = express()

app.use(express.json())
db.sequelize.sync()

app.get('/', (req, res) => {
  res.json({ message: 'This is just for test!' })
})

const router = require('./routes')
app.use('/api', router)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
