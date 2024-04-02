import { defineStore } from "pinia";
export const useToken = defineStore("token", () => {
  const token = localStorage.getItem("token");
  return { token };
});
