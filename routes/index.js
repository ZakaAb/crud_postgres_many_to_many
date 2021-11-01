const {
  findAllTag,
  createTag,
  createTutorial,
  addTutorial,
  findAllTuto,
  deleteTuto,
} = require('../controllers')

const router = require('express').Router()

router.post('/tag', createTag)

router.get('/allTag', findAllTag)

router.post('/tuto', createTutorial)

router.get('/allTuto', findAllTuto)

router.post('/tag/:tagId/tuto/:tutoId', addTutorial)

router.delete('/tuto/:id', deleteTuto)

module.exports = router
