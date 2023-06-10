import { connectDb } from "@/lib/database";
import Music from "@/models/Music";
import User from "@/models/User";
import bcrypt from "bcrypt"
import { forEachChild } from "typescript";

export default async function createUser(data: AuthType) {
   try{ 
    let password_hash;
    await connectDb();
    const userExists = await User.findOne({username: data.username});
    if (!userExists) {
        if (data.password) {
            password_hash = bcrypt.hashSync(data.password, 10);
        }
        const user_data = {username: data.username,password_hash: password_hash}
        const user = new User(user_data);
        await user.save();
    }
        return {status: 200}
    }catch(error) {
        console.log(error)
    }
    
}


export async function fetchAllMusics() {
    await connectDb();
    const query = await Music.find({});
    const result: any[] = [];
    query.map((item)=> {
        const release = item.date_released
        item.date_released = release.toString()
        result.push(item.toJSON())
    })
    return result;
    // return JSON.stringify(result);
}


export async function fetchMusicByTitle(title: string) {
    await connectDb();
    console.log(title);
    
    const query = await Music.findOne({title: title});
    console.log(query);
    
    const release = query.date_released
    query.date_released = release.toString()
    query.toJSON();
    return JSON.stringify(query)
}