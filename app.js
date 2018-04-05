const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const moment = require('moment')
const shortid = require('shortid')

const environment = process.env.NODE_ENV
const mode = environment === 'production' ? 'tiny' : 'dev'
app.use(require('morgan')(mode))
app.use(require('body-parser').json())

const dreams = [
  {
    id: 'SyD01JNif',
    description: 'I was in class and had forgotten we had a project due! My instructor was upset with me.',
    date: '18-03-23'
  },
  {
    id: 'SyXAJ1Ejz',
    description: 'I was walking through a quiet forest, with my two best friends. It was peaceful!',
    date: '18-04-02'
  }
]

const people = [
  { id: 'r1JRJ1Eoz', name: 'Ms. Weber', relationship: 'Instructor', dreamIds: [ 'SyD01JNif' ] },
  { id: 'BJgJlkVif', name: 'Ollie', relationship: 'Friend', dreamIds: [ 'SyXAJ1Ejz' ] },
  { id: 'r1ypy1NoM', name: 'Shari', relationship: 'Friend', dreamIds: [ 'SyXAJ1Ejz' ] }
]

app.get('/alldreams', (req, res, next) => {
  res.json({ dreams })
})

app.get('/allpeople', (req, res, next) => {
  res.json({ people })
})

app.use((err, req, res, next) => {
  const status = 500
  res.status(status).send(`Something went wrong.`)
})

app.use((req, res, next) => {
  res.status(404).send(`Not found.`)
})

const listener = () => console.log(`Server is running on port ${port}. ✨`)
app.listen(port, listener)