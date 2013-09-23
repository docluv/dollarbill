
(function (window, undefined) {

    "use strict";

    dollarbill.fn.parseLocalStorage = function (key) {

        var value = localStorage.getItem(key);

        if (!value) {
            return {};
        }

        return JSON.parse(value) || {};

    };


} (window));