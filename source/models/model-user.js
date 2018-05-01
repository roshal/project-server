import p__sequelize from 'sequelize'
//
import m__provider_sequelize from '../providers/provider-sequelize'
//
const model = m__provider_sequelize.define(
	'user',
	{
		username: p__sequelize.STRING,
		birthday: p__sequelize.DATE,
	},
)
{
	const promise = m__provider_sequelize.sync({
		// will drop the table if it already exists
		force: true,
	})
	promise.then(() => {
		return model.create({
			username: 'name',
			passhash: 'hash',
			birthday: new Date(1970, 1, 1),
		})
	})
	promise.then((instance) => {
		console.log(instance.toJSON())
	})
}
//
export default model
