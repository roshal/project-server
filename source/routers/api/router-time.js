import p__express from 'express'
//
import m__providers_postgresql from '../../providers/provider-postgresql'
//
const router = p__express.Router()
router.all(/^\/$/,
	async (request, response) => {
		try {
			const query = await m__providers_postgresql.query(
				'select now()',
			)
			response.send({
				status: 'success',
				data: query.rows[0].now,
				query,
			})
		} catch (error) {
			response.send({
				status: 'error',
				error,
			})
		}
	},
)
//
export default router
