(function (global) {
    "use strict"

    module.exports = function(filename) {

        Context.RunFile('aliases.js');

        require('devrequire')(filename);

    }

})(this)