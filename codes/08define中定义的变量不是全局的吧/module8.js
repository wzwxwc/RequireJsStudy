/**
 * Created by zcG460 on 2016/7/14.
 */
//通过在define的模块文件的外部来定义全局变量
var zcglobal = "hello global";
define([], function () {
    //这个test是否是全局变量？
    console.log("声明了变量test");
    var test = "hello global";
})
