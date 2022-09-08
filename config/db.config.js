const { Sequelize } = require('sequelize')
const { dataUser } = require('../models/usuario-model')


const db = new Sequelize(
    "moviesDB",
    "ejnsilva",
    "8565203",
    {
        dialect: "sqlite",
        host: "./database/dev.sqlite",
    }
)

//Tables in DB
const User = db.define(
    'user',
    dataUser, {
        sequelize,
        modelName: "user",
        timestamps: false
    }
)

/*
Creature.hasMany(CreatureVersion, { as: 'creatureVersions' })

CreatureVersion.belongsTo(Creature, {
  foreignKey: 'creatureId',
  as: 'creature'
})
//Synchronizing all models at once
const syncModels = async () => {
  //await Sequelize.sync({ alter: true })
  try {
    // await User.sync({ alter: true })
    // await Role.sync({ alter: true })
    // await Creature.sync({ alter: true })
    // await Wizard.sync({ alter: true })
    // await Collector.sync({ alter: true })
    // await Favorite.sync({ alter: true })
    // await CreatureVersion.sync({ alter: true })
    // await Mision.sync({ alter: true })
    // await SubMission.sync({ alter: true })
    // await MissionCollector.sync({ alter: true })
    // await ClassificationReport.sync({ alter: true })
    // await Report.sync({ alter: true })
    // await RejectedReport.sync({ alter: true })
    // await Task.sync({ alter: true })
    // await Notification.sync({ alter: true })
    // await Category.sync({ alter: true })
  } catch (error) {
    console.log(error)
  }
}

syncModels()
*/

module.exports={
    UserModel : User,
    db
}
export const UserModel = User

