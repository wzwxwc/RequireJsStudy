/**
 * Created by zc on 2016/7/1.
 */
require.config({
    baseUrl: '',
    paths: {
        jquery: "../../deps/jquery-3.0.0"
    }
});

require(['jquery', './lib'], function (b, lib) {
    b("#mydiv").css('background-color', 'yellow');
    var a = new lib();
    //下述alert证明了一个道理，js执行的似乎比css渲染的快
    //上面的div还没有渲染完，alert已经出来了
    a.say();

});