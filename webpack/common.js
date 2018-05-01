import p__fs from 'fs'
import p__webpack_node_externals from 'webpack-node-externals'
import {
	join as p__path__join,
} from 'path'
//
const node_modules = {}
{
	const list = p__fs.readdirSync('node_modules')
	list.filter((item) => {
		return item !== '.bin'
	})
	list.forEach((item) => {
		node_modules[item] = 'commonjs ' + item
	})
}
//
export default () => {
	return {
		context: p__path__join(__dirname, '..', 'source'),
		entry: {
			'source': './source.js',
		},
		output: {
			chunkFilename: 'chunks/[id].js',
			filename: '[name].js',
		},
		resolveLoader: {
			moduleExtensions: [
				'-' + 'loader',
			],
		},
		target: 'node',
		externals: [
			p__webpack_node_externals(),
		],
	}
}
