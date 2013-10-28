//dollar bill is a simple, custom helper library with a collection of
//utility methods based on jQuery's example.
;


(function (window, undefined) {

    "use strict";

    var dollarbill = function (selector, context) {

        var db =  new dollarbill.fn.init(selector, context),
            proto = (db.__proto__) ? "__proto__" : "prototype",
            nodes, i;

        // HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			
            db[proto].length = 0;
            return db;

		}

        if ( typeof selector === "string" ) {

            if(context && context.nodeType){
                nodes = context.querySelectorAll(selector);    
            }else{
                nodes = document.querySelectorAll(selector);
            }

            db[proto].length = nodes.length;
            db[proto].selector = selector;

            for(i = 0; i < nodes.length; i++){
                db[i] = nodes[i];
            }

        }else if ( selector.nodeType ) {

            //if(!selector.length){
            //    selector = [selector];
            //}

            db[0] = selector;
            db[proto].length = (!selector.length) ? 1 : selector.length;
        }

        return db;

    };

    dollarbill.fn = dollarbill.prototype = {

        constructor: dollarbill,

        init: function () {

            //this.length = 5;
            //this.selector = ".test";

            return this;            
        },

        version: "0.0.1",

        length: 0,
        context: undefined,
        selector: "",
        rclass : /[\t\r\n]/g,

        trim: function( text ) {
	    	return text == null ? "" : text.trim( text );
    	},

        isArray: function( obj ) {
		    return Object.prototype.toString.call(obj) === "[object Array]";
	    },

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

        each: function(obj, callback){
            
            if(callback === undefined){
                callback = obj;
                obj = this;
            }

            if(!this.isArray(obj)){
                return;
            }

            var value,
                i = 0,
                length = obj.length;

            for(; i < length; i++){
                
            }

        },

        map: function(elems, callback){

		    var value,
			    i = 0,
			    length = elems.length,
			    isArray = this.isArray( elems ),
			    ret = [];

		    // Go through the array, translating each of the items to their
		    if ( isArray ) {
			    for ( ; i < length; i++ ) {
				    value = callback( elems[ i ], i, arg );

				    if ( value != null ) {
					    ret[ ret.length ] = value;
				    }
			    }

		    // Go through every key on the object,
		    } else {
			    for ( i in elems ) {
				    value = callback( elems[ i ], i, arg );

				    if ( value != null ) {
					    ret[ ret.length ] = value;
				    }
			    }
		    }

            return ret;

        },

        grep: function(elems, callback, inv){
            
            var retVal,
			    ret = [],
			    i = 0,
			    length = elems.length;

		    inv = !!inv;

		    // Go through the array, only saving the items
		    // that pass the validator function
		    for ( ; i < length; i++ ) {
			    retVal = !!callback( elems[ i ], i );
			    if ( inv !== retVal ) {
				    ret.push( elems[ i ] );
			    }
		    }

    		return ret;
        },

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
