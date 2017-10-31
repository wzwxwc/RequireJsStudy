/**
 * Created by zc on 2017/7/18.
 */
require(["person"], function (Person) {
    var p1 = new Person("tom", 20);
    var p2 = new Person("jim", 19);
    console.log(p1.name === p2.name);
    console.log(p1.age === p2.age);
    console.log(p1.hi === p2.hi);
    console.log(p1.type === p2.type);
    console.log(p1.walk === p2.walk);
    //下面这2个怎么可以返回true呢？
    console.log(p1.text === p2.text);
    console.log(p1.num === p2.num);
    console.log(p1.love === p2.love);
    console.log();
})