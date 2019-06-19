import http from "./httpService";
import { apiUrl } from "./config.json";

const apiEndPoint = `${apiUrl}/assessment`;

const workerUrl = id => {
  return `${apiEndPoint}/workers/${id}`;
};

export function getOrders() {
  return http.get(`${apiEndPoint}/work_orders`);
}

export function getWorker(id) {
  return http.get(workerUrl(id));
}

export default {
  getOrders,
  getWorker
};
