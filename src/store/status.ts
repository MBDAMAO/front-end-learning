import { defineStore } from "pinia";
export const useToken = defineStore("token", () => {
  var token = localStorage.getItem("token");
  return { token };
});
