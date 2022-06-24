import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import resizeFunc from "../../utilities/resize";
const router = express.Router();
const imagesNames = [
  "encenadaport",
  "fjord",
  "icelandwaterfall",
  "palmtunnel",
  "santamonica",
];

router.get("/", async (req: Request, res: Response) => {
  const name = req.query.imageName as string;
  const width = req.query.width as unknown as string;
  const currentWidth: number = parseInt(width);
  const hieght = req.query.hieght as unknown as string;
  const currentHirght: number = parseInt(hieght);
  const imgLocation = path.resolve("./") + `/images/${name}.jpg`;
  const resizedImage =
    path.resolve("./") + `/images/thumbnails/${name}_${width}_${hieght}.png`;

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

  fs.access(resizedImage, async (err) => {
    if (err) {
      try {
        await resizeFunc(imgLocation, name, currentWidth, currentHirght);
        res.sendFile(resizedImage);
      } catch (error) {
        res.status(404).send("Something went wrong!!");
      }
    } else {
      res.sendFile(resizedImage);
    }
  });
});

export default router;
