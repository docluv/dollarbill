isFunction = function (actual, message) {
    
	QUnit.push( (typeof actual === "function"), actual, true, message );
    
};


isObject = function (actual, message) {
    
	QUnit.push( (typeof actual === "object"), actual, true, message );
    
};