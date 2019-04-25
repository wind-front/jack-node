const koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')

const app = new koa()
const route = new Router();

//示例七：koa-body中间件将POST数据添加到request对象当中
//ctx.request && ctx.response内的相关属性均提供有别名，可省略request && response

const body = (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body.username
}

const main = (ctx, next) => {
    ctx.body = '8080'
    console.log(ctx.request)
    // console.log(ctx.request.body);
}

route.get("/", main)

app.use(route.routes())
app.use(koaStatic('./www'));
app.use(koaBody())
// app.use(body)

const port = 8080
app.listen(port, () => {
    console.log('Server start listen on ' + port);
})