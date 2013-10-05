
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

