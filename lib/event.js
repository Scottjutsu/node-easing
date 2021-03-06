"use strict";

var EventEmitter = require("events");
var staticValues = require("./static");

var eventList = function eventList(number, type) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var list = staticValues(number, type, options);

  var defaults = { duration: 1000, repeat: false };
  options = Object.assign({}, defaults, options);

  var intervalTime = ~~(options.duration / number);

  var ee = new EventEmitter();
  var index = 0;
  var id = setInterval(function () {
    ee.emit("data", list[index]);
    index++;

    if (index >= list.length) {
      if (options.repeat === false) {
        clearInterval(id);
        ee.emit("end");
      } else {
        ee.emit("repeat");
        index = 0;
      }
    }
  }, intervalTime);
  ee.on("requestStop", function () {
    clearInterval(id);
    ee.emit("end");
  });
  return ee;
};

module.exports = exports = eventList;