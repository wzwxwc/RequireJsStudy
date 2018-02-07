/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
define([], function () {
    var temp = {};
    temp.say = function () {
        console.log("b模块的say方法被执行");
        require(["c"], function (instanceC) {
            instanceC.say();
        })
    };
    return temp;
});