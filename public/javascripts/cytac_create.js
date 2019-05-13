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
    console.log("body", body);
    superagent
    .post('/api/article')
    .send({
      title: this.state.title,
      author: this.state.author,
      body: this.state.body
    })
    .set('Accept', 'json')
    .end((err, res) => {
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
        <button type="submit" name="button">Create</button>
      </form>
    );
  }
}

ReactDOM.render(
  <ArticleForm />,
  document.getElementById('root')
);
