
var express = require('express');
const productHelpers = require('../helpers/product-helpers');
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

module.exports = router;
