/**
 * Created by zc on 2016/7/4.
 */
require.config({
    baseUrl: '',
    paths: {
        jquery: '../vendor/jquery-3.0.0'
    }
});

require(['jquery'], function (zcjQuery) {
    zcjQuery("#zcDiv").css('background-color', 'yellow');
    console.log('data-main指向的js文件被执行！')
});