
dollarbill.fn.css = function (propertyName, value) {

    //have to assume the 1st item in the collection
    if (this.length === 0) {
        return undefined;
    }

    var elem = this[0],
        i = 0,
        prop;

    if (typeof propertyName === "string" && !value) {
        //return CSS property

        return elem.style[propertyName];
    }

    if (typeof propertyName === "string" && value) {
        //set CSS property
        elem.style[propertyName] = value;

        return this;
    }

    if (typeof propertyName === "object") {

        for (prop in propertyName) {
            elem.style[prop] = propertyName[prop];
        }

    }

    return this;
};

dollarbill.fn.height = function (val) {

    if (!val) {

        if (this.length === 0) {
            return window.style.height;
        }

        return this[0].style.height;
    }

    if (this.length > 0) {
        this[0].style.height = val;
    }

    return this;

};

//can probably refactor to call the css method
dollarbill.fn.width = function (val) {

    if (!val) {

        if (this.length === 0) {
            return window.style.width;
        }

        return this[0].style.width;
    }

    if (this.length > 0) {
        this[0].style.width = val;
    }

    return this;

};

dollarbill.fn.innerHeight = function () {

    if (this.length === 0) {
        return window.innerHeight;
    }

    if(this[0].innerHeight){
        return this[0].innerHeight;
    }else{
        return undefined;
    }

};

dollarbill.fn.innerWidth = function () {

    if (this.length === 0) {
        return window.innerWidth;
    }

    if(this[0].innerWidth){
        return this[0].innerWidth;    
    }else{
        return undefined;
    }
    
};

dollarbill.fn.offset = function () {

    if (this.length === 0) {
        return;
    }

    var box = this[0].getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };

};

dollarbill.fn.outerHeight = function () {

    if (this.length === 0) {
        return window.outerHeight;
    }

    return this[0].outerHeight;

};

dollarbill.fn.outerWidth = function () {

    if (this.length === 0) {
        return window.outerWidth;
    }

    return this[0].outerWidth;

};

dollarbill.fn.position = function () {

    if (!this[0]) {
        return;
    }
    
    return this[0].getBoundingClientRect();

};
