var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'GitBook Toolchain Documentation',

    // Enforce use of GitBook v3
    gitbook: '3.2.1',

    // Use the "official" theme
    plugins: ['theme-official@2.1.1', '-sharing', '-fontsettings', 'sitemap','download-pdf-link'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://toolchain.gitbook.com'
        }
		download-pdf-link: {
      base: 'https://00000.gitbook.io/dokuman0',
      label: {
          "en": "Download PDF",
          
      }
    }
    }
	
 

};
