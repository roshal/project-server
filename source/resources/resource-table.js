import m__providers_postgresql from '../providers/provider-postgresql'
//
export default {
	'create': (name, number) => {
		return m__providers_postgresql.query({
			text: 'insert into "table" (name, number) values ($1, $2)',
			values: [
				name,
				number,
			],
		})
	},
	'getall': () => {
		return m__providers_postgresql.query({
			text: 'select * from "table"',
		})
	},
	'getone': (id) => {
		return m__providers_postgresql.query({
			text: 'select * from "table" where id = $1',
			values: [
				id,
			],
		})
	},
	'remove': (id) => {
		return m__providers_postgresql.query({
			text: 'delete from "table" where id = $1',
			values: [
				id,
			],
		})
	},
	'update': (id, name, number) => {
		return m__providers_postgresql.query({
			text: 'update "table" set name = $2, number = $3 where id = $1',
			values: [
				id,
				name,
				number,
			],
		})
	},
}
