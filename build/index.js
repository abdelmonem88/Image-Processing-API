"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const index_1 = __importDefault(require("./routes/index"));
app.get("/", (req, res) => {
    res.send("welcome to image processing API");
});
app.use("/api", index_1.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
exports.default = app;
