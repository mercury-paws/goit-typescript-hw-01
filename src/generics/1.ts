import axios, { AxiosResponse } from "axios";

async function fetchData(url: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message}`);
  }
}
