import request from '../config/Request'

const domain = process.env.REACT_APP_API_PURCHASE_BASE_URL
export function getPurchases() {
  return request.get(`${domain}`, {}).then((response) => response)
}
export function deletePurchase(code) {
  return request.delete(`${domain}/${code}`, {}).then((response) => response)
}
export function editPurchase(code, value, date) {
  return request
    .put(`${domain}/${code}`, { code, value, date })
    .then((response) => response)
}
export function createPurchase(code, value, date) {
  return request
    .post(`${domain}/`, { code, value, date })
    .then((response) => response)
}

export function getCashback() {
  return request.get(`${domain}/cashback`).then((response) => response)
}
