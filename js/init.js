RM = {
    Views: {
        Sections: {},
        Renderers: {}
    },
    Data:{},
    Models: {},
    Templates: {}
};

var templates = [];


/* Util function to load templates */

_.each(templates, function(template) 
{
    $.ajax(
    {
        url: 'templates/' + template + '.html',
        async: false,
        dataType: 'text',
        success: function(data) 
        {
            RM.Templates[template] = data;
        }
    });
});