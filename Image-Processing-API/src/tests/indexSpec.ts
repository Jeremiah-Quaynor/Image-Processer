// import statements
import supertest from "supertest";
import sharp from "sharp";
import fs from 'fs';
import { app,resizeImage } from "..";


// creating test server
const request = supertest(app);

// suite for resize image endpoint
describe('Testing endpoint responses', ()=> {
    it('get an endpoint', async()=> {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });
});

// suite for resize Image function
describe('Testing resize Image Function', ()=> {
    it('resize an image', async()=> {
        const inputImage = 'saitama'

        // change the path to the directory of the file
        const outputImage = `${__dirname}/Image-Processing-API/src/assets/thumb/saitama-resized.jpg`
        const width = 300;
        const height = 300;

        resizeImage(inputImage,width,height);
        sharp(outputImage).metadata().then(metadata => {
            expect(metadata.width).toEqual(300);
            expect(metadata.height).toEqual(300);
        })
    });
});

