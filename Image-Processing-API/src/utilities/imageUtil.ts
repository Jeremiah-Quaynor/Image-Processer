const  sourceDir = './src/assets/full'
const fs = require('fs');
const sharp = require('sharp')
let data: string;



async function call () {
    // await fs.readdir(sourceDir, (err: any,files: any) => {
    //     if (err) {
    //         console.log("error")
    //     }
    //     data = files[0]
    
    // })

    await sharp(`src/assets/full/saitama.jpg`)
    .resize(300,200)
    .toFile('src/assets/thumb/saitama.jpg');
}


function ApiImage (req: any, res: { sendFile: (arg0: string) => void; }){
    call()
    res.sendFile('/home/jeremiah/Projects/noodejs/Image-Processer/Image-Processing-API/src/assets/thumb/saitama.jpg')
}






export default ApiImage