import { IS_LOGIN, UNREAD } from '../Action/index'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../Action/index'
import { MAILLIST, MAILLISTINIT, MAILWORDS } from '../Action/index'
//import Immutable from 'immutable';


//const defaultlState = Immutable.fromJS({ data: {}, isFetching: false })
//首次渲染时获取数据
export const fetchData = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return []
        case RECEIVE_POSTS:
            return [...state, ...action.path];//返回一个新的state
        default:
            return state
    }
}

export const loginOrNot = (state = {}, action = {}) => {
    if (window.localStorage.isLogin) {
        state['isLogin'] = true
        return state;
    }
    switch (action.type) {
        case IS_LOGIN:
            return action.isLogin
        default:
            return state
    }
}
export const unRead = (state = 0, action = {}) => {
    switch (action.type) {
        case UNREAD:
            return action.unread;
        default:
            return state;
    }
}
export const mailList = (state = [], action = {}) => {
    switch (action.type) {
        case MAILLIST:
            let a;
            state.find((val, index) => {
                if (+val.id === +action.payload[0].id) {
                    a = index;
                }
            })
            console.log('a 是', a)
            if (typeof a === 'number') {
                state[a] = action.payload[0]
            } else {
                state = [...state, ...action.payload]
            }
            return [...state];
        case MAILLISTINIT:
            return [];
        default:
            return state;
    }
}
export const mailWords = (state = [], action = {}) => {
    switch (action.type) {
        case MAILWORDS:
            return action.payload;
        default:
            return state;
    }
}
