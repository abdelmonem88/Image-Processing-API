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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const resize_1 = __importDefault(require("../../utilities/resize"));
const router = express_1.default.Router();
const imagesNames = [
    "encenadaport",
    "fjord",
    "icelandwaterfall",
    "palmtunnel",
    "santamonica",
];
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.imageName;
    const width = req.query.width;
    const currentWidth = parseInt(width);
    const hieght = req.query.hieght;
    const currentHirght = parseInt(hieght);
    const imgLocation = path_1.default.resolve("./") + `/images/${name}.jpg`;
    const resizedImage = path_1.default.resolve("./") + `/images/thumbnails/${name}_${width}_${hieght}.png`;
    // check if imageName is exists
    if (!name) {
        return res.status(400).send("Bad request, image name must be exist");
    }
    // check if image width is exists
    if (!width) {
        return res.status(400).send("Bad request, image width must be exist");
    }
    // check if image hieght is exists
    if (!hieght) {
        return res.status(400).send("Bad request, image hieght must be exist");
    }
    // check if user request not exists image
    if (imagesNames.includes(name) === false) {
        return res.status(404).send("Image not found");
    }
    // check for proper image width and hieght
    if (currentWidth > 2000 || currentHirght > 2000) {
        return res
            .status(400)
            .send("Bad request, image width and hieght can't be more than 2000");
    }
    fs_1.default.access(resizedImage, (err) => {
        if (err) {
            (0, resize_1.default)(req, res, imgLocation, currentWidth, currentHirght);
        }
        else {
            res.sendFile(resizedImage);
        }
    });
}));
exports.default = router;
