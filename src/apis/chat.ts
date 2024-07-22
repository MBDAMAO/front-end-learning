import request from "@/utils/request";

export function getChatList() {
    return request({
        url: "/chat/list",
        method: "get",
    });
}

export function getChatHistory(id:any) {
    return request({
        url: `/chat/history`,
        data: {
            "uid" : id,
            "page":1,
            "pageSize":10,
        },
        method: "post",
    });
}