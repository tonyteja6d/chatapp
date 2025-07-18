import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndsetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
   
    try {
        const {fullName, username,password,confirmPassword,gender} = req.body;
        if(password !==confirmPassword){
            return res.status(400).json({error:"password do not match"})
         }
         const user = await User.findOne({username});

         if (user){
            return res.status(400).json({error:"Username already exists"})
         }
//Hash Password here

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

         const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
         const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

         const newUser = new User ({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilepic: gender === "male" ? boyProfilepic : girlProfilepic,
         })

         if(newUser){
            //Generate JWT token here

            generateTokenAndsetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
               _id:newUser._id,
               fullName: newUser.fullName ,
               username: newUser.username,
               profilepic: newUser.profilepic,
            })
         }else{
            res.status(400).json({error:"Invalid user data"})
         }
    } catch (error) {
        console.log("error in singup controller", error.message)
        res.status(500).json({error:"Internal server Error"})
    } 

}

export const login = async (req,res)=>{
    try {
        const {username ,password}= req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});

        }

        generateTokenAndsetCookie(user._id, res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilepic:user.profilepic,
        });



    } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({error:"Internal server Error"})
        
    }
}

export const logout = async (req,res)=>{
    try {
        
       res.cookie("jwt","",{maxAge:0});
       res.status(200).json({message:"Logged out Successfully yoo"})
        
    } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({error:"Internal server Error"})
    }
}