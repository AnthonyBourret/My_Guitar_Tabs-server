const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Song extends Model {};

Song.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  artist: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  tab_link: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lyrics_link: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  difficulty: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  capo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tuning_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  sequelize,
  tableName: "song",
  modelName: "Song"
});

module.exports = Song;