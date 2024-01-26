import request from "@/utils/request";

/**
 *
 */
export function getVideos() {
  return request({
    url: "/video/recommend",
    method: "get",
  });
}
