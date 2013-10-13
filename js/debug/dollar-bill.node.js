//Don't use these methods. They are just something I was experimenting with.

    NodeList.prototype.nodeFunctions = function (names) {

        if (!names.length) {
            names = [names];
        }

        var list = this,
            funcName = "",
            args = arguments.slice(1),
            node;

        for (var i = 0; i < names.length; i++) {

            funcName = names[i];

            this.prototype[funcName] = function (args) {

                for (var j = 0; j < list.length; j++) {

                    node = list[j];

                    if (node[funcName]) {

                        node[funcName](arguments);

                    }

                }

            };

        }

    }
