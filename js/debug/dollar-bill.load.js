dollarbill.fn.loadScript = function (id, url, callback) {

    if (!document.getElementById(id)) {

        var script = document.createElement("script");

        script.type = "text/javascript";
        script.id = id;

        if (script.readyState) {  //IE

            script.onreadystatechange = function () {

                if (script.readyState === "loaded" ||
                        script.readyState === "complete") {

                    script.onreadystatechange = null;
                    callback();

                }

            };

        } else {  //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.body.appendChild(script);

    } else {
        callback();
    }
};
