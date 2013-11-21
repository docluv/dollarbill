
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

    for (var i = 0; i < len; i++) {
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

    this[0].classList.contains(cssClass);

};

dollarbill.fn.toggleClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < len; i++) {

        this[i].classList.toggle(cssClass);
    }

    return this;

};
