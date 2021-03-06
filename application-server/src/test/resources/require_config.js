require.config({
    baseUrl: '/test/src/main/webapp/js',
    paths: {
        // alias versioned dependencies to simplify updating as new versions are released
        jquery: '3rdparty/jquery-1.8.0',
        underscore: '3rdparty/underscore-1.3.3',
        backbone: '3rdparty/backbone-0.9.10',
        text: '3rdparty/requirejs/text-2.0.1',
        modernizr: '3rdparty/modernizr-2.6.1.js',
        // match handlebars requirejs plugin to avoid having to edit the contents of handlebars plugin when updating it to a new version
        Handlebars: '3rdparty/handlebars/handlebars-1.0.beta.6',
        // match handlebars requirejs plugin to avoid having to edit the contents of handlebars plugin when updating it to a new version
        hbs: '3rdparty/handlebars/handlebars-plugin-0.2.1',
        json2: '3rdparty/json2',
        'handlebars-i18nprecompile': '3rdparty/handlebars/handlebars-i18nprecompile'
    }

});