const express = require("express")
const logger = require("../util/logger")
const blogRouter = express.Router(); 
const Blog = require("../models/blogs")

blogRouter.get("/", (request, response) => {
    Blog.find({}).then(blog => {
        response.status(200).json(blog)
    })
    .catch(error => {
        response.status(404).json({"response":"not found"})
    })
})

blogRouter.post("/", async (request, response) => {
    try {
      const newBlog = new Blog(request.body);
      const result = await newBlog.save();
      response.status(201).json(result);
    } catch (error) {
      response.status(401).json(error);
    }
  });

module.exports = blogRouter;