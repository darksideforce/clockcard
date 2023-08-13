/**
 * 您可以将常用的方法、或系统 API，统一封装，暴露全局，以便各页面、组件调用，而无需 require / import.
 */
const prompt = require('@system.prompt')
const device = require('@system.device')
/**
 * 拼接 url 和参数
 */
function queryString(url, query) {
  let str = []
  for (let key in query) {
    str.push(key + '=' + query[key])
  }
  let paramStr = str.join('&')
  return paramStr ? `${url}?${paramStr}` : url
}

function showToast(message = '', duration = 0) {
  if (!message) return
  prompt.showToast({
    message: message,
    duration
  })
}


function getDevice() {
   return new Promise((resolve, reject) => {
     device.getInfo({
       success: function(ret) {
         resolve(ret)
       },
       fail: function(err) {
         reject(err)
       }
     })
   })
 }
export default {
  showToast,
  queryString,
  getDevice
}
