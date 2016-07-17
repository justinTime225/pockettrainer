const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/training';
const db = pgp(connectionString);


// add query functions
function getChestExercises(req, res, next) {
  db.any('select * from chest')
    .then(function resolve(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL chest exercises'
        });
    })
    .catch(function error(err) {
      return next(err);
    });
}


module.exports = {
  getChestExercises: getChestExercises
};
