// pages/api/login/signin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handleSignIn(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (!user.firstName || !user.lastName || !user.address || !user.zipCode || !user.contactNumber || !user.gender || !user.birthday || !user.age) {
      return res.status(200).json({ message: 'Signed in successfully!', isNewUser: true });
    } else {
      return res.status(200).json({ message: 'Signed in successfully!', isNewUser: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
