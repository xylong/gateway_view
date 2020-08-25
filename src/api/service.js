import request from '@/utils/request'

export function serviceList(query) {
  return request({
    url: '/service/https',
    method: 'get',
    params: query
  })
}