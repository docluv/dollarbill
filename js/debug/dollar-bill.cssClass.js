
dollarbill.fn.removeClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < this.length; i++) {

        this[i].classList.remove(cssClass);

    }

    return this;

};

dollarbill.fn.addClass = function (cssClass) {

    var isArray = Object.prototype.toString.call(cssClass) !== "[object Array]";

    if (!cssClass || typeof cssClass !== "string" || !isArray) {
        return;
    }

    for (var i = 0; i < this.length; i++) {

        if(isArray){
            for(var j = 0; j < cssClass.length; j++){
                this[i].classList.add(cssClass[j]);
            }
        }else{
            this[i].classList.add(cssClass);
        }

    }

    return this;

};

dollarbill.fn.hasClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return this;
    }

    return this[0].classList.contains(cssClass);

};

dollarbill.fn.toggleClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < this.length; i++) {

        this[i].classList.toggle(cssClass);
    }

    return this;

};
