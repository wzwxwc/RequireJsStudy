/**
 * Created by zcG460 on 2016/7/14.
 */
console.log("开始执行require函数");
//下面的相对路径的地址，不是以当前这个js文件本身为基础
//而是以require.config()中的baseUrl
//或者引用requirejs的那个HTML的位置为baseUrl
require(["./modules/module9.js"], function () {
    console.log("require模块的内部。")
})
