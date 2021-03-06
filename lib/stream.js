"use strict";

var Stream = require("stream");
var staticValues = require("./static");

var streamList = function streamList(number, type) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var list = staticValues(number, type, options);

  var defaults = { duration: 1000, repeat: false };
  options = Object.assign({}, defaults, options);

  var intervalTime = ~~(options.duration / number);

  var stream = new Stream.Readable();
  var index = 0;
  stream._read = function () {
    setTimeout(function () {
      if (index > list.length - 1) {
        return stream.push(null);
      } else {
        stream.push(list[index].toString());
        index++;
      }
    }, intervalTime);
  };
  return stream;
};

module.exports = exports = streamList;