const { CheckerPlugin } = require('awesome-typescript-loader');
const { TypewizPlugin, typewizCollectorMiddleware } = require('typewiz-webpack');

module.exports = {
    mode: 'development',

    entry: './src/main.ts',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader', 'typewiz-webpack']
            }
        ]
    },

    plugins: [
        new CheckerPlugin(),
        new TypewizPlugin(),
    ],

    devServer: {
        before(app) {
            typewizCollectorMiddleware(app, 'collected-types.json');
        },
        contentBase: 'web',
    },
};
