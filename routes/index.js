var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Trang chi tiết sản phẩm. */
router.get('/*.:idsanpham', function(req, res, next) {
  var idsp=req.params.idsanpham;
  if(!req.session.spdaxem){
    req.session.spdaxem= [] ;
  }
  if(req.session.spdaxem.indexOf(idsp)==-1){
    req.session.spdaxem.push(idsp);
  }
  res.render('chi-tiet-san-pham',{idsp:req.params.idsanpham});
});

/* Trang danh sách đã xem. */
router.get('/danh-sach-da-xem', function(req, res, next) {
  if(!req.session.spdaxem){
    res.send('Danh sách sản phẩm đã xem rỗng');
  }
  res.render('danh-sach-da-xem',{ds:req.session.spdaxem });
});
module.exports = router;
