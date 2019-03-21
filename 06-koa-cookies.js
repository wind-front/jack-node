const koa = require('koa')
const app = new koa()

//示例六：koa设置cookies
const cookies = (ctx, next) => {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

app.use(cookies)

app.listen(80)