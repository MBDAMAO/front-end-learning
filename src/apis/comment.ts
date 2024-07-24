import request from "@/utils/request";

export function getVideoComments(vid: string | undefined, cursor: number) {
    return request({
        url: `/comment/list/${vid}?cursor=${cursor}`,
        method: "get",
    });
}
