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
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getBicepExercises(req, res, next) {
  db.any('select * from bicep')
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getBackExercises(req, res, next) {
  db.any('select * from back')
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getTricepExercises(req, res, next) {
  db.any('select * from tricep')
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getLegsExercises(req, res, next) {
  db.any('select * from legs')
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getShouldersExercises(req, res, next) {
  db.any('select * from shoulders')
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getCoreExercises(req, res, next) {
  db.any('select * from core')
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

module.exports = {
  getChestExercises: getChestExercises,
  getBicepExercises: getBicepExercises,
  getBackExercises: getBackExercises,
  getTricepExercises: getTricepExercises,
  getLegsExercises: getLegsExercises,
  getShouldersExercises: getShouldersExercises,
  getCoreExercises: getCoreExercises
};
