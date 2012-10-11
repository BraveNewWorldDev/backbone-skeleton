/*

    Sample underscore _ mixin

    these are fast one line functions that can be used throughout the application

    */


// Capitalize the first character
// usage : _(string).capitalize();

_.mixin({
    capitalize : function(string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    },
    centerdiv: function(div) {

    }
});

