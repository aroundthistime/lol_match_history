const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /[\.js]$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
    ],
};

const configWithTimeMeasures = new SpeedMeasurePlugin().wrap(config);
configWithTimeMeasures.plugins.push(new MiniCssExtractPlugin({}));

module.exports = configWithTimeMeasures;