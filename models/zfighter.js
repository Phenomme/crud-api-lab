const mongoose = require('mongoose');

const zfighterSchema = mongoose.Schema({
    name: String,
    powerLevel: Number,
    race: String,
  });

  const Zfighter = mongoose.model('Zfighter', zfighterSchema);

  module.exports = Zfighter;