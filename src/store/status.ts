import {defineStore} from "pinia";
import {ref} from "vue";

export const useToken = defineStore("token", () => {
    const token = localStorage.getItem("token");
    return {token};
});

export const useUserStore = defineStore("user", () => {
    const isLoggedIn = ref(false);
    const token = ref("")
    const getToken = () => {
        if (token.value == null || token.value == "") {
            token.value = localStorage.getItem("token");
        }
        return token.value
    }
    const setToken = (ntoken: string) => {
        token.value = ntoken
    }
    const login = () => {
        isLoggedIn.value = true;
    };
    const logout = () => {
        isLoggedIn.value = false;
    };
    return {isLoggedIn, login, logout, getToken, setToken};
});
