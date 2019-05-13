var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cytac', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{
    body: String,
    date: Date
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

var Article = mongoose.model("Article", articleSchema);

exports.Article = Article;
