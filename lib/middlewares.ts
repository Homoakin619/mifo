import { expressjwt } from "express-jwt";
import getConfig from "next/config";
import cloudinary from "./cloudinary";

// const { serverRuntimeConfig } = getConfig();
const secret = process.env.CONFIG_SECRET;

export default async function jwtMiddleware(req: any, res: any) {
  const middleware = expressjwt({
    secret: "" + secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // api routes that don't require authentication
    ],
  });

  return middleware;
}

export function sign_request() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const apiKey = process.env.NEXT_PUBLIC_CLOUD_API_SECRET as string
  console.log(apiKey);
  
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
    //   eager: 'c_pad,h_300,w_400|c_crop,h_200,w_260',
      folder: "mahbub_foundation",
    },
    apiKey
  );

  return { timestamp, signature,apiKey };
}

// export async function uploadImage(imageObject: any) {
//     try {
//     const image = await cloudinary.uploader.upload(imageObject)
//     const url = image.secure_url
//     console.log("The posted url is :");
//     console.log(url);

//     return url;
//     }catch(error) {
//         console.log("logging Upload Error");

//         console.log(error);

//     }
// }
