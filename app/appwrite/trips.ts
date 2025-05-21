import { Query } from "appwrite";
import { account, appwriteConfig, database } from "./client";

export const getAllTrips = async (limit: number, offset: number) => {
  const allTrips = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.tripCollectionId,
    [Query.limit(limit), Query.offset(offset), Query.orderDesc("createdAt")]
  );
  if (allTrips.total === 0) {
    console.error("No trips found");
    return { allTrips: [], total: 0 };
  }

  return {
    allTrips: allTrips.documents,
    total: allTrips.total,
  };
};

export const getTripById = async (tripId: string) => {
  const trip = await database.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.tripCollectionId,
    tripId
  );

  if (!trip.$id) {
    console.log("Trip not found");
    return null;
  }

  return trip;
};

export const getTripByUserId = async (userId: string): Promise<number> => {
  const response = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.tripCollectionId,
    [Query.equal("userId", userId)]
  );

  return response.total || 0;
};