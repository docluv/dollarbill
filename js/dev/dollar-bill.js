/**
 * The dollarbill namespace.
 * @namespace dollarbill
 */

/**
 * Creates a new instance of the dollarbill object.
 *
 * @constructor
 * @param {string|Node|NodeList|Array.<Node>} selector - The selector for the elements to be selected.
 * @param {Node} [context=document] - The context within which to search for the selector.
 * @returns {dollarbill} A new instance of the dollarbill object.
 * @memberOf dollarbill
 */
let dbl = function (selector, context) {

    /** 
     * The dollarbill object constructor.
     * @constructs dollarbill
     * @namespace dollarbill.fn.init
     * @private
     */
    let db = new dbl.fn.init(selector, context),
        nodes, i;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if (!selector) {

        db.length = 0;
        return db;

    }

    if (typeof selector === "string") {

        if (context && context.nodeType) {
            nodes = context.querySelectorAll(selector);
        } else {
            nodes = document.querySelectorAll(selector);
        }

        db.length = nodes.length;
        db.selector = selector;

        for (i = 0; i < nodes.length; i++) {
            db[i] = nodes[i];
        }

    } else if (selector.nodeType) {

        //if(!selector.length){
        //    selector = [selector];
        //}

        db[0] = selector;
        db.length = (!selector.length) ? 1 : selector.length;
    }

    return db;

};


/**
 * The prototype for the dollarbill object.
 * @namespace dollarbill.fn
 */
dbl.fn = dbl.prototype = {

    /**
     * The constructor function for the dollarbill library.
     * @constructor
     */
    constructor: dbl,

    /**
     * The init function for the dollarbill library.
     * @returns {dbl.fn.init} The dollarbill library object.
     */
    init: function () {

        //this.length = 5;
        //this.selector = ".test";

        return this;
    },

    /**
     * The version number of the dollarbill library.
     * @type {string}
     */
    version: "0.0.6",

    /**
     * The length of the dollarbill library object.
     * @type {number}
     */
    length: 0,

    /**
     * The context of the dollarbill library object.
     * @type {undefined}
     */
    context: undefined,

    /**
     * The selector used to create the dollarbill library object.
     * @type {string}
     */
    selector: "",

    /**
     * A regular expression used to match white space characters in strings.
     * @type {RegExp}
     */
    rclass: /[\t\r\n]/g

};

/**
 * @section
 * A function that does nothing.
 *
 * @function
 * @memberof dbl
 * @name noop
 * @returns {void}
 */
dbl.noop = function () { };

/**
 * @section
 * The initialization function for the dollarbill library.
 *
 * @function
 * @name dbl.fn.init
 * @returns {dollarbill} The dollarbill library object.
 */
dbl.fn.init.prototype = dbl.fn;

/**
 * @section     
 * The `window` namespace containing global objects and functions.
 * @namespace window
 * @property {Object} dollarbill - The dollarbill object.
 * @property {Object} $ - The dollarbill object, with the `$` alias.
 */
window.dollarbill = window.$ = dbl;