
/**
 * @section
 * Attaches an event listener to the selected element(s).
 * @memberOf dollarbill
 * @function
 * @param {string|string[]} evt - The event name(s) to listen for.
 * @param {function} fn - The function to execute when the event is triggered.
 * @param {boolean} [bubble=false] - Indicates whether the event should propagate up through the DOM or not.
 * @returns {Object} - The dollarbill object to allow for method chaining.
 */
dollarbill.fn.on = function (evt, fn, bubble) {

    bubble = (bubble === true) ? true : false;

    if (!Array.isArray(evt)) {
        evt = [evt];
    }

    for (let i = 0; i < this.length; i++) {

        for (let j = 0; j < evt.length; j++) {

            this[i].addEventListener(evt[j], fn, bubble);

        }

    }

    return this;

};

/**
 * @section
* Removes an event listener from the selected element(s).
 * @memberOf dollarbill
*
  * @function
* @param {string} evt - The event type to remove.
* @param {function} fn - The listener function to remove.
* @param {boolean} [bubble=false] - Optional boolean value indicating whether or not to remove the listener during the bubbling or capturing phase. Default is false (bubbling phase).
* @returns {object} - Returns the dollarbill object to allow for method chaining.
*/
dollarbill.fn.off = function (evt, fn, bubble) {

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(evt, fn, bubble);
    }

    return this;

};

/**
 * @section
 * Triggers a specified event on all elements in the current selection.
 * 
 * @memberOf dollarbill
 * @function
 * @param {string} eventType - The name of the event to trigger.
 * @param {Object} [extraParameters] - Optional parameters to pass to the event.
 * @returns {dollarbill} - The dollarbill object for chaining.
 */
dollarbill.fn.trigger = function (eventType, extraParameters) {
    if (!eventType) {
        return this;
    }

    let i = 0;
    const event = new Event(eventType, {
        bubbles: true,
        cancelable: true,
        detail: extraParameters
    });

    for (; i < this.length; i++) {
        this[i].dispatchEvent(event);
    }

    return this;
};