"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = exports.addNumbers = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
// function with default values
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ''; }
    return str1 + " " + str2;
};
exports.addStrings = addStrings;
// union type |
var format = function (title, param) {
    return title + " " + param;
};
exports.format = format;
// not returning anything from the function: void
var printFormat = function (title, param) {
    console.log(exports.format(title, param));
};
exports.printFormat = printFormat;
var fetchData = function (url) {
    return Promise.resolve("Data from " + url);
};
exports.fetchData = fetchData;
var introduce = function (salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(' ');
};
exports.introduce = introduce;
// MISCONCEPTION
function getName(user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first') + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
exports.getName = getName;
