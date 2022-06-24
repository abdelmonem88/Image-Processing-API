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
const resize_1 = __importDefault(require("../../utilities/resize"));
describe("test resize function", () => {
    it("test for right params", () => __awaiter(void 0, void 0, void 0, function* () {
        const imgLocation = path_1.default.resolve("./") + `/images/fjord.jpg`;
        const result = yield (0, resize_1.default)(imgLocation, "fjord", 200, 300);
        expect(result).toEqual({
            format: "png",
            width: 200,
            height: 300,
            channels: 3,
            premultiplied: false,
            size: 124133,
        });
    }));
});
