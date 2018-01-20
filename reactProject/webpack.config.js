const path = require('path');
const webpack = require('webpack')
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /(\.js|.jsx)$/,
                use:['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /(\.css|.scss)$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE.ENV': JSON.stringify('development')
        }),
    ],
    devServer: {
        open: true,
        port: 9000,
        inline: true,
        noInfo: true
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    devtool: 'eval-source-map',
   
}