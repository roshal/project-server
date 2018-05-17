import p__lodash_webpack_plugin from 'lodash-webpack-plugin'
import p__uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
//
import {
	join as p__path__join,
} from 'path'
//
export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel',
							options: {
								babelrc: false,
								plugins: [
									'transform-runtime',
								],
								presets: [
									'env',
									'flow',
									'stage-2',
								],
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__lodash_webpack_plugin(),
			...env.produce ? [
				new p__uglifyjs_webpack_plugin({
					uglifyOptions: {
						output: {
							comments: false,
						},
						toplevel: true,
					},
				}),
			] : [],
		],
	}
}
