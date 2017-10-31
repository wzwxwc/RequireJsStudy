/**
 * Created by zcRescuer on 2016/8/1.
 */
define([], function () {
    //加载模块，就是执行这里面的所有内容！
    //所以必须有return，来生成一个依赖对应的模块！
    console.log("加载模块的时候，就执行这个了！")
    function f1() {
        console.log("这是位置1")
    }

    var temp = function (argsUser) {
        //new模块的时候，就是执行这里面的所有语句！
        var p1 = 5;
        var test = function () {
            console.log("test方法被调用")
        };

        function f2() {
            console.log("这是位置2")
            console.log("可以直接拿到构造参数：" + argsUser);
            console.log("可以直接拿到内部的局部变量：" + p1);
            console.log("可以直接调用内部方法：" + test())
        }

        f2();
        f1();
    }

    //使用prototype的方式，替代了this的方式来暴露“属性”和“方法”
    temp.prototype.f3 = function () {
        //我很好奇，在这里面如何拿到东西？
        //拿到的只是this，数据的话，必须绑定到this才可以拿到！
        // 既然绑定到了this，就已经可以使用了啊
        //难道是说属性通过this.点的方式来绑定
        //方法通过prototype的方式来绑定？
        console.log("这是位置3");
    }
    return temp;

})
