dollarbill.getVendorPropertyName = function ( prop ) {

    var prefixes = [ 'Moz', 'Webkit', 'O', 'ms' ],
        vendorProp, i,
        div = document.createElement( 'div' ),
        prop_ = prop.charAt( 0 ).toUpperCase() + prop.substr( 1 );

    if ( prop in div.style ) {
        return prop;
    }

    for ( i = 0; i < prefixes.length; ++i ) {

        vendorProp = prefixes[ i ] + prop_;

        if ( vendorProp in div.style ) {
            return vendorProp;
        }

    }
};

dollarbill.hideURLBar = function ( options ) {

    var win = window,
        doc = document,
        target = doc.body,
        minHeight = ( document.height > win.innerHeight ) ? document.height : win.innerHeight,
        scrollToValue = win.pageYOffset || doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop || doc.body.scrollTop || 0;

    if ( minHeight < 430 ) {
        minHeight = 430;
    }

    if ( minHeight > target.clientHeight ) {
        target.style.height = minHeight + "px";
    }

    window.addEventListener( "load", function () {
        // Set a timeout...
        setTimeout( function () {
            // Hide the address bar!
            window.scrollTo( 0, scrollToValue );
        }, 0 );
    } );

};

dollarbill.transitionend = {
    'animation': 'animationend',
    'webkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'animationend',
    'OAnimation': 'oAnimationEnd'
};

dollarbill.checkTransform3dSupport = function () {

    var div = document.createElement( 'div' ),
        transform = this.getVendorPropertyName( 'transform' );

    div.style[ transform ] = '';
    div.style[ transform ] = 'rotateY(90deg)';

    return div.style[ transform ] !== '';

};

dollarbill.buildVendorNames = function () {

    return {
        // Check for the browser's transitions support.
        transition: this.getVendorPropertyName( 'transition' ),
        transitionDelay: this.getVendorPropertyName( 'transitionDelay' ),
        transform: this.getVendorPropertyName( 'transform' ),
        transformOrigin: this.getVendorPropertyName( 'transformOrigin' ),
        transform3d: this.checkTransform3dSupport()

    };

};

dollarbill.s4 = function () {
    return Math.floor( ( 1 + Math.random() ) * 0x10000 )
        .toString( 16 )
        .substring( 1 );
};

dollarbill.guid = function () {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
        this.s4() + '-' + this.s4() + this.s4() + this.s4();
};

dbl.trim = function ( text ) {
    return text == null ? "" : text.trim( text );
};

dbl.isArray = function ( obj ) {
    return Object.prototype.toString.call( obj ) === "[object Array]";
};

dbl.isPlainObject = function ( obj ) {

    if ( typeof obj !== "object" || obj.nodeType || obj === obj.window ) {
        return false;
    }

    if ( obj.constructor &&
        !Object.prototype.hasOwnProperty.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
        return false;
    }

    // If the function hasn't returned already, we're confident that
    // |obj| is a plain object, created by {} or constructed with new Object
    return true;
};


//Object.assign

// dollarbill.extend = function () {

//     var options, name, src, copy, copyIsArray, clone,
//         target = arguments[0] || {},
//         i = 1,
//         length = arguments.length,
//         deep = false;

//     // Handle a deep copy situation
//     if (typeof target === "boolean") {
//         deep = target;

//         // Skip the boolean and the target
//         target = arguments[i] || {};
//         i++;
//     }

//     // Handle case when target is a string or something (possible in deep copy)
//     if (typeof target !== "object" && typeof target !== "function") {
//         target = {};
//     }

//     // Extend $ itself if only one argument is passed
//     if (i === length) {
//         target = this;
//         i--;
//     }

//     for (; i < length; i++) {
//         // Only deal with non-null/undefined values
//         if ((options = arguments[i]) != null) {
//             // Extend the base object
//             for (name in options) {
//                 src = target[name];
//                 copy = options[name];

//                 // Prevent never-ending loop
//                 if (target === copy) {
//                     continue;
//                 }

//                 // Recurse if we're merging plain objects or arrays
//                 if (deep && copy && (dollarbill.isPlainObject(copy) ||
//                             (copyIsArray = dollarbill.isArray(copy)))) {
//                     if (copyIsArray) {
//                         copyIsArray = false;
//                         clone = src && dollarbill.isArray(src) ? src : [];

//                     } else {
//                         clone = src && dollarbill.isPlainObject(src) ? src : {};
//                     }

//                     // Never move original objects, clone them
//                     target[name] = dollarbill.extend(deep, clone, copy);

//                     // Don't bring in undefined values
//                 } else if (copy !== undefined) {
//                     target[name] = copy;
//                 }
//             }
//         }
//     }

//     // Return the modified object
//     return target;

// };