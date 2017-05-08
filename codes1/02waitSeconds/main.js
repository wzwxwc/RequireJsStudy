/**
 * Created by zcRescuer on 2017/5/5.
 */
require.config({
    paths: {
        a: "./a延迟setTimeout",
        b: "b延迟while"
    },
    waitSeconds: 3
});
require(["a", "b", "http://localhost:8080/zcWeb/Hello"], function () {
    console.log("完成加载");
});