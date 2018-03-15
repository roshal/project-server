import {
	createClient as p__redis__create_client,
	print as p__redis__print,
} from 'redis'
//
const client = p__redis__create_client({
	url: process.env.REDIS_URL,
})
client.on('error', (error) => {
	console.error(error)
})
//	client.set(
//		'string index',
//		'string value',
//		p__redis__print,
//	)
//
export default client
