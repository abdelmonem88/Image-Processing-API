import { Request, Response } from "express";
import path from "path";
import sharp from "sharp";

const resizeFunc = async (
  req: Request,
  res: Response,
  imgLocation: string,
  currentWidth: number,
  currentHirght: number
) => {
  try {
    const name = req.query.imageName as string;
    const resizedImage =
      path.resolve("./") +
      `/images/thumbnails/${name}_${currentWidth}_${currentHirght}.png`;

    await sharp(imgLocation)
      .resize(currentWidth, currentHirght)
      .toFile(`images/thumbnails/${name}_${currentWidth}_${currentHirght}.png`);

    res.sendFile(resizedImage);
  } catch (error) {
    res.status(404).send("Something went wrong!!");
  }
};

export default resizeFunc;
