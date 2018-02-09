/**
 * 时间：2018/2/9
 * 作者：张超
 * 功能：
 */
console.log("a.js的define之前");
test();
console.log("a.js的define之后");


function test() {
    define([], function () {
        console.log("a.js的deine内部");
        var temp = {};
        temp.say = function () {
            console.log("a模块的say方法被执行");
        };
        require(["b"], function (instanceB) {
            instanceB.say();
        });
        // var g2 = g2 || {};
        //上述因为var声明，变量提升的原因，此时等号右边的g2为undefined
        var g2 = window.g2 || {};
        g2.a = temp;
        window.g2 = g2;
        return temp;
    });
}