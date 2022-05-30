// returns items of a specific category

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {

    // retrieving uri id param from request
    const param = parseInt(req.query.id);

    // using orm to retrieve related items
    const items = await prisma.live_menu.findMany({
        select: {
            items: true,
            categories: true
        },
        where: {
            category_id: param
        }
    });

    res.json(items);
}