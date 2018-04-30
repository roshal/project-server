import p__webpack from 'webpack'
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		devServer: {
			port: 80,
		},
		devtool: 'cheap-module-source-map',
		output: {
			path: p__path__join(__dirname, '..', 'output'),
		},
		//plugins: [
		//	new p__webpack.BannerPlugin(
		//		'require(\'source-map-support\').install()',
		//		{
		//			raw: true,
		//			entryOnly: false,
		//		},
		//	),
		//],
	}
}
