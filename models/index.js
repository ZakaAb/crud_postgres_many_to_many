const Sequelize = require('sequelize')
const tags = require('./tag.model')
const tutorials = require('./tutorial.model')

const sequelize = new Sequelize(
  'postgres://postgres:Sonelgaz.1@127.0.0.1:5432/database-many-to-many'
)

const db = {
  sequelize,
  Sequelize,
  tutorials: tutorials(sequelize, Sequelize),
  tags: tags(sequelize, Sequelize),
}

db.tags.belongsToMany(db.tutorials, {
  through: 'tutorial_tag',
  as: 'tutorials',
  foreignkey: 'tag_id',
})

db.tutorials.belongsToMany(db.tags, {
  through: 'tutorial_tag',
  as: 'tags',
  foreignkey: 'tutorial_id',
})

module.exports = db
