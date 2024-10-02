import axios from "axios";

const apiAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

////////interceptor para agrgar apikey
apiAuth.interceptors.request.use(
  async (config) => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY;
    if (apikey) {
      config.params = {
        ...config.params,
        appid: apikey,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { apiAuth };
