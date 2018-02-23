var express = require('express');
var router = express.Router();

var LibraryCtrl = require('./../controllers/library');
var Library = new LibraryCtrl();

router.get('/', function(req, res) { res.render('library', { title: 'Library' }); });
router.get('/detail/:id', Library.Detail);
router.get('/display', Library.Display);
router.get('/add', function(req, res){ res.render('library/create', { title: 'Library'}); });
router.post('/add', Library.Create);
router.get('/delete/:id', Library.Delete);
router.get('/update/:id', Library.GetUpdate);
router.post('/update/:id', Library.PostUpdate);

module.exports = router;
