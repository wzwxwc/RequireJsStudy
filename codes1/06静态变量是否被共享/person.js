/**
 * Created by zc on 2017/7/18.
 */
define([], function () {
    //这里定义的是“静态的”、“私有”变量
    //这里主要是“闭包”的概念
    var type = "people";

    function walk() {
        console.log("开始行走");
    }

    var temp = function (name, age) {
        this.self = this;
        this.name = name;
        this.age = age
        //下述2个这样写，可以解决delete之后，继续使用静态变量的值？错误
        //下述语句只是一个简答的赋值操作，不具备在delete之后，重新赋值的功能！
        //更加像继承
        this.type = this.type ? this.type : type;
        var _walk;
        Object.defineProperty(this, walk, {
            get: function () {
                return _walk ? _walk : walk;
            },
            set: function (value) {
                _walk = value;
            }
        });
        this.text = "test";
        var _num = 123;
        this.num = _num;
        this.love = function () {
            console.log("开始献爱心");
        }
    };
    temp.prototype.hi = function () {
        console.log("你好");
    };
    return temp;
});