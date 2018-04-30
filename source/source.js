import p__koa from 'koa'
//
import m__router_api from './routers/router-api'
//
const koa = new p__koa()
koa.use(
	'/api/',
	m__router_api.routes(),
)
koa.listen(process.env.PORT, function () {
	console.log('port', this.address().port)
})
