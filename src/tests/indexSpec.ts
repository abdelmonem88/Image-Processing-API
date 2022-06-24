import superTest from "supertest";
import app from "../index";

const request = superTest(app);

describe("test the basic route", () => {
  it("test GET / endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
