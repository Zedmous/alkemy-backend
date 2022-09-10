const Sequelize = require("sequelize");
const { dataUser } = require('../models/usuario-model')
const { dataGender } = require('../models/gender-model')
const { dataCharacter } = require('../models/character-model')
const { dataMovie } = require('../models/movie-model')
const { dataProduction } = require('../models/production-model')

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
        db,
        modelName: "user",
        timestamps: false
    }
)

const Gender = db.define(
    'gender',
    dataGender, {
        db,
        modelName: "gender",
        timestamps: false
    }
)

const Character = db.define(
    'character',
    dataCharacter, {
        db,
        modelName: "character",
        timestamps: false
    }
)


const Movie = db.define(
    'movie',
    dataCharacter, {
        db,
        modelName: "movie",
        timestamps: false
    }
)

dataProduction.movieId.references.model=Movie;
dataProduction.characterId.references.model=Character;

const Production = db.define(
    'production',
    dataProduction, {
        db,
        modelName: "production",
        timestamps: false
    }
);


Movie.belongsToMany(Character, { through: Production });
Character.belongsToMany(Movie, { through: Production });

/*
Creature.hasMany(CreatureVersion, { as: 'creatureVersions' })

CreatureVersion.belongsTo(Creature, {
  foreignKey: 'creatureId',
  as: 'creature'
})

Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });

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
    GenderModel:Gender,
    MovieModel : Movie,
    CharacterModel:Character,
    ProductionModel:Production,
    db
}
//export const UserModel = User

