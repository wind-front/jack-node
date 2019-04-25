const fs = require('fs')
const koa = require('koa')
const compose = require('koa-compose')
const app = new koa()

//示例二：koa-compose将多个中间件合并为一个中间件
const next1 = async (ctx, next) => {
    console.log('21');
    next()
    await fs.readFile('./www/index.html', (err, data) => {
    })
    ctx.response.body = '888'
}
const next2 = (ctx, next) => {
    console.log('31');
    next()
}

const middlewares = compose([next1, next2])


app.use(middlewares)
const port = 8080
app.listen(port, () => {
    console.log('Server start listen on ' + port);
})