import p__koa from 'koa'
import p__koa_router from 'koa-router'
//
import m__router_api from './routers/router-api'
//
const router = new p__koa_router({
	prefix: '/qwe',
})
router.use(
	'api/',
	m__router_api.routes(),
)
router.all(
	'/',
	(context) => {
		context.body = '/'
	},
)
const koa = new p__koa()
koa.use(
	router.routes(),
)
koa.listen(process.env.PORT, function () {
	console.log('port', this.address().port)
})
console.log(router)
