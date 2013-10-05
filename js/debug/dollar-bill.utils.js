
    dollarbill.fn.getVendorPropertyName = function (prop) {

        var prefixes = ['Moz', 'Webkit', 'O', 'ms'],
                vendorProp, i,
                prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

        if (prop in this.div.style) {
            return prop;
        }

        for (i = 0; i < prefixes.length; ++i) {

            vendorProp = prefixes[i] + prop_;

            if (vendorProp in this.div.style) {
                return vendorProp;
            }

        }
    };

    dollarbill.fn.hideURLBar = function (options) {

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

    dollarbill.fn.checkTransform3dSupport = function () {

        var div = document.createElement('div'),
            transform = this.getVendorPropertyName('transform');

        div.style[transform] = '';
        div.style[transform] = 'rotateY(90deg)';

        return div.style[transform] !== '';

    };

    dollarbill.fn.buildVendorNames = function () {

        return {
            // Check for the browser's transitions support.
            transition: this.getVendorPropertyName('transition'),
            transitionDelay: this.getVendorPropertyName('transitionDelay'),
            transform: this.getVendorPropertyName('transform'),
            transformOrigin: this.getVendorPropertyName('transformOrigin'),
            transform3d: this.checkTransform3dSupport()

        };

    };

    dollarbill.fn.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
    };

    dollarbill.fn.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
           this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };

