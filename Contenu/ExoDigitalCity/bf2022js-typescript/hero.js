"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacteristics = exports.HeroType = void 0;
var HeroType;
(function (HeroType) {
    HeroType["Humain"] = "10|10";
    HeroType["Nain"] = "20|5";
})(HeroType = exports.HeroType || (exports.HeroType = {}));
function getCharacteristics(type) {
    return type.split('|').map(it => parseInt(it));
}
exports.getCharacteristics = getCharacteristics;
