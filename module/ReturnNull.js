/**
 * Created by zc on 2016/7/13.
 */
console.log("define之前的语句也会被执行！");
define([], function () {
    //在这里，没有return任何东西
    //如果在require中引用这个对象，参数是否是undefined？？
    //回答：是的
    //而且下述语句也被执行了
    console.log("执行ReturnNull模块内部的语句")
})
