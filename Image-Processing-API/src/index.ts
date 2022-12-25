// import statments
import express from 'express';
import fs from 'fs';
import { resizeImage } from "./util/resizeImage";
import { validateInput } from "./util/validateInput";
// port for server
const port = 3000;

// creating express app
export const app = express();


// checking if file is present in the full folder
export const hasFileWithName = (filename: string)=> {
    return new Promise((resolve, reject) => {
      fs.readdir(`${__dirname}/assets/full`,  (err , files: string[]) => {
        if (err) {
          reject(err);
        }
        resolve(files.includes(`${filename}.jpg`));
      });
    });     
  }

export const checkThumbDir = (filename:string, width: number, height: number) => {
  try{
    fs.accessSync(`${__dirname}/assets/thumb/${filename}-${width}-${height}.jpg`, fs.constants.R_OK)
    return true
  }catch (err) {
    return false
  }
}

// landing page endpoint
app.get("/", (req: object,res: { send: (arg0: string) => void; }) => {
    res.send('Welcome to Image Processing Home route')
})


// image proccessor API endpoint
app.get("/api/images", (req: { query: {filename:string, width:string, height:string }; } ,res: { sendFile: (arg0: string) => void; send: (arg0: string) => void; }) => {
    
  // checking whether /src/assets/full has the file
    hasFileWithName(req.query.filename)
    .then(result => {
      // if filename and inputs are correct
      if(validateInput(req) && result ){
        
        const state = checkThumbDir(req.query.filename, Number(req.query.width), Number(req.query.height));

        // checking if the file exist already
        if(state){
          // if yes, serve the image
          res.sendFile(`${__dirname}/assets/thumb/${req.query.filename}-${Number(req.query.width)}-${Number(req.query.height)}.jpg`)
        }else{
          // else generate a new image
          resizeImage(req.query.filename, Number(req.query.width), Number(req.query.height) )

          setTimeout(() => {
            res.sendFile(`${__dirname}/assets/thumb/${req.query.filename}-${Number(req.query.width)}-${Number(req.query.height)}.jpg`)
          }, 2000);

        }

      }else{
        res.send("Enter filename, width and height")
      }

    })
    .catch(err => console.log(err));

})


// starting server
app.listen(port, ()=> {
    console.log(`Sever started on http://localhost:${port}`)
})