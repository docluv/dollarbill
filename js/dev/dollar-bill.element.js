
/**
 * @section
 * Sets or gets the type attribute of the first element in the current collection.
 * 
 * @memberOf dollarbill
* @function
 * @param {string} [value] - The value to set as the type attribute.
 * @returns {(string|dollarbill)} - If a value is provided, returns the dollarbill object for chaining; 
 * otherwise, returns the type attribute of the first element in the collection. If the collection is empty, returns undefined.
 */
dollarbill.fn.type = function (value) {

    if (value !== undefined) {
        for (let i = 0; i < this.length; i++) {
            this[i].type = value;
        }
    } else {
        if (this[0]) {
            return this[0].type;
        }
    }

};

/**
 * @section
 * Sets or gets the value of an attribute on the first element of the collection or sets the value for all elements in the collection.
 * @memberOf dollarbill
* @function
 * @param {string} name - The name of the attribute to set or get.
 * @param {string} [value] - The value to set for the attribute.
 * @returns {(string|undefined|dollarbill)} - If the value parameter is provided, returns the dollarbill object with the attribute set to the provided value for all elements in the collection. If the value parameter is not provided, returns the value of the attribute for the first element in the collection. If the collection is empty, undefined is returned.
 */
dollarbill.fn.attr = function (name, value) {

    if (value) {

        for (let i = 0; i < this.length; i++) {
            this[i].setAttribute(name, value);
        }

    } else {

        if (this[0]) {

            return this[0].getAttribute(name);

        }

    }

};

/**
 * @section
 * Sets or gets the HTML content of the selected element(s).
 * 
 * @memberOf dollarbill
 * @function
 * @param {string} value - The HTML content to set.
 * @returns {(string|object)} - The HTML content of the first selected element, or the dollarbill object.
 */
dollarbill.fn.html = function (value) {

    if (value !== undefined) {
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = value;
        }
    } else {
        return this[0].innerHTML;
    }

};

/**
 * @section
 * Inserts the given content before the first child of each element in the current selection.
 * 
 * @memberOf dollarbill
 * @function
 * @param {string} value - The content to insert before the first child element.
 * @returns {dollarbill} The current dollarbill object.
 */
dollarbill.fn.before = function (value) {

    if (value !== undefined) {

        for (let i = 0; i < this.length; i++) {

            this[i].insertAdjacentHTML("afterbegin", value);
        }

    } else {
        return this;
    }

};

/**
 * @section
 * Inserts content after each element in the current set of matched elements.
 *
 * @memberOf dollarbill
 * @function
 * @memberOf dollarbill.fn
 * @param {string} value - The HTML string, DOM element(s), or dollarbill object(s) to insert after the matched elements.
 * @returns {dollarbill} - The dollarbill object for method chaining.
 */
dollarbill.fn.after = function (value) {

    if (value !== undefined) {

        for (let i = 0; i < this.length; i++) {

            this[i].insertAdjacentHTML("afterend", value);

        }

        return this;

    } else {

        return this;

    }

};

/**
 * @section
 * Sets or gets the innerText content of the first element in the selected elements.
 * 
 * @memberOf dollarbill
 * @param {string} value - The text content to set.
 * @returns {(string|dollarbill)} - If the value parameter is not provided, returns the innerText content of the first element, otherwise returns the dollarbill object.
 */
dollarbill.fn.text = function (value) {

    if (value) {
        for (let i = 0; i < this.length; i++) {
            this[i].innerText = value;
        }
    } else {
        return this[0].innerText;
    }

};

/**
 * @section
* Set or get the value property of the first element in the dollarbill collection.
* @function
* @memberof dollarbill.fn
* @param {string} [value] - The value to set for the element.
* @returns {string|undefined|dollarbill} - If a value is provided, the function sets the value of the property for all elements in the collection and returns the dollarbill object. If no value is provided, the function returns the value of the property for the first element in the collection. If the collection is empty, the function returns undefined.
*/
dollarbill.fn.value = function (value) {

    if (value) {
        for (let i = 0; i < this.length; i++) {
            this[i].value = value;
        }
    } else {
        if (this[0]) {
            return this[0].value;
        }
    }

};

/**
 * Removes the specified attribute from each element in the collection.
 *
 * @param {string} name - The name of the attribute to remove.
 * @returns {dollarbill} The dollarbill object for chaining.
 */
dollarbill.fn.removeAttr = function (name) {
    
    if (!this[0]) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }

    return this;
};


/**
 * Set or get the value of a data attribute on the first element of the collection or set the value for all elements in the collection.
 *
 * @function
 * @memberof dollarbill.fn
 * @name data
 * @param {string} name - The name of the data attribute to set or get.
 * @param {string} [value] - The value to set for the data attribute.
 * @returns {string|undefined|dollarbill} - If value is provided, returns the instance of the dollarbill object with the data attribute set to the provided value for all elements in the collection. If value is not provided, it returns the value of the data attribute for the first element in the collection. If the collection is empty, undefined is returned.
 */
dollarbill.fn.data = function (name, value) {

    // TODO: Modify this to allow an object of name - values to be passed and set.

    if (value === undefined) {
        // Get the value of the data attribute.
        if (this.length > 0) {
            const elem = this[0];
            return elem.hasAttribute(`data-${name}`) ? elem.getAttribute(`data-${name}`) : '';
        }
        return undefined;
    }

    // Set the value of the data attribute for all elements in the collection.
    for (let i = 0; i < this.length; i++) {
        const elem = this[i];
        elem.setAttribute(`data-${name}`, value);
    }

    return this;
};
