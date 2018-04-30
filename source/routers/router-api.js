import p__koa_router from 'koa-router'
//
import m__router_auth from './api/router-auth'
import m__router_list from './api/router-list'
import m__router_time from './api/router-time'
//
const router = new p__koa_router()
router.use(
	'/time/',
	m__router_auth,
)
router.use(
	'/list/',
	m__router_list,
)
router.use(
	'/time/',
	m__router_time,
)
router.all(
	'/',
	(context) => {
		context.bode = 'text'
	},
)
//
export default router
