rejs.config({
    baseUrl: 'js',

    paths: {
    },

    shim: {
    }
});

require(['app'],

function(App) {
    window.tasks = new App();
});e
