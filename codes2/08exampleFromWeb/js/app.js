// requirejs.config ({
//     baseUrl: 'js/lib'
// });

require(['js/lib/hello.js'], function(hello) {
    hello.hello("RquireJS");
});