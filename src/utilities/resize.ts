import sharp from "sharp";

const resizeFunc = async (
  imgLocation: string,
  currentImageName: string,
  currentWidth: number,
  currentHirght: number
) => {
  const result = await sharp(imgLocation)
    .resize(currentWidth, currentHirght)
    .toFile(
      `images/thumbnails/${currentImageName}_${currentWidth}_${currentHirght}.png`
    );

  return result;
};

export default resizeFunc;
