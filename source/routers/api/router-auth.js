import p__koa_router from 'koa-router'
//
import m__resources_users from '../../resources/resource-users'
//
const router =  new p__koa_router()
router.all(
	'',
	async (request, response) => {
		const dictionary = m__resources_users
		try {
			if (request.body.method in dictionary) {
				const query = await dictionary[request.body.method]()
				response.json({
					status: 'success',
					data: query.rows,
					query,
				})
			} else {
				response.json({
					status: 'error',
					message: 'method is undefined',
				})
			}
		} catch (error) {
			response.json({
				status: 'error',
				error,
			})
		}
	},
)
//
export default router
