import axios from "axios";
import { SERVER_URL as serverUrl } from "../../constants";

export const getWithdrawEvents = async (address = false) => {
  try {
    const response = await axios.get(
      `${serverUrl}/latest-events?type=stream.withdraw&${!address ? "" : `user=${address}`}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Couldn't get the withdraw events from the server`);
  }
};
