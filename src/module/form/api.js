import axios from './axios'
/**
 * @name 获取文件下载路径
 * @param res
 */

export function getDownUrlByKeys (res) {
    return axios({
        method: 'GET',
        url: '/system/inner/attachment/v1/getDownUrlByKey',
        params: res
    })
}
/**
 * @name 获取上传token
 * @param res
 */

export function upToken (res) {
    return axios({
        method: 'GET',
        url: '/system/inner/attachment/v1/upToken.pass',
        params: res
    })
}
