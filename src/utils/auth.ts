import Cookies from "js-cookie"

const port = window.location.port

// 获取token
export function getToken(TokenKey: string) {
  return Cookies.get(TokenKey == "_token" ? TokenKey + port : TokenKey)
}

// 将token存储到cookie中
export function setToken(TokenKey: string, token: string) {
  // new Date(new Date().getTime() + 1000) 下一秒
  // 7 天
  // return Cookies.set(TokenKey, token, { expires: 7 })
  return Cookies.set(TokenKey + port, token)
}

// 移除token
export function removeToken(TokenKey: string) {
  return Cookies.remove(TokenKey + port)
}
