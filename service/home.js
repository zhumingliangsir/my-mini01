import request from "./network.js"
export function getMultiData() {
  return request({
    url: '/api/v1/home/multidata',
  })
}

export function getGoodsData(type, page) {
  return request({
    url: '/api/v1/home/data',
    data: {
      type,
      page
    }
  })
}