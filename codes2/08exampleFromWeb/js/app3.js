requirejs.config ({
    baseUrl: 'js',
    paths: {
        "lib1": "lib"
    }
});

require(['lib1/hello'], function(hello) {
    hello.hello("RquireJS");
});
