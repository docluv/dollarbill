
    dollarbill.fn.addClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        var elem, i = 0, len = this.length;

        for (; i < len; i++) {
            elem = this[i];

            elem.className += " " + cssClass;
        }

    };

    dollarbill.fn.hasClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        var className = " " + cssClass + " ",
			elem, i = 0, len = this.length;

        for (; i < len; i++) {
            elem = this[i];

            if (elem.nodeType === 1 &&
                (" " + elem.className + " ")
                    .replace(this.rclass, " ").indexOf(className) >= 0) {
                return true;
            }
        }

        return false;

    };

    dollarbill.fn.removeClass = function (cssClass) {

        if (!cssClass || typeof cssClass !== "string") {
            return;
        }

        var className = " " + cssClass + " ",
			elem, i = 0, len = this.length;

        for (; i < len; i++) {
            elem = this[i];

            if (elem.nodeType === 1 &&
                (" " + elem.className + " ").replace(this.rclass, " ")) {

            }
        }


    };

    dollarbill.fn.toggleClass = function () { };

    dollarbill.fn.css = function () { };

    dollarbill.fn.height = function (val) {
    
        if(!val){

            if(this.length === 0){
                return window.style.height;
            }

            return this[0].style..height;
        }    
    
        if(this.length > 0){
            this[0].style..height = val;
        }

        return this;
    
    };

    //can probably refactor to call the css method
    dollarbill.fn.width = function (val) {
    
        if(!val){

            if(this.length === 0){
                return window.style.height;
            }

            return this[0].style..height;
        }    
    
        if(this.length > 0){
            this[0].style..height = val;
        }

        return this;
    
    };

    dollarbill.fn.innerHeight = function () {

        if (this.length === 0) {
            return window.innerHeight;
        }

        return this[0].innerHeight;

    };

    dollarbill.fn.innerWidth = function () {

        if (this.length === 0) {
            return window.innerWidth;
        }

        return this[0].innerWidth;     
    };

    dollarbill.fn.offset = function () { };

    dollarbill.fn.outerHeight = function () {
    
        if (this.length === 0) {
            return window.outerHeight;
        }

        return this[0].outerHeight;

    };

    dollarbill.fn.outerWidth = function () { 
        
        if (this.length === 0) {
            return window.outerWidth;
        }

        return this[0].outerWidth;

    };

    dollarbill.fn.position = function () { };
