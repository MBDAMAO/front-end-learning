import request from "@/utils/request";

export function getChatList() {
    return request({
        url: "/chat/list",
        method: "get",
    });
}

export function getChatHistory(id:string) {
    return request({
        url: `/chat/history/${id}`,
        method: "get",
    });
}