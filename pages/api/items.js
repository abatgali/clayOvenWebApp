// returns all items

import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const items = await prisma.items.findMany();
    res.json(items);
}