import { fetchAllMusics } from "@/utils/utilities";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest, res: NextResponse) => {
    const query = await fetchAllMusics()
    // res.json({query})
    // return new NextResponse( JSON.stringify({"data":query}))
}