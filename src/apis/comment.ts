import request from "@/utils/request";

export function getVideoComments(vid: string | undefined) {
  return request({
    url: "/comment/videoComments/" + vid,
    method: "get",
  });
}
