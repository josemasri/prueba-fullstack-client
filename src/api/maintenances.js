import axiosClient from "./client";

export const getMaintenances = async () => {
  const res = await axiosClient.get("/maintenance");
  console.log(res.data);
  return res.data;
};


export const addMaintenance = async (maintenance) => {
    const res = await axiosClient.post("/maintenance", maintenance);
    console.log(res.data);
    return res.data;
  };
  