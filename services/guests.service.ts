import { api } from "@/lib/api";
import { Guest } from "@/types/guest";

export const getGuests = async () => {
  try {
    const response = await api.get("/guests");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addGuest = async (guest: Guest) => {
  try {
    const response = await api.post("/guests", guest);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const countGuests = async () => {
  try {
    const response = await api.get("/guests/count");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
