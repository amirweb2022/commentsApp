import http from "./httpServices";

export function postComment(data) {
  const token = "97e0d315477f435489cf04904c9d0e6co";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}