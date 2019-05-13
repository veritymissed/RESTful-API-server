var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Night Flying' });
});

router.get('/night_market', function(req, res, next) {
  res.render('block', { title: 'Night market' });
});

router.get('/night_feedback', function(req, res, next) {
  res.render('block', { title: 'Night feedback' });
});


router.get('/article/:article_id', function(req, res) {
  res.render('read_article', {title: 'Read an article'});
});

router.get('/new/article', function(req, res) {
  res.render('create_article', {title: 'Create new article'});
});

router.get('/edit/article/:article_id', function(req, res) {
  res.render('edit_article', {title: 'Edit an article'});
});

module.exports = router;
