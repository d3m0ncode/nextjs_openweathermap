import { apiAuth } from "../index";

const getweather = async (lat: number, lon: number) => {
  try {
    const response = await apiAuth.get(`weather?lat=${lat}&lon=${lon}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getforecast = async (lat: number, lon: number) => {
  try {
    const response = await apiAuth.get(
      `/forecast?lat=${lat}&lon=${lon}&units=metric`
    );
    ///console.log(response.data.list);
    return response.data.list;
  } catch (error) {
    console.log(error);
  }
};
export { getweather, getforecast };
