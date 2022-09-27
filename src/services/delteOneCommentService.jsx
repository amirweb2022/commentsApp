import http from "./httpServices";

export function deleteOneCommet(id) {
  return http.delete(`/comments/${id}`);
}