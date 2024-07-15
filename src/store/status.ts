import { defineStore } from "pinia";
import { ref } from "vue";

export const useToken = defineStore("token", () => {
  const token = localStorage.getItem("token");
  return { token };
});

export const useUserStore = defineStore("user", () => {
  let isLoggedIn = ref(false);
  const login = () => {
    isLoggedIn.value = true;
  };
  const logout = () => {
    isLoggedIn.value = false;
  };
  return { isLoggedIn, login, logout };
});
