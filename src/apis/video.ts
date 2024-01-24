import request from "@/utils/request";

/**
 *
 */
export function getVideos() {
  return request({
    url: "/getVideos",
    method: "get",
  });
}
