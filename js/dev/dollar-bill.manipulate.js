
dollarbill.fn.after = function (content) {

    if (!content) {
        return this;
    }

    if (typeof content === "string") {
         content = document.createDocumentFragment(content);
    }

    for (var i = 0; i < this.length; i++) {
        if (this[i].parentNode) {
            this[i].parentNode.insertBefore(content, this[i].nextSibling);
        }
    }

    return this;
};

dollarbill.fn.append = function (content) {

    if (!content) {
        return this;
    }

    if (!content.nodeType && typeof content === "string") {
        content = document.createElement(content);
    }

    for (var i = 0; i < len; i++) {

        this[i].appendChild(content);

    }

    return this;

};

dollarbill.fn.appendTo = function (target) {

    if (!target) {
        return this;
    }

    if (typeof target === "string") {
        target = document.querySelectorAll(target);
    }

    if (!target.length) {
        target = [target];
    }

    var i = 0, j = 0;

    for (; i < target.length; i++) {

        for (; j < this.length; j++) {

            target[i].appendChild(this[j]);

        }

    }

};

dollarbill.fn.before = function (elem) {

    if (!elem) {
        return this;
    }

    if (typeof elem === "string") {
        //assume it is markup, a selector does not really make sense here
        elem = document.createDocumentFragment(elem);
    }

    for (var i = 0; i < this.length; i++) {
        this[0].parentNode.insertBefore(elem, this[0]);
    }

    return this;
};

dollarbill.fn.clone = function (withDataAndEvents) {

    if (this.length === 0) {
        return;
    }

    return this[0].cloneNode(withDataAndEvents);

};

//for now keep it simple & just remove from DOM. I am not sure I have ever even used detach before
dollarbill.fn.detach = function (c) {

    return this.remove(c);    
};

dollarbill.fn.empty = function () {

    for (var i = 0; i < this.length; i++) {
        this[i].innerHTML = null;
    }

    return this;
};

dollarbill.fn.insertAfter = function (target) {

    target.parentNode.insertBefore(this, target.nextSibling);

    return this;
};

dollarbill.fn.insertBefore = function (target, source) {

    if (!source) {
        source = this[0];
    }

    if (!target.length) {
        target = [target];
    }

    for (var i = 0; i < target.length; i++) {
        target[i].parentNode.insertBefore(target[i], source);
    }

    return this;
};

dollarbill.fn.prepend = function (elem) {

    if (!elem) {
        return this;
    }

    if (typeof elem === "string") {
        //assume it is markup, a selector does not really make sense here
        elem = document.createDocumentFragment(elem);
    }

    var i = 0,
        target;

    for (; i < this.length; i++) {

        target = this[0];

        if (target.nodeType === 1 || target.nodeType === 11 || 
                target.nodeType === 9) {
            target.insertBefore(elem, target.firstChild);
        }

    }

    return this;

};

dollarbill.fn.prependTo = function (target) {

    if (!target) {
        return this;
    }

    if (typeof target === "string") {
        //assume it is selector, markup does not really make sense here
        target = document.querySelectorAll(elem);
    }

    if (!target.length) {
        target = [target];
    }

    var i = 0,
        elem = this[0]; //only insert the first element in the list for simplicity

    for (; i < target.length; i++) {

        if (target.nodeType === 1 || target.nodeType === 11 || target.nodeType === 9) {
            target.insertBefore(elem, target.firstChild);
        }
    }

    return this;

};

dollarbill.fn.remove = function () {

    var i, target, ele;

    for (i = 0; i < this.length; i++) {

        target = this[i];
        ele = target.parentNode.removeChild(target);
        ele = null;

    }

    return this;

};

dollarbill.fn.replaceAll = function (target) {

    if (this.length === 0 || !target) {
        return this;
    }

    if (typeof target === "string") {
        target = document.querySelectorAll(target);
    }

    var i = 0, j = 0;

    for (; i < target.length; i++) {

        for (; j < this.length; j++) {
            this[i].parentNode.replaceChild(this[i], target);
        }

    }

    return this;

};

dollarbill.fn.replaceWith = function (newContent) {

    if (!newContent) {
        return this;
    }

    if (!newContent.nodeType && typeof newContent === "string") {
        newContent = document.createElement(newContent)
    }

    for (var i = 0; i < len; i++) {

        this[i].parentNode.replaceChild(newContent, this[i]);

    }

    return this;
};

dollarbill.fn.text = function (textString) {

    if (this.length === 0) {
        "";
    }

    var elem = this[0],
        nodeType = elem.nodeType;

    if (!textString) {

        if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            // Use textContent for elements
            return elem.textContent;
        } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
        }

    } else {

        if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            // Use textContent for elements
            elem.textContent = textString;
        } else if (nodeType === 3 || nodeType === 4) {
            elem.nodeValue = textString;
        }

    }

    return "";
};

dollarbill.fn.parent = function (c) {

    if (!c.length) {
        c = [c];
    }

    return c[0].parentNode;

};

dollarbill.fn.prev = function () {

    if (!c.length) {
        c = [c];
    }

    return c[0].previousElementSibling;

};

dollarbill.fn.next = function () {

    if (!c.length) {
        c = [c];
    }

    return c[0].nextElementSibling;

};
