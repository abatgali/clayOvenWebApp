// returns a specific item

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const items = await prisma.items.findUnique({
        where: {
            item_id: parseInt(req.query.id)
        }
    });
    res.json(items);
}