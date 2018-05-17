import p__fs from 'fs'
import p__webpack_node_externals from 'webpack-node-externals'
import {
	join as p__path__join,
} from 'path'
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
		resolve: {
			extensions: [
				'.js',
			],
			modules: [
				p__path__join(__dirname, '..', 'node_modules'),
			],
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
