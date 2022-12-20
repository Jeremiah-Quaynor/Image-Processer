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
        const outputImage ="/home/jeremiah/Projects/noodejs/Image-Processer/Image-Processing-API/src/assets/thumb/saitama-resized.jpg"
        const width = 300;
        const height = 300;

        resizeImage(inputImage,width,height)

        const output =  sharp(outputImage);
        expect((await output.metadata()).width).toEqual(300);
        expect((await output.metadata()).height).toEqual(300);
    });
});

