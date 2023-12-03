import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfileurl) => {
  try {
    if (!localfileurl) return null;

    const response = await cloudinary.uploader.upload(localfileurl, {
      resource_type: "auto",
    });
    fs.unlinkSync(localfileurl);
    console.log("file uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    //for safe cleaning purpose we have to remove the file from our temporary server to prevent malicious data in case the file is not uploaded
    //We will use unlink option of the filesysytem(fs) of node
    fs.unlinkSync(localfileurl); //remove the temporary dile as the upload is failed it should also be async
    return null;
  }
};

export { uploadOnCloudinary };
