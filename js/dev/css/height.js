dollarbill.fn.height = function(val) {

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