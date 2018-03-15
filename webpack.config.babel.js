import p__webpack_merge from 'webpack-merge'
//
export default (env) => {
	const configuration = (name) => {
		const path = './webpack/' + name
		return require(path).default(env)
	}
	return p__webpack_merge(
		configuration('common'),
		...[
			...env.analyze ? [configuration('mode-analyze')] : [],
			...env.develop ? [configuration('mode-develop')] : [],
			...env.produce ? [configuration('mode-produce')] : [],
		],
		configuration('source-scripts'),
	)
}
