import request from "@/utils/request";

export function getVideoComments(vid: string | undefined) {
  return request({
    url: "/comment/list/" + vid,
    method: "get",
  });
}
