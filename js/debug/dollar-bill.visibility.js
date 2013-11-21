//no need to support time, easing etc as those should be done with CSS not JavaScript
//callback is also sort of moot since this is instantaneous.
    dollarbill.fn.show = function (style) {
        style = style || "block";
        
        for(var i = 0; i < this.length; i++){
            this[i].style.display = style;
        }
    };

    dollarbill.fn.hide = function () {
        for(var i = 0; i < this.length; i++){
            this[i].style.display = "none";
        }
    };


    //fade methods should be handled by CSS instead of JavaScript

