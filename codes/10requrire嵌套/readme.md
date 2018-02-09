1、验证require()函数嵌套执行是否可行
A：是可行的
Q：为什么我之前好像记得无法实现requirejs嵌套呢？
2、验证require和define函数是否可以嵌套？
A：是可行的

2、验证define和require这2个函数是否都是异步函数？
所谓异步函数，就是你的函数还没有被执行完毕，
就去执行下一句js语句了
A：证明了require函数是异步函数
    证明了define函数也是异步函数

3、如果define或require里的deps不写或为空，是否还是异步执行
A：还是异步执行！

4、define中嵌套require是可行的
但是，define所对应的这个模块，被人使用后，无法确保里面的
require的模块已经被加载，而且一般经常不被加载！