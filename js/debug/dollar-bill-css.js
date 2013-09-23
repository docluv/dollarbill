(function (window, undefined) {

    "use strict";

    dollarbill.fn.addClass = function (view, cssClass) {

        if (!view || !cssClass) {
            return;
        }

        if (view.classList) {

            view.classList.add(cssClass);

        } else {

            view.className += " " + cssClass;

        }

    };

    dollarbill.fn.hasClass = function () { };

    dollarbill.fn.removeClass = function () { };

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