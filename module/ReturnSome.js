/**
 * Created by zc on 2016/7/13.
 */
define([], function () {
    var something = function () {
        this.say = function () {
            console.log("hello zc");
        }
    };
    //如果要在require的时候有对应的参数，就应该返回一个function对象！
    //记住一句话：能new的都是function
    return something;
})
