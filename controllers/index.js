const db = require('../models')
const Tutorial = db.tutorials
const Tag = db.tags

exports.createTag = (req, res) => {
  Tag.create({ name: req.body.name })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tag.',
      })
    })
}

exports.findAllTag = (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Tutorial,
        as: 'tutorials',
      },
    ],
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while finding Tags.',
      })
    })
}

exports.createTutorial = (req, res) => {
  Tutorial.create({ title: req.body.title, description: req.body.description })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the tuto.',
      })
    })
}

exports.addTutorial = (req, res) => {
  Tag.findByPk(req.params.tagId).then((tag) => {
    if (!tag) res.send('Tag not found')
    Tutorial.findByPk(req.params.tutoId)
      .then((tuto) => {
        if (!tuto) res.send('Tutorial not found')
        tag.addTutorial(tuto)
        // tuto.addTag(tag)
        res.send(tag)
      })
      .catch((err) =>
        res.status(500).send({
          message: err.message || 'Some error occurred.',
        })
      )
  })
}

exports.findAllTuto = (req, res) => {
  Tutorial.findAll({
    include: [
      {
        model: Tag,
        as: 'tags',
      },
    ],
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while finding Tutorials.',
      })
    })
}

exports.deleteTuto = (req, res) => {
  Tutorial.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting Tutorial',
      })
    })
}
