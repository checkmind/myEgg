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


export const judgeLogin = isLogin=>{
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

export const readConfig = (unread) =>{
  return {
    type: UNREAD,
    unread
  }
}
// 备忘录列表
export const mailListConfig = (payload)=>{
  //console.log("get mail list")
  return {
    type: MAILLIST,
    payload
  }
}
// 初始化备忘录列表
export const mailListInit = (payload)=>{
  //console.log("get mail list")
  return {
    type: MAILLISTINIT,
    payload
  }
}
// 竹简内容
export const mailWordsConfig = payload =>{
  return {
    type: MAILWORDS,
    payload
  }
}
/* 异步方法 */
/*
 * 得到备忘录列表
**/
export const getMailList = () => {
  return dispatch=>{
   // setTimeout(function(){
      let items =[{
                title: "记住出门带钥匙",
                author: "杜浩",
                id: 1,
                timer : new Date().toString()
            }];
      dispatch(mailListInit([]))
      dispatch(mailListConfig(items))
  //  },500)
  }
}

/*
 * 得到竹简
**/
export const getMailWords = (id)=> {
  return dispatch => {
    dispatch(mailWordsConfig(['锄禾','李绅','锄禾日当午','汗滴禾下土','谁知盘中餐','粒粒皆辛苦']))
  }
}
