var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req, res, next)
  res.send(req.query.title);
});

router.post('/', function(req, res, next) {
  console.log(req.body.name,'req------------------')
  if (req.body.name) {
    res.send(res.body.name);
  } else {
    throw new Error('name is error')
  }
});

app.all('/', () => {
  res.send(1);
})

module.exports = router;
 