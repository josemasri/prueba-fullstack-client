import axiosClient from "./client";

export const getCars = async () => {
  const res = await axiosClient.get("/car");
  console.log(res.data);
  return res.data;
};
