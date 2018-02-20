const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'IlyaBarchugov',
  password : '1234',
  database : 'subscription-app'
});

exports.homePage = (req, res) => {
  res.render('index', { title: 'Subscription App | Ilya Barchugov' });
}

exports.getCountries = async (req, res) => {
  const query = connection.query(
    'SELECT countries.id, countries.country FROM countries',
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
}

exports.getDeliveryMoments = async (req, res) => {
  const query = connection.query(
    'SELECT deliverymoments.id, deliverymoments.country_id, deliverymoments.weekday FROM deliverymoments',
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
}
