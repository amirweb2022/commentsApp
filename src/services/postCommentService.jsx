import http from "./httpServices";

export function postComment(data) {
  return http.post("/comments", data);
}