var express = require('express');
var path = require('path')
var watson = require('watson-developer-cloud');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var assistant = new watson.AssistantV1({
  username: '8511cc8c-6dda-419b-96ed-7f460aed5d6a',
  password: 'afE0uE7CiUQu',
  version: '2018-02-16',
});

app.post('/api/*', function (req, res) {
  var params = req.body;
  var input = params.input;
  assistant.message({
    workspace_id: '53e09771-b4bd-4076-99da-0518e2a242fd',
    input: input
  }, function (err, response) {
    if (err) {
      //console.log('error:', err);
    }
    else {
      //console.log(JSON.stringify(response, null, 2));
      res.send(response);
    }
  });
});


app.use(express.static(path.resolve(__dirname, "www")));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log("listening to Port", app.get("port"));
});