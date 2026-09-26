'use strict';

const path = require('path');

/** @returns {import('@docusaurus/types').Plugin} */
module.exports = function glossaryPageOverride() {
  return {
    name: 'glossary-page-override',
    configureWebpack() {
      const webpack = require('webpack');
      return {
        plugins: [
          new webpack.NormalModuleReplacementPlugin(
            /docusaurus-plugin-glossary[\\/]dist[\\/]components[\\/]GlossaryPage\.js$/,
            path.resolve(__dirname, '../components/GlossaryPage.tsx'),
          ),
        ],
      };
    },
  };
};
