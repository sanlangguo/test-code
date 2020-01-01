var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req, res, next)
  res.send('respond with a resousssssssssssssssssssrce');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.name,'req------------------')
  if (req.body.name) {
    res.send(res.body.name);
  } else {
    throw new Error('name is error')
  }
});

app.all('/', () => {
  
})

module.exports = router;
 