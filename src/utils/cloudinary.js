import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)return null;
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file is uploaded successfully
        console.log("File uploaded successfully", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
};

// cloudinary.v2.uploader.upload("https://res.cloudinary.com/djlkkhu8o/image/upload/q_auto/f_auto/v1778416726/cld-sample-5.jpg",
//     {public_id: "cld-sample-5"}, 
//     function(error, result) {console.log(result);
// });

export {uploadOnCloudinary};