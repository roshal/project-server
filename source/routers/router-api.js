import p__express from 'express'
//
import m__router_auth from './api/router-auth'
import m__router_list from './api/router-list'
import m__router_time from './api/router-time'
//
const router = p__express.Router({
	caseSensitive: true,
	casestrict: true,
})
router.use(/^\/auth(?=\/)/, m__router_auth)
router.use(/^\/list(?=\/)/, m__router_list)
router.use(/^\/time(?=\/)/, m__router_time)
router.get(/^\/$/,
	(request, response) => {
		response.send('qwe')
	},
)
//
export default router
