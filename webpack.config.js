const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'script1.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean : true,
        filename: 'bundle.js'
    },
}