const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
};

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        }, 'css-loader'
    ];

    if (extra) loaders.push(extra)

    return loaders;
};

const babelOptions = (preset) => {
    const options = {
        presets:[
            '@babel/preset-env'
        ],
        plugins:[
            '@babel/plugin-proposal-class-properties'
        ]
    };

    if(preset){
        options.presets.push(preset)
    }

    return options
};

const filename = (extension) => isDev ? `[name].${extension}` : `[name].[hash].${extension}`;

const clientConfig = {
    entry: {
        client: ['@babel/polyfill', './src/client/client.js'],
    },
    output: {
        filename: `static/js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist/public'),
        publicPath:'/public',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    optimization: optimization(),
    devtool: isDev ? 'source-map' : '',
    plugins: [
        // заповняємо html шляхом css, js
        new HTMLWebpackPlugin({
            template: './public/index.html',

            minify: {
                collapseWhitespace: isProd
            }
        }),

        // купіюємо файли
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'public/images/'),
                to: path.resolve(__dirname, 'dist/public/images')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: `static/css/${filename('css')}`
        })
    ],
    module: {
        rules: [
            // для читання css
            {
                test: /\.css$/,
                use: cssLoaders()
            }, {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: {
                    loader:'babel-loader',
                    // добавляю присети
                    options: babelOptions('@babel/preset-react')
                }
            },
        ]
    }
};

const serverConfig = {
    target: "node",
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()],
    entry: {
        index: ['@babel/polyfill', './src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `index.js`,
        // publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    optimization: optimization(),
    devtool: isDev ? 'source-map' : '',
    // очищаємо папку dist
    plugins:[
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: {
                loader: 'babel-loader',
                options: babelOptions('@babel/preset-react')
            }
        },
        ]
    }
};

module.exports = [clientConfig, serverConfig];
