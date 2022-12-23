import sharp from 'sharp';
import { resizeImage } from "../../util/resizeImage"

describe('Testing resize Image Function', () => {
    it('resize an image', async () => {
      const inputImage = 'saitama';
  
      // change the path to the directory of the file
      const outputImage = `${__dirname}/Image-Processing-API/src/assets/thumb/saitama-resized.jpg`;
      const width = 300;
      const height = 300;
  
      resizeImage(inputImage, width, height);
      sharp(outputImage)
        .metadata()
        .then((metadata) => {
          expect(metadata.width).toEqual(300);
          expect(metadata.height).toEqual(300);
        });
    });
  });