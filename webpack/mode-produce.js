import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		devServer: {
			compress: true,
			https: true,
			port: 443,
		},
		output: {
			path: p__path__join(__dirname, '..', 'public'),
		},
	}
}
