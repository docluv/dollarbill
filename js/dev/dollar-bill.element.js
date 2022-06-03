dollarbill.fn.type = function (value) {

    if (value !== undefined) {
        for (var i = 0; i < this.length; i++) {
            this[i].type = value;
        }
    } else {
        if (this[0]) {
            return this[0].type;
        }
    }

};

dollarbill.fn.attr = function (name, value) {

    if (value) {

        for (var i = 0; i < this.length; i++) {
            this[i].setAttribute(name, value);
        }

    } else {

        if (this[0]) {

            return this[0].getAttribute(name);

        }

    }

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