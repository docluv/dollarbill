
module("Dollar Bill Unit Tests", {
    setup: function () {

        

    },
    teardown: function () {

    }
});



test("Verify We Have dollar-bill with expected members", function () {

    //basic sainty assertions to know members are present
    isFunction(dollarbill, "dollarbill object should exist");
    isFunction(dollarbill.fn.init, "init function should exist");
    ok(dollarbill.fn.version, "version should exist");
    equal(dollarbill.fn.length, 0, "length should exist");
    ok(dollarbill.fn.rclass, "rclass should exist");
    equal(dollarbill.fn.selector, "", "selector should exist");
    isFunction(dollarbill.fn.trim, "trim function should exist");
    isFunction(dollarbill.fn.isArray, "isArray function should exist");
    isFunction(dollarbill.fn.extend, "extend function should exist");
    isFunction(dollarbill.fn.merge, "merge function should exist");
    isFunction(dollarbill.fn.each, "each function should exist");
    isFunction(dollarbill.fn.map, "map function should exist");
    isFunction(dollarbill.fn.grep, "grep function should exist");
    isFunction(dollarbill.fn.noop, "dblTap function should exist");
    isFunction(dollarbill.fn.loadScript, "loadScript function should exist");
});

test("Verify a new dollarbill instance with no selector has expected member values", function () {

    var selector = "",
        length = 0,
        $ob = $();

    equal($ob.selector, selector, "selector should be empty string");
    equal($ob.length, length, "length should be 0");
    equal($ob[0], undefined, "$ob[0] should be undefined");
    
});

test("Verify a new dollarbill instance with selector for multiple nodes has expected member values", function () {

    var selector = ".test-nodes",
        length = 3,
        divs = document.createElement("div"),
        firstNode, $ob;

    divs.classList.add("test-nodes");
    document.body.appendChild(divs);
    document.body.appendChild(divs);
    document.body.appendChild(divs);

    firstNode = document.querySelector(selector)

    $ob = $(selector);

    equal($ob.selector, selector, "selector should be " + selector);
    equal($ob.length, length, "length should be " + length);
    equal($ob[0], firstNode, "$ob[0] should be known element");

});


test("Verify can a new dollarbill instance and the 1st element is the target element", function () {

    var selector = ".operation-body",
        $ob = $(selector);

    equal(typeof $ob, "object", "dollarbill object should exist");
    equal($ob.length, 1, "dollarbill.length should be 1");
    equal($ob.selector, selector, "dollarbill.selector should be " + selector);
    equal($ob[0], document.querySelector(selector), "should be the target node");

});

test("Verify can a dollarbill.trim can trim leading and trailing spaces", function () {

    var testString = " test ",
        expect = "test",
        $ob = $(),
        result = $ob.trim(testString);

    equal(result, expect, "trim should remove leading and trailing spaces");

});

test("Verify can a dollarbill.trim can trim leading space", function () {

    var testString = " test",
        expect = "test",
        $ob = $(),
        result = $ob.trim(testString);

    equal(result, expect, "trim should remove leading space");

});

test("Verify can a dollarbill.trim can trim trailing space", function () {

    var testString = "test ",
        expect = "test",
        $ob = $(),
        result = $ob.trim(testString);

    equal(result, expect, "trim should remove trailing space");

});

test("Verify can a dollarbill.isArray can identify an array", function () {

    var testArray = [],
        expect = true,
        $ob = $(),
        result = $ob.isArray(testArray);

    equal(result, expect, "trim should be true");

});

test("Verify can a dollarbill.isArray won't identify an object as an array", function () {

    var testArray = {},
        expect = false,
        $ob = $(),
        result = $ob.isArray(testArray);

    equal(result, expect, "trim should be false");

});


