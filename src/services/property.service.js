import prisma from '../prisma.js';

export const getProperties = async () => {
  return await prisma.property.findMany({
    include: {
      _count: {
        select: { likes: true },
      },
    },
  });
};

export const createProperty = async (propertyData, ownerId) => {
  const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges, rentPrice, images } = propertyData;

  const property = await prisma.property.create({
    data: {
      ownerId,
      place,
      area,
      bedrooms,
      bathrooms,
      nearbyHospitals,
      nearbyColleges,
      rentPrice,
      images
    }
  });

  return property;
};

export const getPropertyById = async (propertyId) => {
  return await prisma.property.findUnique({
    where: { id: propertyId }
  });
}

export const getPropertiesByOwner = async (ownerId) => {
  return await prisma.property.findMany({
    where: { ownerId }
  });
};

export const updateProperty = async (propertyId, propertyData) => {
  return await prisma.property.update({
    where: { id: propertyId },
    data: propertyData
  });
};

export const deleteProperty = async (propertyId) => {
  return await prisma.property.delete({
    where: { id: propertyId }
  });
};
