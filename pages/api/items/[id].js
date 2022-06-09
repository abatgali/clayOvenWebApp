// returns a specific item

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const items = await prisma.items.findUnique({
            where: {
                item_id: parseInt(req.query.idu)
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
    res.json(items);
}