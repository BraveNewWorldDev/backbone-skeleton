/*
    Application Bootstrap after all dependencies are loaded.

 */

$(function() {

    // declare the global app model
    appModel = new RM.Models.App();

    // create the main application router
    app = new Router({model:appModel});

    // start history
    Backbone.history.start({pushState: false});

});
