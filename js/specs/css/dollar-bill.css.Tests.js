
var targetSelector = ".target",
    testClass = "test-class",
    target = document.querySelector(targetSelector);

module("Dollar Bill Unit Tests", {
    setup: function () {

        

    },
    teardown: function () {

    }
});


test("Verify We Have dillar-bill with expected members", function () {

        //basic sainty assertions to know members are present
    isFunction(dollarbill.fn.css, "css function should exist");
    isFunction(dollarbill.fn.height, "height function should exist");
    isFunction(dollarbill.fn.width, "width function should exist");
    isFunction(dollarbill.fn.innerHeight, "innerHeight function should exist");
    isFunction(dollarbill.fn.innerWidth, "innerWidth function should exist");
    isFunction(dollarbill.fn.offset, "offset function should exist");
    isFunction(dollarbill.fn.outerHeight, "outerHeight function should exist");
    isFunction(dollarbill.fn.outerWidth, "outerWidth function should exist");
    isFunction(dollarbill.fn.position, "position function should exist");

});

test("Verify height returns a known height", function () {

    var height = "100px";

    target.style.height = height;

    var $ob = $(targetSelector);

    equal($ob.height(), height, "dollarbill.height should be " + height);

    target.style.height = "";

});

test("Verify width returns a known width", function () {

    var width = "100px";

    target.style.width = width;

    var $ob = $(targetSelector);

    equal($ob.width(), width, "dollarbill.height should be " + width);

    target.style.width = "";

});

test("Verify height sets known height", function () {

    var height = "100px";

    target.style.height = "";

    var $ob = $(targetSelector);

    $ob.height(height);

    equal(target.style.height, height, "dollarbill.height should be " + height);

    target.style.height = "";

});

test("Verify width sets known width", function () {

    var width = "100px";

    target.style.width = "";

    var $ob = $(targetSelector);

    $ob.width(width);

    equal(target.style.width, width, "dollarbill.height should be " + width);

    target.style.width = "";

});


test("Verify innerHeight returns a known height", function () {

    var $ob = $(window);

    equal($ob.innerHeight(), window.style.innerHeight, "dollarbill.height should be " + height);
    
});

test("Verify innerWidth returns a known width", function () {

    var $ob = $(targetSelector);

    equal($ob.innerWidth(), window.style.innerWidth, "dollarbill.height should be " + width);

});



