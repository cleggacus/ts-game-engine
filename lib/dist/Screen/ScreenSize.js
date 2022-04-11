"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeCanvas = exports.IndirectScreenSize = void 0;
var IndirectScreenSize;
(function (IndirectScreenSize) {
    IndirectScreenSize[IndirectScreenSize["Default"] = 0] = "Default";
    IndirectScreenSize[IndirectScreenSize["MatchCanvas"] = 1] = "MatchCanvas";
    IndirectScreenSize[IndirectScreenSize["GameBoy"] = 2] = "GameBoy";
    IndirectScreenSize[IndirectScreenSize["NES"] = 3] = "NES";
    IndirectScreenSize[IndirectScreenSize["HD_1080"] = 4] = "HD_1080";
    IndirectScreenSize[IndirectScreenSize["HD_720"] = 5] = "HD_720";
})(IndirectScreenSize || (IndirectScreenSize = {}));
exports.IndirectScreenSize = IndirectScreenSize;
;
const resizeCanvas = (canvas, screenSize) => {
    switch (screenSize) {
        case IndirectScreenSize.Default:
            resizeCanvas(canvas, IndirectScreenSize.HD_720);
            break;
        case IndirectScreenSize.MatchCanvas:
            resizeCanvas(canvas, [canvas.width, canvas.height]);
            break;
        case IndirectScreenSize.GameBoy:
            resizeCanvas(canvas, [160, 144]);
            break;
        case IndirectScreenSize.NES:
            resizeCanvas(canvas, [256, 240]);
            break;
        case IndirectScreenSize.GameBoy:
            resizeCanvas(canvas, [160, 144]);
            break;
        case IndirectScreenSize.HD_1080:
            resizeCanvas(canvas, [1920, 1080]);
            break;
        case IndirectScreenSize.HD_720:
            resizeCanvas(canvas, [1280, 720]);
            break;
        default:
            [canvas.width, canvas.height] = screenSize;
            break;
    }
};
exports.resizeCanvas = resizeCanvas;
//# sourceMappingURL=ScreenSize.js.map