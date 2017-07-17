/**
 * Created by zc on 2017/7/14.
 */
console.log("执行了app.js");
//默认的baseurl是data-main所指向的文件的所在路径！
requirejs.config({
    //By default load any module IDs from js/lib
    // baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: './app',
        lib: './lib',
        collection: './collection'
    }
});

// Start the main app logic.
requirejs(['lib/jquery', 'lib/canvas', 'app/sub', 'collection/module1/module1'],
    function ($, canvas, sub) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
    });