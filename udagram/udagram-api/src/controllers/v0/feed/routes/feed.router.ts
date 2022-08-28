import { Request, Response, Router } from 'express';
import { FeedItem } from '../models/FeedItem';
import * as AWS from '../../../../aws';
import { requireAuth } from "../../users/routes/auth.router";

const router: Router = Router();

// Get all feed items
router.get('/', async (req: Request, res: Response) => {
  const items = await FeedItem.findAndCountAll({ order: [['id', 'DESC']] });
  items.rows.map((item) => {
    if (item.url) {
      item.url = AWS.getGetSignedUrl(item.url);
    }
  });
  res.send(items);
});

// Get a feed resource
router.get('/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const item = await FeedItem.findByPk(id);
    res.send(item);
  });

// Get a signed url to put a new item in the bucket
router.get('/signed-url/:fileName',
  requireAuth,
  async (req: Request, res: Response) => {
    const { fileName } = req.params;
    let url: string
    try {
      url = AWS.getPutSignedUrl(fileName);
    } catch (e) {
      console.log(e);
    }
    res.status(201).send({ url: url });
  });

// Create feed with metadata
router.post('/',
  requireAuth,
  async (req: Request, res: Response) => {
    const caption = req.body.caption;
    const fileName = req.body.url; // same as S3 key name

    if (!caption) {
      return res.status(400).send({ message: 'Caption is required or malformed.' });
    }

    if (!fileName) {
      return res.status(400).send({ message: 'File url is required.' });
    }

    const item = await new FeedItem({
      caption: caption,
      url: fileName,
    });

    const savedItem = await item.save();

    savedItem.url = AWS.getGetSignedUrl(savedItem.url);
    res.status(201).send(savedItem);
  });

export const FeedRouter: Router = router;
