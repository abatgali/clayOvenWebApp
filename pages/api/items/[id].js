// returns a specific item

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        let itemid = parseInt(req.query.id)
        const item = await prisma.items.findUnique({
            where: {
                item_id: itemid
            },
        });
        res.json(item);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}