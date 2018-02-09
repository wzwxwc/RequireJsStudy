/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
console.log("b.js的define之前");
define([], function () {
    console.log("b.js的define内部");
    var temp = {};
    temp.say = function () {
        console.log("b模块的say方法被执行");
        require(["c"], function (instanceC) {
            instanceC.say();
        })
    };
    var g2 = window.g2 || {};
    g2.b = temp;
    window.g2 = g2;
    return temp;
});
console.log("b.js的define之后");