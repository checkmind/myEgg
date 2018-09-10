import { getUrl, postUrl } from '../../util/fetch';

export const IS_LOGIN = 'IS_LOGIN';  //是否登录
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UNREAD = 'UNREAD' // 是否有未读消息

export const MAILLIST = 'MAILLIST'
export const MAILLISTINIT = 'MAILLISTINIT'

export const CHAATING = 'CHAATING'
// mail
export const MAILWORDS = 'MAILWORDS'
//开始获取数据
export const requestPosts = path => {
  return {
    type: REQUEST_POSTS,
    path
  }
}


export const judgeLogin = isLogin => {
  return {
    type: IS_LOGIN,
    isLogin
  }
}


//获取数据成功
export const receivePosts = (path, json) => {
  return {
    type: RECEIVE_POSTS,
    path,
    json
  }
}

export const readConfig = (unread) => {
  return {
    type: UNREAD,
    unread
  }
}
// 备忘录列表
export const mailListConfig = (payload) => {
  console.log("get mail list")
  console.log(payload)
  return {
    type: MAILLIST,
    payload
  }
}
// 初始化备忘录列表
export const mailListInit = (payload) => {
  //console.log("get mail list")
  return {
    type: MAILLISTINIT,
    payload
  }
}
// 竹简内容
export const mailWordsConfig = payload => {
  return {
    type: MAILWORDS,
    payload
  }
}
/* 异步方法 */
/**
 * 注册
 */
export const sing = (payload) => {
  return async dispatch => {
    console.log(payload)
    let list = await getUrl('sing', payload)
    return list
  }
}
/**
 * 登陆
 */
export const login = (payload) => {
  return async dispatch => {
    let list = await getUrl('login',payload)
    return list
  }
}
/**
 * 获取验证码
 */
export const getCode = payload => {
  return async dispatch => {
    return await getUrl('getCode',payload)
  }
}
/*
 * 得到备忘录列表
**/
export const getMailList = () => {
  return async dispatch => {
    dispatch(requestPosts())
    let list = await getUrl('getPoems')
    // dispatch(mailListInit([]))
    dispatch(mailListConfig(list.data))
    // dispatch(mailListConfig(list.data))
  }
}
/**
 * 上传备忘录
 */
export const postMailList = () => {
  return async dispatch => {
    let list = await postUrl('postPoems', {
      name: 'dh'
    })
    return list;
  }
}
/*
 * 得到竹简
**/
export const getMailWords = (id) => {
  return dispatch => {
    dispatch(mailWordsConfig(['锄禾', '李绅', '锄禾日当午', '汗滴禾下土', '谁知盘中餐', '粒粒皆辛苦']))
  }
}
