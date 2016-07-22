/**
 * Created by zc on 2016/7/1.
 */

//使用绝对路径作为baseUrl的地址！
require.config({
    baseUrl: '/requireJsStudy/',
    paths: {
        //下述deps前如果加上“/”，则以http://localhost加上下面的内容
        jquery: "deps/jquery-3.0.0"
    }
});

require(['jquery', 'lib/lib'], function (b, lib) {
    b("#zcDiv").css('background-color', 'yellow');
    var a = new lib();
    // a.say();

})