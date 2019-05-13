'use strict';

class ArticleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    var article_id = window.location.pathname.replace("/edit/article/", "");
    this.setState({
      article_id: article_id
    });
    superagent.get('/api/article/' + article_id)
    .end((err, res) => {
      if(err){
        console.log("err", err);
        alert(err);
      }
      else{
        var article = res.body;
        this.setState({
          title: article.title,
          author: article.author,
          body: article.body
        });
      }
    });
  }

  handleChange(event){
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  handleSubmit(event){
    event.preventDefault();
    var title = this.state.title || "";
    var author = this.state.author || "";
    var body = this.state.body || "";
    superagent
    .put('/api/article/' + this.state.article_id)
    .send({
      title: this.state.title,
      author: this.state.author,
      body: this.state.body
    })
    .set('Accept', 'json')
    .end((err, res) => {
      console.log("res", res);
      if(err){
        console.log(err);
        alert(err.message);
      }
      else{
        window.location = '/';
      }
    });
  }

  render(){
    return (
      <form action="" method="" onSubmit={this.handleSubmit}>
        <div>
          <h3>Title</h3>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div>
          <h3>Author</h3>
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
        </div>
        <div>
          <h3>Context</h3>
          <textarea name="body" value={this.state.body} onChange={this.handleChange}
           style={{width:300 + 'px', height:300 + 'px'}}></textarea>
        </div>
        <button type="submit" name="button">Finish</button>
      </form>
    );
  }
}

ReactDOM.render(
  <ArticleForm />,
  document.getElementById('root')
);
