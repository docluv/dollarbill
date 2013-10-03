(function (window, undefined) {

    "use strict";

    dollarbill.fn.addClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        var elem, i = 0, len = this.length;

        for (; i < len; i++) {
            elem = this[i];

            elem.className += " " + cssClass;
        }

    };

    dollarbill.fn.hasClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        var className = " " + cssClass + " ",
			elem, i = 0, len = this.length;

        for (; i < len; i++) {
            elem = this[i];

            if (elem.nodeType === 1 &&
                (" " + elem.className + " ")
                    .replace(this.rclass, " ").indexOf(className) >= 0) {
                return true;
            }
        }

        return false;

    };

    dollarbill.fn.removeClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        var className = " " + cssClass + " ",
			elem, i = 0, len = this.length;

        for (; i < len; i++) {
            elem = this[i];

            if (elem.nodeType === 1 &&
                (" " + elem.className + " ").replace(this.rclass, " ")) {

            }
        }


    };

    dollarbill.fn.toggleClass = function () { };

    dollarbill.fn.css = function () { };

    dollarbill.fn.height = function () { };

    dollarbill.fn.width = function () { };

    dollarbill.fn.innerHeight = function () { };

    dollarbill.fn.innerWidth = function () { };

    dollarbill.fn.offset = function () { };

    dollarbill.fn.outerHeight = function () { };

    dollarbill.fn.outerWidth = function () { };

    dollarbill.fn.position = function () { };

} (window));