const koa = require('koa')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const app = new koa()

//示例七：koa-body中间件将POST数据添加到request对象当中
//ctx.request && ctx.response内的相关属性均提供有别名，可省略request && response

const body = (ctx, next) => {
    console.log(ctx.method);
    console.log(ctx.type);
    ctx.body = ctx.request.body.username
}

app.use(koaStatic('./www'));
app.use(koaBody())
app.use(body)

app.listen(80)