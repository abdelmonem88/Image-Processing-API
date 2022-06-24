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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe("test the resize endpint", () => {
    it("test if user provided right query params", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resize?imageName=fjord&width=200&hieght=300");
        expect(response.status).toBe(200);
    }));
    it("test if user didn't provided image name", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resize?imageName=&width=200&hieght=300");
        expect(response.status).toBe(400);
    }));
    it("test if user didn't provided image width", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resize?imageName=fjord&width=&hieght=300");
        expect(response.status).toBe(400);
    }));
    it("test if user didn't provided image hieght", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resize?imageName=fjord&width=200");
        expect(response.status).toBe(400);
    }));
    it("test if user provided image width or hiegth more than 2000", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resize?imageName=fjord&width=2500&hieght=300");
        expect(response.status).toBe(400);
    }));
    it("test if user request not exists image", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/resize?imageName=anyName&width=200&hieght=300");
        expect(response.status).toBe(404);
    }));
});
