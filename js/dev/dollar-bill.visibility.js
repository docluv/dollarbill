dollarbill.fn.defaultShow = "block";

//no need to support time, easing etc as those should be done with CSS not JavaScript
//callback is also sort of moot since this is instantaneous.
dollarbill.fn.show = function ( style ) {
    style = style || this.defaultShow;

    for ( var i = 0; i < this.length; i++ ) {
        this[ i ].style.display = style;
    }
};

dollarbill.fn.hide = function () {
    for ( var i = 0; i < this.length; i++ ) {
        this[ i ].style.display = "none";
    }
};

dollarbill.fn.toggle = function ( style ) {

    style = style || this.defaultShow;

    for ( var i = 0; i < this.length; i++ ) {
        var ele = this[ i ];

        if ( ele.style.display === "" || ele.style.display === "none" ) {
            ele.style.display = style;
        } else {
            ele.style.display = "none";
        }
    }


};

//fade methods should be handled by CSS instead of JavaScript