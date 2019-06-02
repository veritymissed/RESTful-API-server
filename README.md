# CRUD practice

## Environment
Set up a Mongo database on `localhost:27017`
Thsi nodejs App will run on `localhost:5000`

## How to run ?
` yarn `
` node develop`

You can access the website on `localhost:5000`


## API CRUD server

一個 RESTful的server設計

* 使用express.js
* 使用mongodb
* 使用fake.js產生資料

### API routes

API 的路徑通常為 Prefix + endpoint
這邊的prefix 為 `/api/`

#### create
` POST /article`

#### read
多篇文章
` GET /articles`

一篇文章

` GET /article/:article_id`

#### Update
` PUT /article/:article_id`

#### delete
` DELETE /article/:article_id`
