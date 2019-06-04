import axios from 'axios'
import {Loading, Message} from 'element-ui'
let headerUrl = '/api'

// 创建axios实例
const service = axios.create({
    timeout: 60000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
    // 定义全局头部Url
    config.url = headerUrl + config.url
    return config
}, error => {
    // 错误抛出Message
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        // 返回code处理
        switch (response.data.code) {
        case '200':
            if (!response.data.status) {
                Message.warning({
                    message: response.data.message
                })
            }
            return response.data
        case 200:
            return response.data
        // 状态为 -1 表示账号已经禁用
        case '-1':
            Message.error({
                message: response.data.message
            })
            return response.data
        default:
            Message.error({
                message: response.data.message || '网络超时'
            })
            return response.data
        }
    },
    error => {
        // 错误判断
        if (error && error.response) {
            switch (error.response.status) {
            case 400:
                error.message = '请求错误'
                break

            case 401:
                error.message = '未授权，请登录'
                break

            case 403:
                error.message = '权限不足无法访问'
                break

            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`
                break

            case 408:
                error.message = '请求超时'
                break

            case 500:
                error.message = '请求失败，请重试'
                break

            case 501:
                error.message = '服务未实现'
                break

            case 502:
                error.message = '网络请求失败'
                break

            case 503:
                error.message = '服务不可用'
                break

            case 504:
                error.message = '网络异常，请求超时'
                break

            case 505:
                error.message = 'HTTP版本不受支持'
                break

            default:
            }
        }

        // 错误抛出Message
        Message.error({
            message: error.message
        })

        return Promise.reject(error)
    }
)
export default service
