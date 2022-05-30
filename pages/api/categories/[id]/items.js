import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const items = await prisma.items.getItemById(req.query.id);
    res.json(items);
}