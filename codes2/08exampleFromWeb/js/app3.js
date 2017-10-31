requirejs.config ({
    baseUrl: 'js',
    paths: {
        "hello": "lib/hello"
    }
});

require(['hello'], function(hello) {
    hello.hello("RquireJS");
});
