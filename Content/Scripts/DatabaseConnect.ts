(function (global) {

    class DatabaseConnect extends ActorComponent {

    }

    const MyDBConnect = require('uclass')()(global, DatabaseConnect);

    const _ = require('lodash');

    function main() {

        if(GWorld.IsServer()) {

            let alive = true;

            return function() {
                alive = false;
            }

        } else {
            return function() {}
        }

    }

    try {

        module.exports = () => {
            let cleanup = null;
            cleanup = main();
            return () => cleanup();
        }

    } catch (e) {
        require('bootstrap')('DatabaseConnect');
    }

})(this)
