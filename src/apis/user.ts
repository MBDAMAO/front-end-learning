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
export function getInfo() {
  return request({
    url: "/user/info",
    method: "get",
  });
}
export function getHistory() {
  return request({
    url: "/user/history",
    method: "get",
  });
}
export function getCollection() {
  return request({
    url: "/user/collections",
    method: "get",
  });
}
export function getLike() {
  return request({
    url: "/user/likes",
    method: "get",
  });
}
export function getPost() {
  return request({
    url: "/user/posts",
    method: "get",
  });
}
export function getWorks() {
  return request({
    url: "/user/works",
    method: "get",
  });
}
