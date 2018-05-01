import p__sequelize from 'sequelize'
//
const sequelize = new p__sequelize(
	process.env.DATABASE_URL,
)
//const sequelize = new p__sequelize(
//	'database',
//	'username',
//	'password',
//	{
//		host: 'localhost',
//		dialect: 'postgres',
//		pool: {
//			max: 5,
//			min: 0,
//			acquire: 30000,
//			idle: 10000,
//		},
//		operatorsAliases: false,
//	},
//)
{
	const promise = sequelize.authenticate()
	promise.then(() => {
		console.log('connection has been established successfully')
	})
	promise.catch((error) => {
		console.error('unable to connect to the database -', error)
	})
}
//
export default sequelize
