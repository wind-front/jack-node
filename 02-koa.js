const koa = require('koa')
const app = new koa()

//示例二：使用中间件进行业务处理：牢记剥洋葱模型
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
    console.log('11');
    next()
    console.log('12');
}

const next = (ctx, next) => {
    console.log('21');
    next()
    console.log('22');
}
const next2 = (ctx, next) => {
    console.log('31');
    next()
    console.log('32');
}

// 执行顺序依次为：11 21 31 32 22 12

app.use(main)
app.use(next)
app.use(next2)

app.listen(8080, () => {
    console.log('Server start');
})