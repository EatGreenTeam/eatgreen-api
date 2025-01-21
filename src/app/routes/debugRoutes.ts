import express from 'express';
import mongoose from 'mongoose';
import { Request, Response } from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/debug/collections:
 *   get:
 *     summary: Get all collections and their data (for debugging purposes)
 *     tags: [Debug]
 *     responses:
 *       200:
 *         description: Returns all collections and their data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: array
 *                 items:
 *                   type: object
 *       500:
 *         description: Internal server error
 */
router.get('/collections', async (req: Request, res: Response) => {
  try {
    const collections = await mongoose.connection.db!.listCollections().toArray();
    const data: { [key: string]: any[] } = {};

    for (const collection of collections) {
      const collectionName = collection.name;
      const documents = await mongoose.connection.db!.collection(collectionName).find().toArray();
      data[collectionName] = documents;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching collections:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;