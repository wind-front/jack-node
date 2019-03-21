const koa = require('koa')
const koaStatic = require('koa-static')
const Router = require('koa-router');

const app = new koa()
const route = new Router();

//示例二：使用koa-router路由中间件处理HTTP请求
//使用koa-static处理静态资源
const main = (ctx, next) => {
    const req = ctx.request
    const res = ctx.response
    if (req.accepts('xml')) {
        res.type = 'xml'
        res.body = '<data>This is xml data</data>'
    } else if (req.accepts('json')) {
        res.type = 'json'
        res.body = {name: 'jack', age: '25'}
    } else if (req.accepts('html')) {
        res.type = 'html'
        res.body = '<h2>This is xml HTML</h2>'
    } else {
        res.type = 'text'
        res.body = 'This is xml text'
    }
    next()
    console.log('11');
}

const about = (ctx, next) => {
    ctx.response.body = 'This is about page'
    next()
    console.log('32');
}

route.get("/", main)
route.get("/about", about)

app.use(route.routes())
app.use(koaStatic('./www'));

app.listen(8080, () => {
    console.log('Server start');
})