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
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post created Successfully",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      image: "images/boat.png",
      creator: {
        name: "Sadman",
      },
      createdAt: new Date(),
    },
  });
};
