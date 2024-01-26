import request from "@/utils/request";
interface loginDTO {
  username: string;
  password: string;
}
export function login(data: loginDTO) {
  return request({
    url: "/user/login",
    method: "post",
    data: data,
  });
}
