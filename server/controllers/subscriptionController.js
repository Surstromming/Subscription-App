const mongoose = require('mongoose');
const Country = mongoose.model('Country');
const DeliveryMoment = mongoose.model('DeliveryMoment');

exports.homePage = (req, res) => {
  res.render('index', { title: 'Subscription App | Ilya Barchugov' });
}

exports.getCountries = async (req, res) => {
  const countries = await Country.find();
  res.json(countries);
}

exports.getDeliveryMoments = async (req, res) => {
  const deliveryMoments = await DeliveryMoment.find();
  res.json(deliveryMoments);
}
