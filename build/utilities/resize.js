"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const resizeFunc = (req, res, imgLocation, currentWidth, currentHirght) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.imageName;
        const resizedImage = path_1.default.resolve("./") +
            `/images/thumbnails/${name}_${currentWidth}_${currentHirght}.png`;
        yield (0, sharp_1.default)(imgLocation)
            .resize(currentWidth, currentHirght)
            .toFile(`images/thumbnails/${name}_${currentWidth}_${currentHirght}.png`);
        res.sendFile(resizedImage);
    }
    catch (error) {
        res.status(404).send("Something went wrong!!");
    }
});
exports.default = resizeFunc;
