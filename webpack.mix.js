let mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets')
    .postCss('src/css/app.css', 'assets', [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
    ])
    .options({ processCssUrls: false });


mix.webpackConfig({ watchOptions: { ignored: /node_modules|dist|mix-manifest.json/, }, });