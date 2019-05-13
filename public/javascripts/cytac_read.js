'use strict';

class Article extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      body: ''
    };
  }
  componentDidMount(){
    var article_id = window.location.pathname.replace("/article/", "");
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

  render(){
    return (
        <div>
          <h3>Title</h3>
          <p>{this.state.title}</p>
          <h3>Author</h3>
          <p>{this.state.author}</p>
          <h3>Context</h3>
          <p>{this.state.body}</p>
        </div>

    );
  }
}

ReactDOM.render(
  <Article />,
  document.getElementById('root')
);
