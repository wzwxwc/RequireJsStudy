/**
 * Created by zcG460 on 2016/7/14.
 */
/*通过在define的模块文件的外部来定义全局变量
 下述的zcglobal定义到了window下，成为window.zcglobal
 所以，这个文件的执行环境是window？？
 我想问：define函数会被怎样处理？
 回答：define是一个已经定义好的函数，直接执行呗！！
 应该也是在window下执行！
 */
var zcglobal = "hello global";
define([], function () {
    //这个test是否是全局变量？
    console.log("声明了变量test");
    var test = "hello global";
});
