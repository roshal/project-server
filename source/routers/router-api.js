import p__koa_router from 'koa-router'
//
import m__router_auth from './api/router-auth'
import m__router_list from './api/router-list'
import m__router_time from './api/router-time'
//
const router = new p__koa_router({
	//prefix: '/',
})
router.use(
	'/auth',
	m__router_auth.routes(),
)
router.use(
	'/list',
	m__router_list.routes(),
)
router.use(
	'/time',
	m__router_time.routes(),
)
router.all(
	'/',
	(context) => {
		context.body = '/api/'
	},
)
//
export default router

