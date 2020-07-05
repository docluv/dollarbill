var dbl = function ( selector, context ) {

    var db = new dbl.fn.init( selector, context ),
        nodes, i;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {

        db.length = 0;
        return db;

    }

    if ( typeof selector === "string" ) {

        if ( context && context.nodeType ) {
            nodes = context.querySelectorAll( selector );
        } else {
            nodes = document.querySelectorAll( selector );
        }

        db.length = nodes.length;
        db.selector = selector;

        for ( i = 0; i < nodes.length; i++ ) {
            db[ i ] = nodes[ i ];
        }

    } else if ( selector.nodeType ) {

        //if(!selector.length){
        //    selector = [selector];
        //}

        db[ 0 ] = selector;
        db.length = ( !selector.length ) ? 1 : selector.length;
    }

    return db;

};

dbl.fn = dbl.prototype = {

    constructor: dbl,

    init: function () {

        //this.length = 5;
        //this.selector = ".test";

        return this;
    },

    version: "0.0.6",

    length: 0,
    context: undefined,
    selector: "",
    rclass: /[\t\r\n]/g

};

dbl.noop = function () {};

// Give the init function the dbl prototype for later instantiation
dbl.fn.init.prototype = dbl.fn;

return ( window.dollarbill = window.$ = dbl );