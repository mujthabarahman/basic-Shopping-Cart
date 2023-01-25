
var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var userHelpers = require('../helpers/user-helpers')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render('users/all-products',{products});
  })
});
router.get('/signup',(req,res)=>{
  res.render('users/signup-page')
})
router.post('/signup',(req, res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response)
  })
})
router.get('/login',(req,res)=>{
  res.render('users/login-page')
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body)
})

module.exports = router;
