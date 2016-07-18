const obj = {name: 'justin', hobby: 'programming'};
const db = require('./db/queries');
const sendResponse = (res, err, data, status) => {
  if (err) {
    res.status(400).send(err);
  } else {
    res.status(status).send(data);
  }
};
module.exports = (app) => {
  app.route('/test')
    .get((req, res) => {
      sendResponse(res, null, obj, 200);
    });
  // more API endpoints here
  app.get('/chest', db.getChestExercises);
  app.get('/bicep', db.getBicepExercises);
  app.get('/back', db.getBackExercises);
  app.get('/tricep', db.getTricepExercises);
  app.get('/legs', db.getLegsExercises);
  app.get('/shoulders', db.getShouldersExercises);
  app.get('/core', db.getCoreExercises);
};


