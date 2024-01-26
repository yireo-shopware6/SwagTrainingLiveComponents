const path = require('path');
const webpack = require('webpack');

module.exports = (...args) => {
    return {
        resolve: {
            alias: {
                '@symfony/stimulus-bridge': path.resolve(__dirname, '@symfony/stimulus-bridge'),
                '@hotwired/stimulus': path.resolve(__dirname, '@hotwired/stimulus'),
            }
        }
    }
}

// vendor/symfony/ux-live-component/assets/dist
