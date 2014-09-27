//can probably refactor to call the css method
dollarbill.fn.width = function(val) {

    if (!val) {

        if (this.length === 0) {
            return window.style.clientWidth;
        }

        return this[0].style.clientWidth;
    }

    if (this.length > 0) {
        this[0].style.clientWidth = val;
    }

    return this;

};