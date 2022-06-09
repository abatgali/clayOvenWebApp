// returns all live menu items

import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const live_items = await prisma.live_menu.findMany({
        include: {
            categories: true,
            items: true
        }
    });
    res.json(live_items);
}