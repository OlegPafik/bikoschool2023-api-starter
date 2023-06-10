import express from "express";

const router = express.Router();

// GET /api/memes
router.get('/memes', (req, res, next) => {
    res.sendStatus(200);
  })

export default router;