/**
 * Created by zcRescuer on 2016/7/30.
 */
require.config({
    paths: {
        text: "../../deps/plugin_requirejs/text"
    }
});
require(["text!template.html!strip", "text!test.css"], function (template, css) {
    //使用text!插件机制引进来的文本文件，必须自己手动放到html中！
    //要不然不会起作用

    //怎么把css文件加载到html中？下述方式不太好！
    document.getElementsByTagName("style")[0].innerHTML = css;

    var div = document.createElement("div");
    div.innerHTML = template;
    document.body.appendChild(div);
});

/*
 requirejs的插件机制
 就是 “标识符!文件路径” 的形式
 其中遇到！叹号前的标识符，就会从paths中寻找对应的js文件！
 * */