import express from "express";
import { MongoClient, MongoServerError } from 'mongodb';
import Post from "../schemas/post.js";

const client = new MongoClient('mongodb://expressapi-mongodb:27017');
const postsRouter = express.Router();

postsRouter.use(express.json());

/**
 * @swagger
 * /new:
 *   post:
 *     description: Creates a new post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Data'
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Invalid request body.
 */
postsRouter.post('/new', async (req, res, next) => {
  console.log('hit /new !');
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });

    console.log('awaiting save', post);

    await post.save();

    // const result = await collection.insertOne({ text: req.body.text });

    res.json("req OK");
  }
  catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`expressapi: mongo: ${error}`);
    }

    next(error);
    res.status(400).json({ error: 'Invalid request body' });
  }
});

postsRouter.get('/get', async (req, res, next) => {
  const posts = await Post.find();
  res.json({
    posts: posts
  });
});




export default postsRouter;