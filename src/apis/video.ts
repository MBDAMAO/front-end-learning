import request from "@/utils/request";

/**
 *
 */
export function getVideos() {
  return request({
    url: "/video/feed",
    method: "get",
  });
}

export function like(vid: string | undefined, status: string | undefined) {
  return request({
    url: "/video/like/" + vid + "/" + status,
    method: "put",
  });
}

export function getLikeStatus(vid: string | undefined) {
  return request({
    url: "/video/getLikesStatus/" + vid,
    method: "get",
  });
}

export function getCollection() {
  return request({
    url: "/video/recommend",
    method: "get",
  });
}
