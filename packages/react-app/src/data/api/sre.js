import axios from "axios";
import { SRE_SERVER_URL as SreServerUrl } from "../../constants";

export const getSreBuilder = async address => {
  try {
    const response = await axios.get(`${SreServerUrl}/builders/${address}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
