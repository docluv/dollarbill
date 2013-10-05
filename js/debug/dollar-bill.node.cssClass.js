
    dollarbill.fn.removeClass = function (cssClass) {

        if(!cssClass || typeof cssClass !== "string"){
            return;
        }

        var elem, i = 0, cur;

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( this.rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
        //only reset the className if the target class exist, keeps brosers from auto repainting the document.
        if (this.hasClass(cssClass)) {

            this.className = this.className
                                .replace(" " + cssClass + " ", " ")
                                .replace(" " + cssClass, "")
                                .replace(cssClass + " ", "");

        }

    };

    dollarbill.fn.addClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        this.className += " " + cssClass;

    };

    dollarbill.fn.hasClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return this;
        }

        cssClass = " " + cssClass + " ";

        if (this.nodeType === 1 &&
                (" " + this.className + " ")
                    .replace(this.rclass, " ").indexOf(cssClass) >= 0) {
            return true;
        }

        return false;

    };

    dollarbill.fn.toggleClass = function (cssClass){
        
        if (!cssClass || typeof cssClass !== "string") {
            return this;
        }

        cssClass = " " + cssClass + " ";

        for(var i = 0; i < this.length; i++){

            var elem = this[i];

            if (elem.nodeType === 1 &&
                    (" " + elem.className + " ")
                        .replace(this.rclass, " ").indexOf(cssClass) >= 0) {
                elem.className = elem.className
                                .replace(cssClass, " ");
            }else{
                elem.className += " " + cssClass;
            }

        }

    };
