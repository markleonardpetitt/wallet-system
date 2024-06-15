// pages/api/user/updateProfile.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { firstName, lastName, address, zipCode, contactNumber, gender, birthday, age } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user?.email ?? '' },
      data: {
        firstName,
        lastName,
        address,
        zipCode,
        contactNumber,
        gender,
        birthday,
        age: parseInt(age, 10),
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
