var targetSelector = ".target";


module("Dollar Bill Unit Tests", {
    setup: function () {

        

    },
    teardown: function () {

    }
});


test("Verify We Have dillar-bill with expected members", function () {

    isFunction(dollarbill.fn.on, "on function should exist");
    isFunction(dollarbill.fn.off, "off function should exist");
    isFunction(dollarbill.fn.trigger, "trigger function should exist");

});

test("null or undefined handler", function() {
	expect(2);
	// Supports Fixes bug #7229
	try {
		$(targetSelector).on( "click", null );
		ok(true, "Passing a null handler will not throw an exception");
	} catch ( e ) {}

	try {
		$(targetSelector).on( "click", undefined );
		ok(true, "Passing an undefined handler will not throw an exception");
	} catch ( e ) {}
});

test("on() with non-null,defined data", function() {

	expect(1);

	var handler = function( event, data ) {
		equal( data, 0, "non-null, defined data (zero) is correctly passed" );
	},
    $target = dollarbill(targetSelector);

	$target.on("foo.on", handler);

	$target.trigger("foo", 0);

	$target.off("foo.on", handler);

});

test("trigger() should cause the event handler to execute", function () {

    var count = 0,
        $target = dollarbill(targetSelector);

    $target.on("foo", function () {
        count++;
    });

    $target.trigger("foo");

    equal(count, 1, "should be 1");

    $target.off("foo", handler);

});

test("off() should remove the event binding", function () {

    var count = 0,
        $target = dollarbill(targetSelector);

    $target.on("foo", function anon() {
        count++;
    });

    $target.off("foo", anon)
            .trigger("foo");

    equal(count, 0, "should be 1");

});

