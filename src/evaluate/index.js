import inter from './net/inter/commentInter';
import React, { Component } from 'react';
import './style/index.css';
import Message from './component/Message';
import FormComment from './component/FormComment';
import 'antd/dist/antd.css';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            allComment: '',
            replyLoading:false
        };

        this.uri = document.location.host + document.location.pathname;
        this.comment_guid = '';

    }

    /**
     * 获取留言列表
     */
    componentWillMount() {
        // 一个uri 对应一个资源id

        /**
         *
         * 进入时  传入uri  获取对应guid  在此页面每次都使用guid 进行获取数据
         *
         * 获取不到guid时  再使用uri 获取数据
         *
         */

        let param = this.structureParam();

        inter.commentList(param).then((res) => {
            if(res.success) {
                console.log(res)
                let resourceGuid = res.result.commentGuid;
                if (resourceGuid === '' || resourceGuid === undefined) {
                    alert('暂时出了点小问题');
                } else {
                    if (this.comment_guid !== resourceGuid)  {
                        this.comment_guid = resourceGuid;
                    }
                }

                this.setState({
                    allComment: res.result.commentList,
                });
            }
        });
    }

    /**
     * 检测是否有guid
     * @returns {boolean}
     */
    checkCommentGuid = () => {
        return this.comment_guid !== '';
    };

    /**
     * 直接留言
     */
    handleSubmit = (value) => {
        const { allComment } = this.state;
        if (!value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        let param = this.structureParam(value);

        inter.comment(param).then((res) => {
            if (res.success) {
                // console.log(res.result);
                allComment.push(res.result.comment);

                this.setState({
                    allComment,
                    submitting: false,
                    value: '',
                });

            }
        });
    };


    /**
     * 构造请求参数
     * @param data 业务参数
     * @returns 最终param
     */
    structureParam = (data = {}) => {

        let param;

        if (this.checkCommentGuid()) {
            param = {resource_guid: this.comment_guid};
        } else {
            param = {resource_uri:this.uri};
        }

        // 其他业务参数加入
        Object.keys(data).forEach(function(key){
            param[key] = data[key];
        });

        return param;
    };


    /**
     * 回复评论提交
     * @param value
     * @param id
     */
    submit = (value, id) => {

        this.setState({
            replyLoading:true
        });

        const { allComment } = this.state;

        value.father_id = id;

        let param = this.structureParam(value);

        inter.comment(param).then((res) => {
            if (res.success) {
                let comments = this.getCurrentPart(allComment,res.result.comment);
                this.setState({
                    allComment:comments,
                    replyLoading:false
                });
            }
        });
    };


    /**
     * 查找节点 将该节点放入到列表
     */
    getCurrentPart = (allComment, comment) => {
        if (comment.pid === 0) {
            allComment.push(comment);
        }else{
            try{
                allComment.forEach((item) => {
                    if (item.id === comment.pid) {

                        // 处理pid为null情况
                        if (!item.pid || typeof item.pid == 'number') {
                            item.pid = [comment];
                        }else{
                            item.pid.push(comment);
                        }

                        throw new Error('yes');
                    } else {
                        if (item.pid) {
                            this.getCurrentPart(item.pid, comment);
                        }
                    }
                });
            }catch (e) {

            }

        }

        return allComment;
    };

    /**
     *  递归渲染
     */
    generateTree = (tree) => {
        let comment = [];

        if (tree instanceof Array) {
            let list = [];
            for (let item of tree) {
                list.push(this.generateTree(item));
            }
            comment.push(
                <ul key="single">
                    {list}
                </ul>
            );
        } else {

            if (tree && tree.id){
                comment.unshift(
                    <Message
                        key={tree.id}
                        id={tree.id}
                        name={tree.name}
                        email={tree.email}
                        content={tree.content}
                        onSubmit={this.submit}
                        submiting={this.state.replyLoading}
                    >
                        {this.generateTree(tree.pid)}
                    </Message>
                );
            }
        }
        return comment;
    };

    render() {

        const { submitting, allComment } = this.state;

        let tree = allComment || [];

        return (
            <div className="App">
                <FormComment submitting={submitting} onSubmit={this.handleSubmit} />
                {this.generateTree(tree)}
            </div>
        );
    }
}

export default Comment;
