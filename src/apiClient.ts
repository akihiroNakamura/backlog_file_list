import axios, { AxiosResponse, AxiosError } from "axios";

async function requestGet(url: string, params: any): Promise<AxiosResponse> {
  axios.interceptors.request.use((request) => {
    //console.log("Starting Request: ", request);
    return request;
  });
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
        reject(e);
      });
  });
}

export default requestGet;
