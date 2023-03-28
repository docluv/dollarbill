/**
 * Set or get CSS property values for the first element in the dollarbill collection.
 * @param {(string|Object)} propertyName - The name of the CSS property to set or an object containing property-value pairs.
 * @param {string} [value] - The value to set for the CSS property.
 * @returns {dollarbill} - The dollarbill object for chaining.
 */
dollarbill.fn.css = function (propertyName, value) {

    if (this.length === 0) {
        return undefined;
    }

    var elem, i = 0,
        prop;

    for (var j = 0; j < this.length; j++) {

        elem = this[j];

        if (typeof propertyName === "string" && !value) {
            // Return CSS property
            return elem.style[propertyName];
        }

        if (typeof propertyName === "string" && value) {
            // Set CSS property
            elem.style[propertyName] = value;
        }

        if (typeof propertyName === "object") {
            // Set multiple CSS properties
            for (prop in propertyName) {
                elem.style[prop] = propertyName[prop];
            }
        }
    }

    return this;
};

/**
 * Set or get the height of the first element in the dollarbill collection.
 * @param {string} [val] - The height value to set.
 * @returns {dollarbill} - The dollarbill object for chaining.
 */
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

/**
 * Set or get the width of the first element in the dollarbill collection.
 * @param {string} [val] - The width value to set.
 * @returns {dollarbill} - The dollarbill object for chaining.
 */
dollarbill.fn.width = function (val) {

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

/**
 * Get the inner height of the first element in the dollarbill collection or the window height if the collection is empty.
 * @returns {number} - The inner height of the first element or window height.
 */
dollarbill.fn.innerHeight = function () {

    if (this.length === 0) {
        return window.innerHeight;
    }

    return this[0].innerHeight;

};

/**
 * Get the inner width of the first element in the dollarbill collection or the window width if the collection is empty.
 * @returns {number} - The inner width of the first element or window width.
 */
dollarbill.fn.innerWidth = function () {

    if (this.length === 0) {
        return window.innerWidth;
    }

    return this[0].offsetWidth;
};

/**
 * Get the offset of the first element in the dollarbill collection.
 * @returns {Object} - An object containing the offset top and left values of the element.
 */
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

/**
 * Returns the height of the element, including padding and border but not margin.
 * @function
 * @memberof dollarbill.fn
 * @name innerHeight
 * @returns {(number|undefined)} - The height of the element or undefined if the collection is empty.
 */
dollarbill.fn.innerHeight = function () {
    if (this.length === 0) {
        return undefined;
    }
    return this[0].clientHeight;
};

/**
 * Returns the width of the element, including padding and border but not margin.
 * @function
 * @memberof dollarbill.fn
 * @name innerWidth
 * @returns {(number|undefined)} - The width of the element or undefined if the collection is empty.
 */
dollarbill.fn.innerWidth = function () {
    if (this.length === 0) {
        return undefined;
    }
    return this[0].clientWidth;
};

/**
 * Returns the offset coordinates of the first element in the collection.
 * @function
 * @memberof dollarbill.fn
 * @name offset
 * @returns {(Object|undefined)} - An object with `top` and `left` properties representing the offset coordinates of the first element in the collection, or undefined if the collection is empty.
 */
dollarbill.fn.offset = function () {
    if (this.length === 0) {
        return undefined;
    }
    var box = this[0].getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
};

/**
 * Returns the outer height of the element, including padding, border, and margin.
 * @function
 * @memberof dollarbill.fn
 * @name outerHeight
 * @returns {(number|undefined)} - The outer height of the element or undefined if the collection is empty.
 */
dollarbill.fn.outerHeight = function () {
    if (this.length === 0) {
        return undefined;
    }
    return this[0].offsetHeight;
};

/**
 * Returns the outer width of the element, including padding, border, and margin.
 * @function
 * @memberof dollarbill.fn
 * @name outerWidth
 * @returns {(number|undefined)} - The outer width of the element or undefined if the collection is empty.
 */
dollarbill.fn.outerWidth = function () {
    if (this.length === 0) {
        return undefined;
    }
    return this[0].offsetWidth;
};

/**
 * Returns the position coordinates of the first element in the collection.
 * @function
 * @memberof dollarbill.fn
 * @name position
 * @returns {(Object|undefined)} - An object with `top`, `right`, `bottom`, and `left` properties representing the position coordinates of the first element in the collection, or undefined if the collection is empty.
 */
dollarbill.fn.position = function () {
    if (this.length === 0) {
        return undefined;
    }
    return this[0].getBoundingClientRect();
};
