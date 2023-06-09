import { connectDb } from "@/lib/database";
import jwt from "jsonwebtoken"
import User from "@/models/User";
import bcrypt from "bcrypt"
import getConfig from "next/config";
import { NextResponse } from "next/server";



export const POST = async (req: any) => {
    const data = await req.json();
    
    const secret = process.env.CONFIG_SECRET
    
   try {
        await connectDb();
        const userExists = await User.findOne({username: data.username})
        if (userExists) {
            if(!(userExists && bcrypt.compareSync(data.password,userExists.password_hash))) {
                throw new Error("User not available")
            } else {        
                const token = jwt.sign({sub: userExists._id},""+secret,{expiresIn: '7d'});
                const datas = {
                    ...userExists.toJSON(),token
                }
                return new NextResponse(JSON.stringify(datas),{status:200})
            }
        }else {
            console.log("User does not exist")
        }       
       
   } catch (e) {
       return new Response("Failed to create User",{status: 500})
   }
};

