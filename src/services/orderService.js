/* 
 * Uncomment this block when using the actual API from the config.json

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

* Uncomment this block when using the actual API from the config.json
*/

/*** ##################### ***/
/** Start of Fake API**/

import { data } from "./fakeOrders.json";
import { workersList } from "./fakeWorkers.json";
import _ from "lodash";

export function getOrders() {
  return Promise.resolve({ data });
}

export function getWorker(id) {
  const result = _.find(workersList, { worker: { id } });
  return Promise.resolve({ data: result });
}

/** End of the Fake API**/
/*** ##################### ***/

export default {
  getOrders,
  getWorker
};
