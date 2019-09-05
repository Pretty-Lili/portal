import request from '@/utils/request'

// export function GetMenuTree () {
//   return request({
//     url: '/api/resource/getFuncTree',
//     method: 'get',
//     params: {
//       userId: '',
//       appId: '',
//       funcType: ''
//     }
//   })
// }

export function GetMenuTree () {
  return request({
    url: '/api/menuTree',
    method: 'get'
  })
}
