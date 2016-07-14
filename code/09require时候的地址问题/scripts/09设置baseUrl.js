/**
 * Created by zcG460 on 2016/7/14.
 */
require.config({
    baseUrl: "../../",
    paths: {
        mod: './modules/module9'
    }
});

require(["mod"], function () {
    console.log("进入了require的function参数内部");
})
