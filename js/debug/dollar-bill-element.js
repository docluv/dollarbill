
    dollarbill.fn.attr = function () { };

    dollarbill.fn.html = function () { };

    dollarbill.fn.removeAttr = function () { };

    dollarbill.fn.attr = function () { };

    dollarbill.fn.data = function (name, val) {

        //TODO: modify this to allow an object of name - values to be passed & set

        var elem = this[i];

        if (!val) {

            return (elem.hasAttribute("data-" + name) ?
                        elem.getAttribute("data-" + name) : "");

        } else {
            elem.setAttribute("data-" + name, val);
            return;
        }

    };
