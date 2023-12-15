const User = require('./User');
const Song = require('./Song');
const Style = require('./Style');
const Tuning = require('./Tuning');

User.hasMany(Song, {
  foreignKey: 'user_id',
});

Song.belongsTo(User, {
  foreignKey: 'user_id'
});

Tuning.hasMany(Song, {
  foreignKey: 'tuning_id',
});

Song.belongsTo(Tuning, {
  foreignKey: 'tuning_id'
});

Style.belongsToMany(Song, {
  through: 'song_has_style',
  foreignKey: 'style_id',
  otherKey: 'song_id'
});

Song.belongsToMany(Style, {
  through: 'song_has_style',
  foreignKey: 'song_id',
  otherKey: 'style_id'
});

module.exports = {
  User,
  Song,
  Style,
  Tuning,
}