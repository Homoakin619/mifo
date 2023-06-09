import { connectDb } from "@/lib/database";
import User from "@/models/User";
import bcrypt from "bcrypt"

export const POST = async (req: any) => {
    const data = await req.json();
    // const data = JSON.parse(requestData)
   try {
    console.log(data.username);
    
        await connectDb();
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(data.password,salt)
        const userExists = await User.exists({username: data.username})
        console.log(userExists);
        
        if (!userExists) {
            const newUser = new User({
                username: data.username,
                password_hash: hash
            });
            await newUser.save();
            return new Response(JSON.stringify(newUser),{status: 201})
        }else {
            throw new Error("Username already taken")
        }
        
       
   } catch (e) {
       console.log("writing error")
       console.log(e);
       
       return new Response("Failed to create User",{status: 500})
   }
};

