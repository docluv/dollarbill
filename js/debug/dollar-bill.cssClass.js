
dollarbill.fn.removeClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    //var i = 0, cur;
    //elem, 

    for (var i = 0; i < len; i++) {
        //elem = this[ i ];

        this[i].classList.remove(cssClass);
        //// This expression is here for better compressibility (see addClass)
        //cur = elem.nodeType === 1 && ( elem.className ?
        //	( " " + elem.className + " " ).replace( this.rclass, " " ) :
        //	""
        //);

        //if ( cur ) {
        //	j = 0;
        //	while ( (clazz = classes[j++]) ) {
        //		// Remove *all* instances
        //		while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
        //			cur = cur.replace( " " + clazz + " ", " " );
        //		}
        //	}
        //	elem.className = value ? jQuery.trim( cur ) : "";
        //}
    }
    //only reset the className if the target class exist, keeps brosers from auto repainting the document.
    //if (this.hasClass(cssClass)) {

    //    this.className = this.className
    //                        .replace(" " + cssClass + " ", " ")
    //                        .replace(" " + cssClass, "")
    //                        .replace(cssClass + " ", "");

    //}

    return this;

};

dollarbill.fn.addClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < len; i++) {

        this[i].classList.add(cssClass);
    }

    return this;

};

dollarbill.fn.hasClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return this;
    }

    this[0].classList.contains(cssClass);

};

dollarbill.fn.toggleClass = function (cssClass) {

    if (!cssClass || typeof cssClass !== "string") {
        return;
    }

    for (var i = 0; i < len; i++) {

        this[i].classList.toggle(cssClass);
    }

    return this;

};
