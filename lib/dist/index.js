"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = exports.Component = exports.Vect2 = exports.Transform = exports.GameObject = void 0;
const GameEngine_1 = __importDefault(require("./GameEngine"));
const Transform_1 = __importDefault(require("./Transform"));
exports.Transform = Transform_1.default;
const GameObject_1 = __importDefault(require("./GameObject"));
exports.GameObject = GameObject_1.default;
const Vect2_1 = __importDefault(require("./Vect2"));
exports.Vect2 = Vect2_1.default;
const Component_1 = __importDefault(require("./Component"));
exports.Component = Component_1.default;
const Screen_1 = __importDefault(require("./Screen"));
exports.Screen = Screen_1.default;
__exportStar(require("./GameEngine"), exports);
__exportStar(require("./Transform"), exports);
__exportStar(require("./Vect2"), exports);
__exportStar(require("./GameObject"), exports);
__exportStar(require("./Component"), exports);
__exportStar(require("./Screen"), exports);
exports.default = GameEngine_1.default;
//# sourceMappingURL=index.js.map