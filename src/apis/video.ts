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

export function like(vid: string, status: string) {
  return request({
    url: "/video/like/" + vid + "/" + status,
    method: "put",
  });
}

export function getLikeStatus(vid: string) {
  return request({
    url: "/video/getLikesStatus/" + vid,
    method: "get",
  });
}
