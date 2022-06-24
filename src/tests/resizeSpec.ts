import superTest from "supertest";
import app from "../index";

const request = superTest(app);

describe("test the resize endpint", () => {
  it("test if user provided right query params", async () => {
    const response = await request.get(
      "/api/resize?imageName=fjord&width=200&hieght=300"
    );
    expect(response.status).toBe(200);
  });

  it("test if user didn't provided image name", async () => {
    const response = await request.get(
      "/api/resize?imageName=&width=200&hieght=300"
    );
    expect(response.status).toBe(400);
  });

  it("test if user didn't provided image width", async () => {
    const response = await request.get(
      "/api/resize?imageName=fjord&width=&hieght=300"
    );
    expect(response.status).toBe(400);
  });

  it("test if user didn't provided image hieght", async () => {
    const response = await request.get("/api/resize?imageName=fjord&width=200");
    expect(response.status).toBe(400);
  });

  it("test if user provided image width or hiegth more than 2000", async () => {
    const response = await request.get(
      "/api/resize?imageName=fjord&width=2500&hieght=300"
    );
    expect(response.status).toBe(400);
  });

  it("test if user request not exists image", async () => {
    const response = await request.get(
      "/api/resize?imageName=anyName&width=200&hieght=300"
    );
    expect(response.status).toBe(404);
  });
});
