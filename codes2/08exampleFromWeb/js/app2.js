requirejs.config ({
    baseUrl: 'js/lib'
});

require(['hello'], function(hello) {
    hello.hello("RquireJS");
});