import p__express from 'express'
import p__morgan from 'morgan'
//
import m__router_api from './routers/router-api'
//
const express = p__express()
express.disable('x-powered-by')
express.enable('case sensitive routing')
express.enable('strict routing')
express.set('json spaces', '\t')
const logger = p__morgan('combined')
express.use(/^\//, logger)
express.use(/^\/api(?=\/)/, m__router_api)
express.listen(process.env.PORT, () => {
	console.log('port', this.address().port)
})
//{
//	const stack = express._router.stack.slice()
//	for (let index = 0; index < stack.length; index += 1) {
//		console.log(stack[index].regexp)
//		if (1
//			&& stack[index].handle
//			&& stack[index].handle.stack
//		) {
//			stack.push(...stack[index].handle.stack)
//		}
//	}
//}
