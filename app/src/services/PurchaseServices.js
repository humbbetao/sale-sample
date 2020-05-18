import request from '../config/Request'

const domain = ''
export function getPurchases() {
  return request.get(`${domain}/purchases`, {}).then((response) => response)
}
export function deletePurchase(code) {
  return request
    .delete(`${domain}/purchases/${code}`, {})
    .then((response) => response)
}
export function editPurchase(code, value, date) {
  return request
    .put(`${domain}/purchases/${code}`, { code, value, date })
    .then((response) => response)
}
export function createPurchase(code, value, date) {
  return request
    .post(`${domain}/purchases/`, { code, value, date })
    .then((response) => response)
}
