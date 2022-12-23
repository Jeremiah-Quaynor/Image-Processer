const sharp = require('sharp');

// resize image function
export async function resizeImage(
  filename: string,
  width: number,
  height: number
) {
  await sharp(`src/assets/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`src/assets/thumb/${filename}-${width}-${height}.jpg`);
}
