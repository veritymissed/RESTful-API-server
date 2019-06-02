var express = require('express');
var router = express.Router();

const Article = require('../models').Article;

/* Article CRUD*/
/* Create a new article*/
router.post('/article', async function(req, res) {
  try {
    var form = req.body;
    var title = form.title;
    var author = form.author;
    var body = form.body;
    var newArticle = new Article({
      title: title,
      author: author,
      body: body
    });
    await newArticle.save();
    return res.json(newArticle);
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: e.message
    });
  }
});
/* Get many articles */
router.get('/articles', async function(req, res) {
  try {
    var articles = await Article.find({});
    return res.json(articles);
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: e.message
    });
  }
});
/* Get an articles */
router.get('/article/:article_id', async function(req, res) {
  try {
    var article = await Article.findOne({_id: req.params.article_id});
    return res.json(article);
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: e.message
    });
  }
});
/* Update an article */
router.put('/article/:article_id', async function(req, res) {
  try {
    await Article.findOneAndUpdate({_id: req.params.article_id}, {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body
    });
    return res.json({
      message: "PUT /article"
    });
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: e.message
    });
  }
});
/* Delete an article*/
router.delete('/article/:article_id', async function(req, res) {
  try {
    var article_id = req.params.article_id;
    await Article.remove({_id: article_id});
    return res.json({
      message: "DELETE article whose _id is " + article_id
    });
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: e.message
    });
  }
});
module.exports = router;
