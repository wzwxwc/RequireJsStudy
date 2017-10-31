/**
 * Created by zc on 2017/6/29.
 */
console.log("require之前被执行");
require(['./module6'], function (module6) {
    console.log("————————上述信息是require的时候，自动执行的——————————")
    console.log("module6的值是：" + module6);
    console.log("执行module6()");
    //这个时候，module6即可以被看做一个函数，也可以被看做成类？
    // module6();
    console.log("执行new module6()");
    // var module6Object = new module6();
    // console.log("new module6的返回值：" + module6Object);
});