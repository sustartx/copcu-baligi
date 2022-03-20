const path = require('path')

// https://stackoverflow.com/a/6491621
Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

const config = {
    vue: {
        src: './src',
        dist: './dist/vue'
    },
    electron: {
        src: './src',
        dist: './dist/electron'
    },
    engine: {
        common: {
            src: './engine/common',
            dist: './dist/engine/common'
        },
        darwin: {
            src: './engine/darwin',
            dist: './dist/engine/darwin'
        },
        linux: {
            src: './engine/linux',
            dist: './dist/engine/linux'
        },
        win: {
            x86: {
                src: './engine/windows/x86',
                dist: './dist/engine/windows/x86'
            },
            x64: {
                src: './engine/windows/x64',
                dist: './dist/engine/windows/x64'
            }
        },
    }
}

const utils = {
    resolve: function (dir) {
        return path.join(__dirname, Object.byString(config, dir))
    },

    assets: function (_path) {
        const assetsSubDirectory = 'static'
        return path.posix.join(assetsSubDirectory, _path)
    }
}


module.exports = config
module.exports = utils
