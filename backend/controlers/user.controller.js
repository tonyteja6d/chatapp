import User from "../models/user.models.js";

export const gerUsersForSidebar = async (req, res)=>{

    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id:{$ne: loggedInUserId }}).select("-password")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("errr in gerUsersForsidebar",error.message)
        res.status(500).json({error:"Internal servers error usercontroller"})
    }
}