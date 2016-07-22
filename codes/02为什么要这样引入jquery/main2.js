/**
 * Created by zc on 2016/7/4.
 */

//虽然没有在最上面使用require.config()
//ctrl+单击，“【】”里的对象，依然可以直接定位过去
//这就是webstorm对AMD方式的强大支持吧！
require(['../../deps/jquery-3.0.0'], function (zcjQuery) {
    zcjQuery("#zcDiv").css('background-color', 'yellow');
    console.log('data-main指向的js文件被执行！')
});