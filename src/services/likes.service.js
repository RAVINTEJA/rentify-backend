import prisma from '../prisma.js';

export const likeProperty = async (userId, propertyId) => {
  // Check if the user has already liked the property
  const existingLike = await prisma.like.findFirst({
    where: {
      userId,
      propertyId
    }
  });

  if (existingLike) {
    prisma.like.delete({
      where: {
        id: existingLike.id
      }
    }).then(() => {
      console.log("Deleted like");
    });
    return { message: 'Property unliked' };
  } else {
    prisma.like.create({
      data: {
        userId,
        propertyId
      }
    }).then(() => {
      console.log("Created like");
    });
    return { message: 'Property liked' };
  }
};


export const unlikeProperty = async (userId, propertyId) => {
  await prisma.like.delete({
    where: {
      userId,
      propertyId
    }
  });

  return { message: 'Property unliked' };
};
