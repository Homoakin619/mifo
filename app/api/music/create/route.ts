import { connectDb } from "@/lib/database";
import Music from "@/models/Music";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    
    try {
        const data = await req.json();
        console.log(data);
        
        const date_released = new Date(data.date_released);
        data.date_released = date_released
        
        await connectDb();
        const musicExists = await Music.findOne({title:data.title})
        if (!musicExists){
            const newMusic = new Music({
                ...data
            })
            await newMusic.save()
            return new Response(JSON.stringify(newMusic),{status: 201})
        }else {
            return new NextResponse("Music exists, choose another title",{status:400})
        }
        
    } catch (error) {
        console.log(error);
        
        return new NextResponse(""+error,{status: 400})
    }
    // return new Response("hello",{status: 201})
}