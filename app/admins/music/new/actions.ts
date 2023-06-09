"use server";
import cloudinary from "@/lib/cloudinary";

  {/** @ts-expect-error */}
export async function processPost(data) {

    const imgUrl = await uploadImage(data.image)    

    const musicData = {
        title: data.title,
        description: data.description,
        singer: data.singer,
        release_date: data.release_date.toString(),
        image: imgUrl
      };
    const res = await fetch("http://localhost:3001/api/music/create",{
        method: 'POST',
        body: JSON.stringify(musicData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res.json()
    if (res.ok) {

    }
    
}

export async function uploadImage(imageObject: any) {
    try {
        console.log("done");
        console.log(imageObject[0]);
        
    const imagePath: string = imageObject[0].path;

    const uploadOptions = {
        file: imagePath, // Pass the file path as the 'file' parameter
      };
      console.log(imagePath);
      
    // const uploadImage = await cloudinary.uploader.upload()
    console.log("solved");
    
    // const url = uploadImage.secure_url
    // console.log("The posted url is :");
    // console.log(url);
    
    // return url;
    }catch(error) {
        console.log("logging Upload Error");
        
        console.log(error);
        
    }
}