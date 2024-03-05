import request from "@/utils/request";

export function getVideoComments(vid: string) {
  return request({
    url: "/comment/videoComments/" + vid,
    method: "get",
  });
}
