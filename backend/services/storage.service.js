import ImageKit from '@imagekit/nodejs';
import dotenv from "dotenv";

const result = dotenv.config({ debug: true });
console.log(result);
const client = new ImageKit({
     privateKey: process.env.IMAGEKIT_PRIVATE_KEY 
})
async function uploadFile(buffer){
const response = await client.files.upload({
  file: buffer.toString("base64"),
  fileName: 'image.jpg',
});

return response
}
export default uploadFile