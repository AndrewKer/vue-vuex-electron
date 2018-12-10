const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
              }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};