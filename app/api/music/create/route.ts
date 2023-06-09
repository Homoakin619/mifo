import { connectDb } from "@/lib/database";
import Music from "@/models/Music";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        const date_released = new Date(data.date_released);
        data.date_released = date_released
        
        await connectDb();
        
        const musicExists = await Music.findOne({title:data.title})
        if (!musicExists){
            let slug: string = data.title.replaceAll(" ","-")
            const newMusic = new Music({
                ...data,slug:slug.toLowerCase(),title: data.title.trim()
            })
            await newMusic.save()

            return new NextResponse(JSON.stringify({"message":"Music created successfully"}),{status: 201})
        }else {
            return new NextResponse(JSON.stringify({"message":"Music exists, choose another title"}),{status:400})
        }
        
    } catch (error) {
        return new NextResponse(JSON.stringify({"message":""+error}),{status: 400})
    }
}