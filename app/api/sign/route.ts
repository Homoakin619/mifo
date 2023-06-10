import { sign_request } from "@/lib/middlewares";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try{
    const {timestamp,signature} = sign_request()
    
    const responseBody = {
        timestamp:timestamp,
        signature:signature,
        }
    return NextResponse.json(responseBody)
    }catch(error) {
        return new Response("error",{status:400})
    }
}