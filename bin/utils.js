const crypto = require("crypto"),
  stripBom = require("strip-bom"),
  path = require("path"),
  fs = require("fs"),
  utf8 = "utf-8";

exports.readFile = function(src) {
  if (fs.existsSync(src)) {
    return stripBom(fs.readFileSync(src, utf8));
  } else {
    return undefined;
  }
};

exports.getHash = function(data) {
  if (typeof data === "object") {
    data = JSON.stringify(data);
  }

  let md5 = crypto.createHash("md5");

  md5.update(data);

  return md5.digest("hex");
};

exports.createFile = function(target, body, override) {
  override = override || false;

  if (!fs.existsSync(target) || override) {
    if (!fs.existsSync(path.dirname(target))) {
      fs.mkdirSync(path.dirname(target));
    }

    fs.writeFileSync(target, body, utf8);
  }
};
