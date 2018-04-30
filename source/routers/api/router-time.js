import p__koa_router from 'koa-router'
//
import m__providers_postgresql from '../../providers/provider-postgresql'
//
const router =  new p__koa_router()
router.all(
	'/',
	async (context) => {
		try {
			const query = await m__providers_postgresql.query(
				'select now()',
			)
			context.body = {
				status: 'success',
				data: query.rows[0].now,
				query,
			}
		} catch (error) {
			context.body = {
				status: 'error',
				error,
			}
		}
	},
)
//
export default router
