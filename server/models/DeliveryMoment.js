const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const deliveryMomentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  country_id: {
    type: Number,
  },
  weekday: {
    type: Number,
  },
  created_at: {
    type: Date,
  },
});

module.exports = mongoose.model('DeliveryMoment', deliveryMomentSchema);
