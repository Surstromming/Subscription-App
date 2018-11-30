const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const countrySchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  country: {
    type: String,
  },
  created_at: {
    type: Date,
  },
});

module.exports = mongoose.model('Country', countrySchema);
