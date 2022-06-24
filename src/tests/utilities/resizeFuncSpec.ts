import path from "path";
import resizeFunc from "../../utilities/resize";

describe("test resize function", () => {
  it("test for right params", async () => {
    const imgLocation = path.resolve("./") + `/images/fjord.jpg`;
    const result = await resizeFunc(imgLocation, "fjord", 200, 300);
    expect(result).toEqual({
      format: "png",
      width: 200,
      height: 300,
      channels: 3,
      premultiplied: false,
      size: 124133,
    });
  });
});
