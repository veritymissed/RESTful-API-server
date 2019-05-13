'use strict';

class Article extends React.Component {
  constructor(props){
    super(props);
    this.state = {articleArray: []};
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount(){
    superagent.get('/api/articles')
    .end((err, res) => {
      if(err){
        console.log("err", err);
        alert(err);
      }
      else{
        var articleArray = res.body;
        this.setState({
          articleArray: articleArray
        });

      }
    });

  }

  deleteArticle(event){
    var target = event.target;
    var deleted_index = this.state.articleArray.findIndex((article) => {
      return article._id == target.article_id;
    });
    var articleArray = this.state.articleArray;
    articleArray.splice(deleted_index);

    superagent
    .delete('/api/article/' + target.id)
    .end((err, res) => {
      if(err){
        console.log("err", err);
        alert(err);
      }
      else{
        this.setState({
          articleArray: articleArray
        });
      }
    });

  }

  render(){
    var articleList = this.state.articleArray.map((val) => {
      var article_id = val._id.toString();
      var url = "/article/" + article_id;
      var edit_url = "/edit/article/" + article_id;
      return (
        <li key={article_id}>
        <a href={url}>{val.title}</a>
        <span>Author: {val.author}</span>
        <span>Date: {val.date}</span>
        <button type="button"><a name="delBtn" href={edit_url}> Edit </a></button>
        <button type="button" name="delBtn" id={article_id} onClick={this.deleteArticle}> X </button>
        </li>
      )
    });
    return (
      <ul>
      {articleList}
      </ul>
    );
  }
}

ReactDOM.render(
  <Article />,
  document.getElementById('articleList')
);
