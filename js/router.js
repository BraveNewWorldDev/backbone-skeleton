
window.Router = Backbone.Router.extend({

    routes: {
        "": "home"
    },


    initialize: function (options) {
        this.model = options.model;
    },

    home: function ()
    {

    }
});