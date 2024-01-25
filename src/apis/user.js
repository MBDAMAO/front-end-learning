import request from "@/utils/request.ts";
export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data: data,
  });
}
