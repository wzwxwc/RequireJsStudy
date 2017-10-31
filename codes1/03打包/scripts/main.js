/**
 * Created by zcRescuer on 2017/5/9.
 */
require.config({
    paths: {
        oneName: "./one",
        twoName: "./two",
        threeName: "./three"
    },
    shim: {
        oneName: {
            deps: ['css!../styles/a.css']
        }
    }
});

require(["oneName", "twoName", "threeName"], function (one, two, three) {
    alert(one + two + three)
});
