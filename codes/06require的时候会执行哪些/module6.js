/**
 * Created by zcG460 on 2016/7/14.
 */
console.log("define外面——define前");
define([], function () {
    console.log("define内部——普通语句————这个很关键！在require的时候，就已经开始执行define的function参数的语句了");
    var cc = function () {
        console.log("define内部——内部函数——返回的function内");
    }
    var dd = function () {
        console.log("define内部——内部函数——非返回")
    }
    var test = function () {
        console.log("我就想看看在module内部的自执行函数中的this");
        console.log(this);
    };
    test();

    //立即执行函数1————ok
    (function () {
        console.log("我就想看看在module内部的自执行函数中的this");
        console.log(this);
    }());
    //立即执行函数2————ok
    (function () {
        console.log("我就想看看在module内部的自执行函数中的this");
        console.log(this);
    })();
    return cc;
});
console.log("define外面——define后");

/*
 require对应的“依赖参数”返回的不是define中的function参数
 而是这个function参数执行后，返回的值！
 * */