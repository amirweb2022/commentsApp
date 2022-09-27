import http from "./httpServices";

export function getOneCommet(id) {
  return http.get(`/comments/${id}`);
}