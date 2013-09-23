//dollar bill is a simple, custom helper library with a collection of
//utility methods based on jQuery's example.
;


(function (window, undefined) {

    "use strict";

    var dollarbill = function (selector) {

        return new dollarbill.fn.init(customSettings);
    };

    dollarbill.fn = dollarbill.prototype = {

        constructor: dollarbill,

        init: function (selector) {


            return this;
        },

        version: "0.0.1",

        extend : function () {

            var target = arguments[0] || {},
                i = 1,
                name,
                copy,
                options,
                length = arguments.length;

            for (i = 1; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) !== null) {
                    // Extend the base object
                    for (name in options) {
                        src = target[name];
                        copy = options[name];

                        // Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }

                        if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            return target;

        },

        merge: function(first, second){},

        each: function(items, callback){},

        map: function(items, callback){},

        grep: function(items, callback, invert){},

        noop: function(){},
        
        loadScript : function (id, url, callback) {

            if (!document.getElementById(id)) {

                var script = document.createElement("script");

                script.type = "text/javascript";
                script.id = id;

                if (script.readyState) {  //IE

                    script.onreadystatechange = function () {

                        if (script.readyState === "loaded" ||

                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            callback();

                        }

                    };

                } else {  //Others
                    script.onload = function () {
                        callback();
                    };
                }

                script.src = url;
                document.body.appendChild(script);

            } else {
                callback();
            }
        }

    };

    // Give the init function the dollarbill prototype for later instantiation
    dollarbill.fn.init.prototype = dollarbill.fn;

    return (window.dollarbill = window.$ = dollarbill);

}(window));
