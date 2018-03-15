import m__providers_postgresql from '../providers/provider-postgresql'
//
export default {
	'create': (name, number) => {
		return m__providers_postgresql.query({
			text: 'insert into users (name, number) values ($1, $2)',
			values: [
				name,
				number,
			],
		})
	},
	'getall': () => {
		return m__providers_postgresql.query({
			text: 'select * from users',
		})
	},
	'getone': (id) => {
		return m__providers_postgresql.query({
			text: 'select * from users where id = $1',
			values: [
				id,
			],
		})
	},
	'remove': (id) => {
		return m__providers_postgresql.query({
			text: 'delete from users where id = $1',
			values: [
				id,
			],
		})
	},
	'update': (id, name, number) => {
		return m__providers_postgresql.query({
			text: 'update users set name = $2, number = $3 where id = $1',
			values: [
				id,
				name,
				number,
			],
		})
	},
}
