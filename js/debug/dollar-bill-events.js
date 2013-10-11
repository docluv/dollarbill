
//https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
if(!window.CustomEvent){

    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
       };

  CustomEvent.prototype = window.CustomEvent.prototype;

  window.CustomEvent = CustomEvent;

}


dollarbill.fn.on = function (evt, fn, bubble) {

    bubble = (bubble === true) ? true : false;

    for (var i = 0; i < this.length; i++) {
        this[i].addEventListener(evt, fn, bubble);
    }

};

dollarbill.fn.off = function (evt, fn, bubble) {

    for (var i = 0; i < this.length; i++) {
        this[i].removeEventListener(evt, fn, bubble);
    }

};

dollarbill.fn.trigger = function (eventType, extraParameters) {

    if (!eventType) {
        return this;
    }

    var i = 0,
        event = new CustomEvent(eventType, extraParameters);

    for(; i < this.length; i++){
        elem.dispatchEvent(event);
    }

};
