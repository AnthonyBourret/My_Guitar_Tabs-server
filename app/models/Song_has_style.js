const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class SongHasStyle extends Model {};

SongHasStyle.init({
    song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    style_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    },{
        sequelize,
        tableName: "song_has_style",
        modelName: "SongHasStyle"
});

module.exports = SongHasStyle;