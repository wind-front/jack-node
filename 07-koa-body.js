const koa = require('koa')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const app = new koa()

//示例七：koa-body中间件将POST数据添加到request对象当中
const body = (ctx, next) => {
    console.log(ctx.request);
    ctx.response.body = ctx.request.body.username
}

app.use(koaStatic('./www'));
app.use(koaBody())
app.use(body)

app.listen(80)