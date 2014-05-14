
    dollarbill.getVendorPropertyName = function (prop) {

        var prefixes = ['Moz', 'Webkit', 'O', 'ms'],
                vendorProp, i,
                div = document.createElement('div'),
                prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

        if (prop in div.style) {
            return prop;
        }

        for (i = 0; i < prefixes.length; ++i) {

            vendorProp = prefixes[i] + prop_;

            if (vendorProp in div.style) {
                return vendorProp;
            }

        }
    };

    dollarbill.hideURLBar = function (options) {

        var win = window,
            doc = document,
            target = doc.body,
            minHeight = (document.height > win.innerHeight) ? document.height : win.innerHeight,
            scrollToValue = win.pageYOffset || doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop || doc.body.scrollTop || 0;

        if (minHeight < 430) {
            minHeight = 430;
        }

        if (minHeight > target.clientHeight) {
            target.style.height = minHeight + "px";
        }

        window.addEventListener("load", function () {
            // Set a timeout...
            setTimeout(function () {
                // Hide the address bar!
                window.scrollTo(0, scrollToValue);
            }, 0);
        });

    };

    dollarbill.transitionend = {
        'animation': 'animationend',
        'webkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'animationend',
        'OAnimation': 'oAnimationEnd'
    };

    dollarbill.checkTransform3dSupport = function () {

        var div = document.createElement('div'),
            transform = this.getVendorPropertyName('transform');

        div.style[transform] = '';
        div.style[transform] = 'rotateY(90deg)';

        return div.style[transform] !== '';

    };

    dollarbill.buildVendorNames = function () {

        return {
            // Check for the browser's transitions support.
            transition: this.getVendorPropertyName('transition'),
            transitionDelay: this.getVendorPropertyName('transitionDelay'),
            transform: this.getVendorPropertyName('transform'),
            transformOrigin: this.getVendorPropertyName('transformOrigin'),
            transform3d: this.checkTransform3dSupport()

        };

    };

    dollarbill.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
    };

    dollarbill.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
           this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };

    
    dollarbill.extend = function () {

            var target = arguments[0] || {},
                i = 1,
                name,
                copy,
                options,
                src,
                length = arguments.length;

            for (i = 1; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) !== null) {
                    // Extend the base object
                    for (name in options) {
                      //  src = target[name];
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

        };



