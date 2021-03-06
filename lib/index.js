"use strict";

var staticValues = require("./static");
var funcList = require("./functions");

var Easing = staticValues;
Easing.event = require("./event");
Easing.stream = require("./stream");
Easing.uniqueList = funcList.uniqueList;

module.exports = exports = Easing;