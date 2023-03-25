import Post from '../models/Posts.js';

// ?CREATE
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturepath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturepath,
            picturepath,
            likes: {},
            comments: []
        })
        await newPost.save();
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
