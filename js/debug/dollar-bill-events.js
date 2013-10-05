

    dollarbill.fn.on = function (evt, fn, bubble) {

        bubble = (bubble === true) ? true : false;

        for(var i = 0; i < this.length; i++){
            this[i].addEventListener(evt, fn, bubble);
        }

    }

    dollarbill.fn.off = function (evt, fn, bubble) {

        for(var i = 0; i < this.length; i++){
            this[i].removeEventListener(evt, fn, bubble);
        }

    }

    dollarbill.fn.trigger = function () { };
