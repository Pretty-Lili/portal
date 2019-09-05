import request from '@/utils/request'

export function GetLoginInfo () {
  return request({
    url: '/test/getLoginInfo',
    method: 'get'
  })
}
