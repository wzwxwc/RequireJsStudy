/**
 * Created by zcRescuer on 2017/5/4.
 */
require.config({
    paths: {
        type1: "./wrokTypes/type1",
        type2: "./wrokTypes/type2",
        type3: "./wrokTypes/type3"
    },
    waitSeconds: 4
});
require(["type1", "type2", "type3"], function (type1, type2, type3) {
    window.type1 = type1;
    window.type1Instanc = new type1();
    window.type2 = type2;
    //静态类
    window.type3 = type3;
    console.log("网页加载完成！");
});