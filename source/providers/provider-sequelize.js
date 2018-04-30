import p__sequelize from 'sequelize'
//
const sequelize = new p__sequelize(
	process.env.DATABASE_URL,
)
//
export default sequelize
