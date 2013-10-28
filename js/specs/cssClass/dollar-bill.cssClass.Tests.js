
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
    isFunction(dollarbill.fn.removeClass, "removeClass function should exist");
    isFunction(dollarbill.fn.addClass, "addClass function should exist");
    isFunction(dollarbill.fn.hasClass, "hasClass function should exist");
    isFunction(dollarbill.fn.toggleClass, "toggleClass function should exist");

});

test("Verify removeClass removes the testClass", function () {

    target.classList.add(testClass);

    var $ob = $(targetSelector);

    $ob.removeClass(testClass);

    equal(target.classList.contains(testClass), false, "should not contain " + testClass);

});

test("Verify addClass removes the testClass", function () {

    var $ob = $(targetSelector);

    $ob.addClass(testClass);

    equal(target.classList.contains(testClass), true, "should contain " + testClass);

    target.classList.remove(testClass);
});

test("Verify hasClass returns true for the testClass", function () {

    target.classList.add(testClass);

    var $ob = $(targetSelector);

    equal($ob.hasClass(testClass), true, "should contain " + testClass);
    
    target.classList.remove(testClass);
});

test("Verify hasClass returns false for the no class", function () {

    var $ob = $(targetSelector);

    equal($ob.hasClass(testClass), false, "should not contain " + testClass);
    
});

test("Verify toggleClass add & removes the testClass", function () {

    var $ob = $(targetSelector);

    $ob.toggleClass(testClass);

    equal(target.classList.contains(testClass), true, "should contain " + testClass);

    $ob.toggleClass(testClass);

    equal(target.classList.contains(testClass), false, "should not contain " + testClass);

});


