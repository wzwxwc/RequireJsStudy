requirejs.config ({
    baseUrl: './',
    paths: {
        "hello1": "js/lib/hello"
    }
});

require(['hello1'], function(hello) {
    hello.hello("RquireJS");
});