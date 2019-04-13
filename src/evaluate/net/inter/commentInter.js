import Api from '../index'


// 评论
const comment = async(param)=>{
    return await Api.netFetch('comment/create',param,false)
}

const commentList = async(param)=>{
    return await Api.netFetch('comment/list',param,false)
}




export default {
    comment,
    commentList
}
