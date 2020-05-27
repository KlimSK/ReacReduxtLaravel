const mix = require('laravel-mix');

/*var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');*/

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.sass', 'public/css')
    .scripts([
        'resources/js/src/main.js',
    ], 'public/js/all.js')
    .minify('public/js/all.js');

/*mix.webpackConfig(
    module.exports = {
        devServer: {
            historyApiFallback: true,
        }
    }
);*/
