const { validationResult } = require("express-validator");

const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "this is about the first post",
        image: "images/boat.png",
        creator: {
          name: "Sadman",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(422).json({
      message: "validation failed. title must be 5 char.",
      errors: errors.array(),
    });
  }

  const title = req.body.title;
  const content = req.body.constent;

  const post = new Post({
    title: title,
    content: content,
    imageUrl: "images/boat.png",
    creator: {
      name: "Sadman",
    },
  });

  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Post created Successfully",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
