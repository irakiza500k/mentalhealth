import Post from "../models/Post.js";


export const createPost = async (req, res) => {

  try {

    const post = await Post.create(req.body);

    res.status(201).json({
      success: true,
      post
    });

  }

  catch (error) {

    res.status(500).json({
      success: false
    });

  }

};


export const getPosts = async (req, res) => {

  try {

    const posts = await Post.findAll();

    res.status(200).json({
      success: true,
      posts
    });

  }

  catch (error) {

    res.status(500).json({
      success: false
    });

  }

};