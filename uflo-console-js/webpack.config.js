/**
 * Created by Jacky.Gao on 2018-05-18.
 * Base on Webpack4
 */
const path=require('path');
module.exports={
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    mode:'development',
    entry: {
        todo:'./src/todo/index.jsx',
        central:'./src/central/index.jsx',
        calendar:'./src/calendar/index.jsx',
        designer:'./src/designer/designer.js',
        diagram:'./src/ProcessDiagram.js'
    },
    output:{
        path:path.resolve('./src/uflo-asserts/js'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options:{
                    "presets": [
                        "react","env"
                    ]
                }
            },
            {
                test:/\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {fallback: { "crypto": false }}
};