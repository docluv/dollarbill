
module("Dollar Bill Unit Tests", {
    setup: function () {



    },
    teardown: function () {

    }
});





test("Verify dollarbill.extend extends two objects into expected object", function () {

    var obj1 = {
        foo: "bar"
    },
        obj2 = {
            Austin: "Texas"
        },
        expect = {
            foo: "bar",
            Austin: "Texas"
        },
        result = $.extend(obj1, obj2);

    ok(expect.foo, "should have foo property");
    ok(expect.Austin, "should have Austin property");

    equal(expect.foo, "bar", "foo should be 'bar'");
    equal(expect.Austin, "Texas", "Austin should be 'Texas'");

});




test("Verify dollarbill.extend extends two objects into expected object", function () {

    var obj1 = {
            foo: {
                Raleigh: "North Carolina"
            }
        },
        obj2 = {
            foo: {
                Austin: "Texas"
            }
        },
        expect = {
            foo: {
                Austin: "Texas",
                Raleigh: "North Carolina"
            }
        },
        result = $.extend(true, obj1, obj2);

    ok(expect.foo, "should have foo property");
    ok(expect.foo.Austin, "should have foo.Austin property");
    ok(expect.foo.Raleigh, "should have foo.Austin property");

    isObject(expect.foo, "foo should be an object");
    equal(expect.foo.Austin, "Texas", "Austin should be 'Texas'");
    equal(expect.foo.Raleigh, "North Carolina", "Raleigh should be 'North Carolina'");

});

test("Verify dollarbill.extend extends two objects into expected object", function () {

    var obj1 = {
        foo: {
            Raleigh: "North Carolina"
        }
    },
        obj2 = {
            foo: {
                Austin: "Texas"
            }
        },
        obj3 = {
            foo: {
                Columbia: "Missouri"
            }
        },
        expect = {
            foo: {
                Austin: "Texas",
                Raleigh: "North Carolina",
                Columbia: "Missouri"
            }
        },
        result = $.extend(true, obj1, obj2);

    ok(expect.foo, "should have foo property");
    ok(expect.foo.Austin, "should have foo.Austin property");
    ok(expect.foo.Raleigh, "should have foo.Austin property");
    ok(expect.foo.Columbia, "should have foo.Columbia property");

    isObject(expect.foo, "foo should be an object");
    equal(expect.foo.Austin, "Texas", "Austin should be 'Texas'");
    equal(expect.foo.Raleigh, "North Carolina", "Raleigh should be 'North Carolina'");
    equal(expect.foo.Columbia, "Missouri", "Austin should be 'Missouri'");

});





test("Verify We Have dillar-bill with expected members", function () {

    //basic sainty assertions to know members are present
    ok(dollarbill, "dollarbill object should exist");
    ok(dollarbill.fn.init, "init function should exist");
    ok(dollarbill.fn.version, "version should exist");
    equal(dollarbill.fn.length, 0, "length should exist");
    ok(dollarbill.fn.rclass, "rclass should exist");
    equal(dollarbill.fn.selector, "", "selector should exist");
    ok(dollarbill.fn.trim, "trim function should exist");
    ok(dollarbill.fn.isArray, "isArray function should exist");
    ok(dollarbill.fn.extend, "extend function should exist");
    ok(dollarbill.fn.merge, "merge function should exist");
    ok(dollarbill.fn.each, "each function should exist");
    ok(dollarbill.fn.map, "map function should exist");
    ok(dollarbill.fn.grep, "grep function should exist");
    ok(dollarbill.fn.noop, "dblTap function should exist");
    ok(dollarbill.fn.loadScript, "loadScript function should exist");
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






