import {
	Client as p__pg__client,
	Pool as p__pg__pool,
} from 'pg'
//
const pool = new p__pg__pool({
	connectionString: process.env.DATABASE_URL,
	ssl: true,
})
pool.on('error', (error, client) => {
	console.error(error)
})
pool.connect()
//
export default pool
