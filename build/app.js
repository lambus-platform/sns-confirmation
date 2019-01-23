'use strict';

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = process.env.PORT || 3000;
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.post('/', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk.toString();
  });
  req.on('end', function () {
    var payload = JSON.parse(body);

    if (payload.Type === 'SubscriptionConfirmation') {
      var url = payload.SubscribeURL;
      (0, _request.default)(url, function (err, response) {
        if (!err && response.statusCode === 200) {
          res.json({
            "success": true
          });
        } else {
          res.json({
            "success": false
          });
        }
      });
    }
  });
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
//# sourceMappingURL=app.js.map