const koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')

const app = new koa()
const route = new Router()
const port = 8080

const GET = async (ctx, next) => {
    await new Promise((resolve, reject) =>{ 
        setTimeout(resolve, 1000)
    })
    ctx.body = 'GET'
    console.log('GET')
}

const POST = (ctx, next) => {
    ctx.body = 'POST'
    console.log(ctx.request)
}

route.get("/axiosGet", GET)
route.post("/axiosPost", POST)

app.use(route.routes())
app.use(koaStatic('./www'))
app.use(koaBody())

app.listen(port, () => {
    console.log('Server start listen on ' + port);
})