import p__sequelize from 'sequelize'
//
const sequelize = new p__sequelize(
	'database',
	'username',
	'password',
	{
		host: 'localhost',
		dialect: 'postgres',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
		operatorsAliases: false,
	},
)
const model = sequelize.define(
	'user',
	{
		username: sequelize.STRING,
		birthday: sequelize.DATE,
	},
)
const promise = sequelize.sync()
promise.then(() => model.create({
	username: 'name',
	passhash: 'hash',
	birthday: new Date(1970, 1, 1),
}))
promise.then((instance) => {
	console.log(instance.toJSON())
})
//
export default model
