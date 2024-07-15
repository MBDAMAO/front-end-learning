import request from "@/utils/request";

export function search(text: string) {
  return request({
    url: "/search/" + text,
    method: "get",
  });
}
