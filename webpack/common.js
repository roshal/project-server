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
		resolveLoader: {
			moduleExtensions: [
				'-' + 'loader',
			],
		},
		target: 'node',
	}
}
