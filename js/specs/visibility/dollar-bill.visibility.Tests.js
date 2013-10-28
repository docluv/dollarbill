var testItem = ".test-subject",
    testItems = ".test-subjects";

module("Dollar Bill Visibility Unit Tests", {
    setup: function () {

    },
    teardown: function () {

    }
});



test("Verify We Have dillar-bill with expected visibility members", function () {

    //basic sainty assertions to know members are present
    isFunction(dollarbill.fn.show, "show function should exist");
    isFunction(dollarbill.fn.hide, "hide should exist");

});

test("Verify show displays a hidden element", function () {

    var $ob = $(testItem),
        target = document.querySelector(testItem);

    target.style.display = "none";

    $ob.show();

    equal(target.style.display, "block", "should be display = 'block'");

    target.style.display = "";
});


test("Verify show displays a hidden element with inline-block", function () {

    var $ob = $(testItem),
        target = document.querySelector(testItem);

    target.style.display = "none";

    $ob.show("inline-block");

    equal(target.style.display, "inline-block", "should be display = 'inline-block'");

    target.style.display = "";
});

test("Verify hide sets display to none", function () {

    var $ob = $(testItem),
        target = document.querySelector(testItem);

    target.style.display = "block";

    $ob.hide();

    equal(target.style.display, "none", "should be display = 'none'");

    target.style.display = "";
});

test("Verify show displays a hidden elements", function () {

    var $ob = $(testItems),
        target = document.querySelectorAll(testItems);

    target[0].style.display = "none";
    target[1].style.display = "none";
    target[2].style.display = "none";

    $ob.show();

    equal(target[0].style.display, "block", "should be display = 'block'");
    equal(target[1].style.display, "block", "should be display = 'block'");
    equal(target[2].style.display, "block", "should be display = 'block'");

    target[0].style.display = "";
    target[1].style.display = "";
    target[2].style.display = "";
});

test("Verify show displays a hidden elements with inline-block", function () {

    var $ob = $(testItems),
        target = document.querySelectorAll(testItems);

    target[0].style.display = "none";
    target[1].style.display = "none";
    target[2].style.display = "none";

    $ob.show("inline-block");

    equal(target[0].style.display, "inline-block", "should be display = 'inline-block'");
    equal(target[1].style.display, "inline-block", "should be display = 'inline-block'");
    equal(target[2].style.display, "inline-block", "should be display = 'inline-block'");

    target[0].style.display = "";
    target[1].style.display = "";
    target[2].style.display = "";
});


test("Verify hide hides a visible elements", function () {

    var $ob = $(testItems),
        target = document.querySelectorAll(testItems);

    target[0].style.display = "block";
    target[1].style.display = "block";
    target[2].style.display = "block";

    $ob.hide();

    equal(target[0].style.display, "none", "should be display = 'none'");
    equal(target[1].style.display, "none", "should be display = 'none'");
    equal(target[2].style.display, "none", "should be display = 'none'");

    target[0].style.display = "";
    target[1].style.display = "";
    target[2].style.display = "";
});



