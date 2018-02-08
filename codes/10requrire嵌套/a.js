/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
console.log("define之前");
define([], function () {
    console.log("deine内部");
    var temp = {};
    temp.say = function () {
        console.log("a模块的say方法被执行");
    };
    require(["b"], function (instanceB) {
        instanceB.say();
    })
    return temp;
});
console.log("define之后");