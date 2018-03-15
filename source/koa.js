import p__koa from 'koa'
import p__koa_router from 'koa-router'
//
const router = p__koa_router({
	prefix: '/api/',
})
router.all('/time/',
	(context) => {
		context.body = 'text'
	},
)
const koa = new p__koa()
koa.use(
	router.routes(),
)
koa.listen(process.env.PORT, function () {
	console.log('port', this.address().port)
})
