import request from '@/utils/request'

export function serviceList(query) {
  return request({
    url: '/service/https',
    method: 'get',
    params: query
  })
}

export function serviceAddHttp(query) {
    return request({
      url: '/service/https',
      method: 'post',
      params: query
    })
}

export function serviceDetail(query) {
    return request({
      url: '/service/http',
      method: 'get',
      params: query
    })
}

export function serviceUpdateHttp(query) {
    return request({
      url: '/service/https',
      method: 'put',
      params: query
    })
}

export function serviceDelete(query) {
    return request({
      url: '/service/https',
      method: 'delete',
      params: query
    })
}