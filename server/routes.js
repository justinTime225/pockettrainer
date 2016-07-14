const obj = {name: 'justin', hobby: 'programming'};

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
};


