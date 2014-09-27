//TODO: make it support an object of properties and values
dollarbill.fn.css = function(propertyName, value) {

    //have to assume the 1st item in the collection
    if (this.length === 0) {
        return undefined;
    }

    var elem, i = 0,
        prop;

    for (var j = 0; j < this.length; j++) {

        elem = this[j];

        if (typeof propertyName === "string" && !value) {
            //return CSS property

            return elem.style[propertyName];
        }

        if (typeof propertyName === "string" && value) {
            //set CSS property
            elem.style[propertyName] = value;

        }

        if (typeof propertyName === "object") {

            for (prop in propertyName) {
                elem.style[prop] = propertyName[prop];
            }

        }
    }


    return this;
};