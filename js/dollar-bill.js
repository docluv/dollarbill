//dollar bill is a simple, custom helper library with a collection of
//utility methods based on jQuery's example.
;

/**

A lightweight, custom helper library with a collection of utility methods based on jQuery's example.
@namespace
@param {(string|Object|Array|Function)} selector - A string containing a selector expression, an HTML string, or a DOM element.
@param {Object} [context=document] - A DOM element within which a matching element may be found.
@returns {Object} A new instance of the dbl object.
@example
// Returns a new instance of the dbl object with all h1 elements on the page.
var $headings = $('h1');
// Returns a new instance of the dbl object with all elements with the class "intro" within the element with the ID "content".
var $introElements = $('.intro', document.getElementById('content'));
*/
(function (window, undefined) {

    "use strict";

    /**

The main function of the dollarbill library.
@function
@alias $
@param {string|HTMLElement} selector - A CSS selector string or an HTML element.
@param {HTMLElement} context - The context in which to search for the selector.
@returns {Object} - An object containing the selected elements.
@throws {TypeError} - If the selector parameter is not a string or an HTMLElement.
@example
// Select all div elements on the page:
let divs = $("div");
// Select the element with ID "my-element":
let myElement = $("#my-element");
*/
    let dbl = function (selector, context) {

        let db = new dbl.fn.init(selector, context),
            nodes, i;

        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) {

            db.length = 0;
            return db;

        }

        if (typeof selector === "string") {

            if (context && context.nodeType) {
                nodes = context.querySelectorAll(selector);
            } else {
                nodes = document.querySelectorAll(selector);
            }

            db.length = nodes.length;
            db.selector = selector;

            for (i = 0; i < nodes.length; i++) {
                db[i] = nodes[i];
            }

        } else if (selector.nodeType) {

            //if(!selector.length){
            //    selector = [selector];
            //}

            db[0] = selector;
            db.length = (!selector.length) ? 1 : selector.length;
        }

        return db;

    };

    /**
     * The prototype object for the dollarbill library.
     * @namespace
     */
    dbl.fn = dbl.prototype = {

        /**
         * The constructor function for the dollarbill library.
         * @constructor
         */
        constructor: dbl,

        /**
         * The init function for the dollarbill library.
         * @returns {dbl.fn.init} The dollarbill library object.
         */
        init: function () {

            //this.length = 5;
            //this.selector = ".test";

            return this;
        },

        /**
         * The version number of the dollarbill library.
         * @type {string}
         */
        version: "0.0.6",

        /**
         * The length of the dollarbill library object.
         * @type {number}
         */
        length: 0,

        /**
         * The context of the dollarbill library object.
         * @type {undefined}
         */
        context: undefined,

        /**
         * The selector used to create the dollarbill library object.
         * @type {string}
         */
        selector: "",

        /**
         * A regular expression used to match white space characters in strings.
         * @type {RegExp}
         */
        rclass: /[\t\r\n]/g

    };

    /**
     * A function that does nothing.
     *
     * @function
     * @memberof dbl
     * @name noop
     * @returns {void}
     */
    dbl.noop = function () { };

    // Give the init function the dbl prototype for later instantiation
    /**
     * Initializes the dollarbill object and sets its prototype to the dbl prototype.
     *
     * @constructor
     * @function
     * @name dbl.fn.init
     * @returns {Object} The dollarbill object.
     */
    dbl.fn.init.prototype = dbl.fn;

    /**
     * The dollarbill object is set to the dbl function for global use, with the $ alias also assigned to it.
     *
     * @namespace
     * @name window
     * @property {Object} dollarbill - The dollarbill object.
     * @property {Object} $ - The dollarbill object, with the $ alias.
     */
    window.dollarbill = window.$ = dbl;

    /**
    
    Removes the specified class(es) from the DOM element(s) in the collection.
    @param {string} cssClass - The class(es) to remove, separated by spaces.
    @returns {object} - The dollarbill object for chaining.
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
 * Adds one or more CSS classes to each element in the current selection.
 *
 * @param {string} cssClass - One or more CSS classes to add, separated by spaces.
 * @returns {object} - The current dollarbill object for chaining.
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
* Checks if the first element in the collection has the specified CSS class.
*
* @param {string} cssClass - The CSS class to check for.
* @returns {boolean|dbl} - Returns `true` if the first element has the class; returns `false` if not. If `cssClass` is not a string, returns the current `dbl` object.
*/
    dollarbill.fn.hasClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return this;
        }

        return this[0].classList.contains(cssClass);

    };


    /**
  
  Toggles the specified class on the selected elements.
  @param {string} cssClass - The class name to toggle.
  @returns {Object} - The dollarbill object.
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

    /**
  
  Polyfill for CustomEvent in case it is not supported by the browser.
  https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
  @param {string} event - The name of the custom event to create.
  @param {object} params - The parameters to configure the custom event. This is optional and defaults to {bubbles: false, cancelable: false, detail: undefined}.
  @return {CustomEvent} The custom event object.
  */
    if (!window.CustomEvent) {

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            let evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        CustomEvent.prototype = window.CustomEvent.prototype;

        window.CustomEvent = CustomEvent;

    }

    /**

Attaches an event listener to the selected element(s).
@param {string|string[]} evt - The event name(s) to listen for.
@param {function} fn - The function to execute when the event is triggered.
@param {boolean} [bubble=false] - Indicates whether the event should propagate up through the DOM or not.
@returns {object} - The dollarbill object to allow for method chaining.
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
 * Removes an event listener from the selected element(s).
 *
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

Trigger a specified event on all elements in the current selection.
@param {string} eventType - The name of the event to trigger.
@param {Object} [extraParameters] - Optional parameters to pass to the event.
@returns {dollarbill} The dollarbill object for chaining.
*/
    dollarbill.fn.trigger = function (eventType, extraParameters) {

        if (!eventType) {
            return this;
        }

        let i = 0,
            event = new CustomEvent(eventType, extraParameters);

        for (; i < this.length; i++) {
            elem.dispatchEvent(event);
        }

        return this;
    };

    /**
 * Gets or sets the value property of the first element in the collection.
 *
 * @param {string} [value] - The value to set on the elements.
 * @returns {(string|undefined|dollarbill)} - The value of the first element if no parameter is passed, `undefined` if there are no elements, and the `dollarbill` object otherwise.
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
 * Check if the first element in the collection is valid according to its constraints.
 * @returns {boolean} True if the element is valid, false otherwise.
 */
    dollarbill.fn.isValid = function () {
        return this[0].validity.valid;
    };

    /**

Toggles the disabled state and the aria-disabled attribute of the selected elements.
@param {boolean} state - The desired state of the disabled attribute (true for disabled, false for enabled).
@returns {dollarbill} - The dollarbill object for method chaining.
*/
    dollarbill.fn.toggleDisabled = function (state) {

        for (let i = 0; i < this.length; i++) {
            this[i].disabled = state;
            this[i].setAttribute("aria-disabled", state);
        }

        return this;

    };

    /**
 * Toggles the display of an element between "none" and "flex".
 * 
 * @param {Boolean} state - Whether to show the element or not. 
 * If false, the element is hidden with "d-none" class, otherwise it's displayed with "d-flex" class.
 * 
 * @returns {Object} The dollarbill object.
 */
    dollarbill.fn.toggleFlex = function (state) {

        for (let i = 0; i < this.length; i++) {

            if (!state) //display
            {

                this[i].classList.add("d-none");
                this[i].classList.remove("d-flex");

            } else {

                this[i].classList.remove("d-none");
                this[i].classList.add("d-flex");

            }

        }

        return this;

    };

    /**

Sets or gets the HTML content of the selected element(s).
@param {string} value - The HTML content to set.
@returns {string|object} - The HTML content of the first selected element, or the dollarbill object.
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
 * Inserts the given content before the first child of each element in the current selection.
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
     * Inserts content after each element in the current set of matched elements.
     *
     * @param {string} value - The HTML string, DOM element(s), or jQuery object(s) to insert after the matched elements.
     * 
     * @returns {dollarbill} - The dollarbill object.
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
     * Sets or gets the innerText content of the first element in the selected elements.
     * @param {string} value - The text content to set.
     * @returns {string|dollarbill} - If the value parameter is not provided, returns the innerText content of the first element, otherwise returns the dollarbill object.
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

Sets or gets the checked state of the first element in the collection.
@param {boolean} value - The value to set the checked state to.
@returns {boolean|dollarbill} - If the value parameter is not passed, returns a boolean indicating the checked state of the first element in the collection. If the value parameter is passed, returns the dollarbill object to allow for method chaining.
*/
    dollarbill.fn.checked = function (value) {

        if (value !== undefined) {
            for (let i = 0; i < this.length; i++) {
                this[i].checked = value;
            }
        } else {
            return this[0].checked;
        }

    };

    /**

Appends the given content to the first element in the current Dollarbill object.
If the content is a string, it will be converted to a new DOM element before being appended.
@param {Node|string} content - The content to append.
@returns {Dollarbill} The Dollarbill object for chaining.
*/
    dollarbill.fn.append = function (content) {

        if (!content) {
            return this;
        }

        if (!content.nodeType && typeof content === "string") {
            content = document.createElement(content);
        }

        this[0].appendChild(content);

        return this;

    };

    /**
 * Set or get the type attribute of the first element in the current collection.
 * 
 * @param {string} [value] - The value to set as the type attribute.
 * 
 * @returns {(string|dollarbill)} - If a value is provided, returns the dollarbill object for chaining; 
 * otherwise, returns the type attribute of the first element in the collection.
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
    
    Set or get the value of an attribute on the first element of the collection or set the value for all elements in the collection.
    @param {string} name - The name of the attribute to set or get.
    @param {string} [value] - The value to set for the attribute.
    @returns {string|undefined|Object} - If value is provided, it returns the instance of the dollarbill object with the attribute set to the provided value for all elements in the collection. If value is not provided, it returns the value of the attribute for the first element in the collection. If the collection is empty, undefined is returned.
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

}(window));