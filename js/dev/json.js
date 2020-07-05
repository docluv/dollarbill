dollarbill.fn.parse = function ( src ) {

    if ( typeof src === "string" ) {
        return JSON.parse( src );
    }

    return src;

};

dollarbill.fn.stringify = function ( src ) {

    if ( typeof src !== "string" ) {
        return JSON.stringify( src );
    }

    return src;

};