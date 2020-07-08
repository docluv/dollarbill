//dollar bill is a simple, custom helper library with a collection of
//utility methods based on jQuery's example.
;

( function ( window, undefined ) {

    "use strict";

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

window.dollarbill = window.$ = dbl;

dollarbill.fn.removeClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < this.length; i++) {

        var classes = cssClass.split(" ");

        for (var j = 0; j < classes.length; j++) {
            if (classes[j] !== "") {
                this[i].classList.remove(classes[j]);
            }
        }

    }

    return this;

};

dollarbill.fn.addClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < this.length; i++) {
        var classes = cssClass.split(" ");

        for (var j = 0; j < classes.length; j++) {
            if (classes[j] !== "") {
                this[i].classList.add(classes[j]);
            }
        }
    }

    return this;

};

dollarbill.fn.hasClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return this;
    }

    return this[0].classList.contains(cssClass);

};

dollarbill.fn.toggleClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < this.length; i++) {

        this[i].classList.toggle(cssClass);
    }

    return this;

};

//https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
if ( !window.CustomEvent ) {

    function CustomEvent( event, params ) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    };

    CustomEvent.prototype = window.CustomEvent.prototype;

    window.CustomEvent = CustomEvent;

}


dollarbill.fn.on = function ( evt, fn, bubble ) {

    bubble = ( bubble === true ) ? true : false;

    for ( var i = 0; i < this.length; i++ ) {
        this[ i ].addEventListener( evt, fn, bubble );
    }

};

dollarbill.fn.off = function ( evt, fn, bubble ) {

    for ( var i = 0; i < this.length; i++ ) {
        this[ i ].removeEventListener( evt, fn, bubble );
    }

};

dollarbill.fn.trigger = function ( eventType, extraParameters ) {

    if ( !eventType ) {
        return this;
    }

    var i = 0,
        event = new CustomEvent( eventType, extraParameters );

    for ( ; i < this.length; i++ ) {
        elem.dispatchEvent( event );
    }

};
dollarbill.fn.attr = function ( name, value ) {

    if ( !name ) {
        return this;
    }

    if ( !value ) {
        return this[ 0 ].getAttribute( name );
    }

    for ( var i = 0; i < this.length; i++ ) {
        this[ i ].setAttribute( name, value );
    }

    return this;

};

dollarbill.fn.html = function ( value ) {

    if ( !this[ 0 ] ) {
        return this;
    }

    var i = 0;

    if ( value === undefined ) {
        return this[ 0 ].innerHTML;
    }

    for ( ; i < this.length; i++ ) {
        this[ i ].innerHTML = value;
    }

    return this;

};

dollarbill.fn.text = function ( value ) {

    if ( !this[ 0 ] ) {
        return this;
    }

    var i = 0;

    if ( value === undefined ) {
        return this[ 0 ].innerText;
    }

    for ( ; i < this.length; i++ ) {
        this[ i ].innerText = value;
    }

    return this;

};

dollarbill.fn.value = function ( value ) {

    if ( !this[ 0 ] ) {
        return this;
    }

    var i = 0;

    if ( value === undefined ) {
        return this[ 0 ].value;
    }

    for ( ; i < this.length; i++ ) {
        this[ i ].value = value;
    }

    return this;

};

dollarbill.fn.removeAttr = function ( name ) {

    if ( !this[ 0 ] ) {
        return this;
    }

    var i = 0;

    for ( ; i < this.length; i++ ) {
        this[ i ].removeAttribute( name );
    }

    return this;
};

dollarbill.fn.data = function ( name, val ) {

    //TODO: modify this to allow an object of name - values to be passed & set

    var elem = this[ i ];

    if ( !val ) {

        return ( elem.hasAttribute( "data-" + name ) ?
            elem.getAttribute( "data-" + name ) : "" );

    } else {
        elem.setAttribute( "data-" + name, val );
        return;
    }

};


}( window ) );