module.exports = {
    // ----------------------------------------------------------------------------------------------------
    // Vue Ayarları
    // ----------------------------------------------------------------------------------------------------
    outputDir: "./dist/vue",
    publicPath: "./",
    assetsDir: "./",
    indexPath: "index.html",
    devServer: {
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            // postcss: {
            //     // options here will be passed to postcss-loader
            // },
        },
    },

    lintOnSave: true, // boolean | 'default' | 'warning' | 'error';
    pluginOptions: {
        // ----------------------------------------------------------------------------------------------------
        // Electron Ayarları
        // ----------------------------------------------------------------------------------------------------
        electronBuilder: {
            outputDir: "./dist/electron",
            mainProcessFile: "./src/electron/electron.js",

            // eslint-disable-next-line no-unused-vars
            chainWebpackMainProcess: (config) => {
                // Chain webpack config for electron main process only
            },

            // eslint-disable-next-line no-unused-vars
            chainWebpackRendererProcess: (config) => {
                // Chain webpack config for electron renderer process only (won't be applied to web builds)
            },

            preload: {
                preload: "src/electron/preload.js",
            },
        },
        // ----------------------------------------------------------------------------------------------------
    },

    // ----------------------------------------------------------------------------------------------------
    // Webpack Ayarları
    // ----------------------------------------------------------------------------------------------------
    configureWebpack: {
        // Webpack configuration applied to web builds and the electron renderer process
    },
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = process.env.VUE_APP_TITLE;
            return args;
        });
    },
    // ----------------------------------------------------------------------------------------------------
};
