/**
 * Created by zc on 2016/7/1.
 */
require.config({
    baseUrl: '',
    paths: {
     jquery:"../../deps/jquery-3.0.0"
    }
});

require(['jquery','../../lib/lib'], function (b, lib) {
    b("#mydiv").css('background-color', 'yellow');
    var a = new lib();
    // a.say();

})