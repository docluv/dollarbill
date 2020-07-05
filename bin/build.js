const UglifyJS = require( "uglify-es" ),
    path = require( "path" ),
    fs = require( "fs" ),
    argv = require( "yargs" ).argv,
    utils = require( "./utils" );

let destPath = "../js/",
    srcPath = "../js/dev/",
    scriptMap = {},
    utf8 = "utf8",
    options = {
        parse: {
            html5_comments: false,
            shebang: false
        },
        compress: {
            drop_console: true,
            keep_fargs: false
        }
    };

let wrapper = utils.readFile( srcPath + "iife_wrapper.txt" ),
    core = utils.readFile( srcPath + "dollar-bill.js" ),
    css = utils.readFile( srcPath + "dollar-bill.cssClass.js" ),
    events = utils.readFile( srcPath + "dollar-bill.events.js" );

let code = core + "\r\n" + css + "\r\n" + events;

code = wrapper.replace( /{{{code}}}/gi, code );

utils.createFile( destPath + "dollar-bill.js", code, true );

utils.createFile( destPath + "dollar-bill.min.js",
    UglifyJS.minify( code, options ).code, true );