const koa = require('koa')
const app = new koa()


//示例五：错误处理：ctx.throw(404) == ctx.response.status = 404 && ctx.response.body = 'Not Found'
//所有的中间件均包裹一层错误处理

const handleError = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message
        }
    }
}

const first = (ctx, next) => {
    ctx.throw(404)
}

app.use(handleError)
app.use(first)

//error全局事件，也可以监听错误
app.on('error', (err, ctx) => {
    console.log('err');
})
app.listen(80, () => {
    console.log('server started');
})