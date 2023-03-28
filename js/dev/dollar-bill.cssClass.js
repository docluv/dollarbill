/**
 * @section
 * Removes the specified class(es) from the DOM element(s) in the collection.
 * @function
 * @memberof dollarbill.fn
 * @name removeClass
 * @param {string} cssClass - The class(es) to remove, separated by spaces.
 * @returns {dollarbill} - The dollarbill object for chaining.
 */
dollarbill.fn.removeClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (let i = 0; i < this.length; i++) {

        let classes = cssClass.split(" ");

        for (let j = 0; j < classes.length; j++) {
            if (classes[j] !== "") {
                this[i].classList.remove(classes[j]);
            }
        }

    }

    return this;

};

/**
 * @section
 * Adds the specified CSS class(es) to the DOM element(s) in the collection.
 * @memberOf dollarbill
 * @function
 * @param {string} cssClass - The class(es) to add, separated by spaces.
 * @returns {Object} - The dollarbill object for chaining.
 */
dollarbill.fn.addClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (let i = 0; i < this.length; i++) {
        let classes = cssClass.split(" ");

        for (let j = 0; j < classes.length; j++) {

            if (classes[j] !== "") {
                this[i].classList.add(classes[j]);
            }

        }
    }

    return this;

};

/**
 * @section
 * Checks if an element has a CSS class.
 *
 * @memberOf dollarbill
 * @function
 * @param {string} cssClass - The name of the CSS class to check for.
 * @returns {boolean} - True if the element has the CSS class, false otherwise.
 */
dollarbill.fn.hasClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return this;
    }

    return this[0].classList.contains(cssClass);

};


/**
 * @section
 * Toggles the specified class on the selected elements.
 *
 * @memberOf dollarbill
 * @function
 * @param {string} cssClass - The name of the CSS class to toggle.
 * @returns {Object} - The dollarbill object for chaining.
 */
dollarbill.fn.toggleClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (let i = 0; i < this.length; i++) {

        this[i].classList.toggle(cssClass);
    }

    return this;

};
