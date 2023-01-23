var verifyLogin = (req,res,next)=>{
  if(req.session.user){
    next()
  }else{
    res.redirect('/')
  }
}
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
    req.session.user = response;
    req.session.user.loggedIn=true;
    res.redirect('/')
  })
})

module.exports = router;
