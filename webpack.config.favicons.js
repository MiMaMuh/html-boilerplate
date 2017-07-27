'use strict';

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

/** CONFIG YOUR FAVICON HERE **/
// see more: https://github.com/jantimon/favicons-webpack-plugin
const faviconConfig = {
    // Your source logo
    logo: './src/assets/img/favicon/favicon.png',
    // The prefix for all image files (might be a folder or a name)
    prefix: 'assets/img/favicon/',
    // Emit all stats of the generated icons
    emitStats: false,
    // The name of the json containing all favicon information
    statsFilename: 'iconstats.json',
    // Generate a cache file with control hashes and
    // don't rebuild the favicons until those hashes change
    persistentCache: true,
    // Inject the html into the html-webpack-plugin
    inject: true,
    // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
    background: '#fff',
    // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
    title: 'Squares And Brackets',

    // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: true,
        yandex: false,
        windows: false,
    },
};

function getFavicons() {
    return new FaviconsWebpackPlugin(faviconConfig);
}

// export stuff
module.exports = {
    getFavicons
};
